import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { createUser, signin, tarefasCollection } from "../../config/firebase";
import { addDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import styles from "./style";

export default function CriarConta({ route, navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaCheck, setSenhaCheck] = useState('');

    useEffect(() => {
        setEmail('');
        setSenha('');
        setSenhaCheck('');
    }, []);

    const criarConta = async () => {
        try {
            if (senha.toString() === senhaCheck.toString()) {
                const user = await createUser(email, senha);

                navigation.navigate("Lista de contatos");
            } else {
                throw new Error('Senhas nao combinam');
            }
        } catch (error) {
            console.error(error);
        }
        
        setEmail('');
        setSenha('');
        setSenhaCheck('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="example@example.com"
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="*******"
                secureTextEntry
            />
            <Text style={styles.label}>Confirme a senha:</Text>
            <TextInput
                style={styles.input}
                value={senhaCheck}
                onChangeText={setSenhaCheck}
                placeholder="*******"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={criarConta}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    );
}
