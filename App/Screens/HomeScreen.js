import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import * as firebase from "firebase";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    _onSignOut = () => {
        firebase.auth().signOut();

        this.props.navigation.navigate('Auth');
    };

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hi {this.props.currentUser && this.props.currentUser.email}!
                </Text>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._onSignOut} />
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
        currentUser: state.currentUser
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);