import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Alert,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import Colors from '../../Colors/Colors';
import Navigation from '../Navigations/Navigation'

const Login = ({ navigation }) => {

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar backgroundColor={Colors.accentColor} barStyle="light-content" />
            <View style={styles.header}>
                <Image
                    source={require('../../Assests/LOGO.png')}
                    style={styles.logo}
                />
            </View>
            <View
                style={[styles.footer, {
                    backgroundColor: Colors.primaryColor
                }]}>
                <Text style={[styles.title, {
                    // color: 'white'
                }]}>Login</Text>

                <View style={styles.Input}>
                    <TextInput placeholder="Email" />
                </View>
                <View style={styles.Input}>
                    <TextInput secureTextEntry={true} placeholder="Password" />
                </View>
                <View style={styles.text} >
                    <TouchableOpacity onPress={() => Alert.alert("hello")}>
                        <Text>Sign Up With New Account ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ForgotPasswordContainer}>
                    <Text>Forgot Password ?</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => Alert.alert("hello")}>
                        <View style={styles.signIn}>
                            <Text style={styles.text}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    );
};

export default Login;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accentColor,
        position: 'relative'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#3DC1FF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#3DC1FF',
        marginTop: 5,
        fontWeight:'bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    ForgotPasswordContainer:
    {
        alignItems: 'flex-end',
        marginTop:10
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#3DC1FF',
        flexDirection: 'row',
        backgroundColor: Colors.accentColor
    },
    Input:
    {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.secondaryColor,
        padding: 10,
        marginTop: 5,
        alignItems: 'center'
    }
});