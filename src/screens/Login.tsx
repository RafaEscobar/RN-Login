import React from "react";
import { Button, View } from "react-native";

export const Login = ({ navigation: { navigate }, route }:any) => {
    return (
        <View>
            <Button
                onPress={() => {
                    navigate('Dashboard')
                }}
                title="Iniciar sesión"
                color="#841584"
            />
        </View>
    )
}