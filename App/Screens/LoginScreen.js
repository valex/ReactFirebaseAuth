import React from 'react'
import * as firebase from 'firebase';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Please login',
    };

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', errorMessage: null };
    }

    _onLogin = () => {
        const { email, password } = this.state;

        // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('App'))
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error', errorCode);
                this.setState({ errorMessage: errorMessage })
            })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>

                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => {this.setState({ email })}}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <Button title="Login" onPress={this._onLogin} />

                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
});

export default LoginScreen;