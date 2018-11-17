import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Web App other screen',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Other Screen
                </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(OtherScreen);