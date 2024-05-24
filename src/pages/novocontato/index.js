import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { criarContato, editarContato } from "../../config/firebase";
import { addDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import styles from "./style";

export default function NovoContato({ route, navigation }) {

    useEffect(() => {
        if (!!route.params.item) {
            setNome(route.params.item.nome);
            setEmail(route.params.item.email);
            setNumero(route.params.item.numero);
            setTitulo('Salvar Edição');
        } else {
            setTitulo('Adicionar contato')
        }
    }, [])

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [titulo, setTitulo] = useState('');

    const handleAdicionarContato = async () => {
        if (!!route.params.item) {
            await editarContato(route.params.item.id, { nome, email, numero, userId: route.params.item.userId });
        } else {
            await criarContato(nome, email, numero);
        }

        setNome('');
        setEmail('');
        setNumero('');
        route.params.fetchTask();
        navigation.navigate("Lista de contatos");

    };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite o email"
            />
            <Text style={styles.label}>Numero:</Text>
            <TextInput
                style={styles.input}
                value={numero}
                onChangeText={setNumero}
                placeholder="Digite o numero"
            />
            <TouchableOpacity style={styles.button} onPress={handleAdicionarContato}>
                <Text style={styles.buttonText}>{titulo}</Text>
            </TouchableOpacity>
        </View>
    );
}
