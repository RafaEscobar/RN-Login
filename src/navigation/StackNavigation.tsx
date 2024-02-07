import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Login } from '../screens';
import { Dashboard } from '../screens/Dashboard';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}