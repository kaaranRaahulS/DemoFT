import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SplashScreen from '../screens/Authentication/SplashScreen';
import Login from '../screens/Authentication/Login';
import SignUpType from '../screens/Authentication/SignUpType';
import StudentSignUp from '../screens/Authentication/StudentSignup';
import TeacherSignUp from '../screens/Authentication/TeacherSignUp';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import ChooseCourse from '../screens/Authentication/ChooseCourse';

import StudentDashboard from '../screens/MainScreens/StudentDashboard';
import TeacherDashboard from '../screens/MainScreens/TeacherDashboard';


const Stack = createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

// var isSignedIn = false;

const Authentication = () => (
    // isSignedIn ? (
        // <NavigationContainer>
        //     <Tab.Navigator>
        //         <Tab.Screen name="Dashboard" component={StudentDashboard} />
        //         <Tab.Screen name="StudentDashboard" component={SettingsScreen} />
        //     </Tab.Navigator>
        // </NavigationContainer>

    // ) : (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUpType" component={SignUpType}/>
                    <Stack.Screen name="StudentSignUp" component={StudentSignUp}/>
                    <Stack.Screen name="TeacherSignUp" component={TeacherSignUp}/>
                    <Stack.Screen name="ChooseCourse" component={ChooseCourse}/>
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                </Stack.Navigator>
             </NavigationContainer>

        // )
)

export default Authentication;