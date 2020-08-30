import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import Colors from '../../Colors/Colors';
import Navigation from '../Navigations/Navigation';



const SplashScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.accentColor} barStyle="light-content" />
            <View style={styles.header}>
                <Image
                    source={require('../../Assests/LOGO1.png')}
                    style={styles.logo}
                />
            </View>
            <View
                style={[styles.footer, {
                    backgroundColor: Colors.primaryColor
                }]}
            >
                <Text style={[styles.title, {
                    // color: 'white'
                }]}>Stay connected with everyone!</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <View style={styles.signIn}>
                        <Text style={styles.text}>Get Started !!!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accentColor
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
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 50
    },
    signIn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        backgroundColor: '#3DC1FF',
        flexDirection: 'row'
    }
});