import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {setCurrentUser} from "../Actions/mainActions";

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = () => {
        // Listen for authentication state to change.
        firebase.auth().onAuthStateChanged((user) => {
            this.props._onAuthStateChanged(user)
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        _onAuthStateChanged: (user) => {
            if (user != null) {
                console.log("We are authenticated now!");
            }

            dispatch(setCurrentUser(user));

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            ownProps.navigation.navigate(user ? 'App' : 'Auth');
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);