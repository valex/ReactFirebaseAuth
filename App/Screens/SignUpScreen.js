import React from 'react'
import * as firebase from 'firebase';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'

class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'Please Sign Up',
    };

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', errorMessage: null };
    }

    _onSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
                <Text>Sign Up</Text>

                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <Button title="Sign Up" onPress={this._onSignUp} />

                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate('Login')}
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

export default SignUpScreen;