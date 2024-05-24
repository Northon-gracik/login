import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { signin, tarefasCollection } from "../../config/firebase";
import { addDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import styles from "./style";

export default function Login({ route, navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        setEmail('');
        setSenha('');
    }, []);

    const entrar = async () => {
        try {
            const user = await signin(email, senha);

            navigation.navigate("Lista de contatos");
        } catch (error) {
            console.error(error);
        }
        setEmail('');
        setSenha('');

    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="example@example.com"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="*******"
                secureTextEntry

            />
            <TouchableOpacity style={styles.button} onPress={entrar}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ancora} onPress={() => { navigation.navigate('Criar conta') }}>
                <Text style={styles.textAnconra}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}
