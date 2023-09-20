import { useState,useEffect } from "react";
import { View,Text } from "react-native";
import { TextInput, Avatar, Button } from "react-native-paper";
import { styles } from "../assets/style/allstyle";
//firebase
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from "../firebaseConfig";

export default function LoginScreen(){


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const [showPass, setShowPass] = useState('');
    return(
        <View style={styles.container}>
            <Avatar.Image
                style={{ marginBottom: 20 }}
                size={100}
                source={require('../assets/imgs/imglogin.png')} />
            <View style={{ borderWidth: 2, borderColor: 'pink', borderRadius: 10, padding: 50 }}>
                <TextInput
                    autoFocus
                    label="Correo Electrónico"
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={{ marginTop: 20 }}
                    label="Contraseña"
                    secureTextEntry ={!showPass}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                    right={<TextInput.Icon icon={showPass ? "eye" : "eye-off"} onPress={() =>setShowPass (!showPass)}/>}
                />
                <Button
                    style={{ marginTop: 20, backgroundColor: 'black' }}
                    icon="login"
                    mode="outlined"
                    //onPress={handleSignIn}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: 'black' }}
                    icon="account"
                    mode="outlined"
                    //onPress={handleCreateAccount}
                >
                    Crear Cuenta
                </Button>
                <Text style={{color:'green'}}>{message}</Text>
            </View>
        </View>
    )
}
