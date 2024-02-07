import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { LoginModule } from "../modules";

export const Login = ({ navigation: { navigate }, route }:any) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <View>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="email@gmail.com"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="***********"
            />
            <Button
                onPress={() => {LoginModule([email, password])}}
                title="Iniciar sesión"
                color="#841584"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});