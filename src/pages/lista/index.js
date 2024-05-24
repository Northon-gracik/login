import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Alert } from "react-native";
import { auth, buscarContatos, createUser, criarContato, deletarContato, logout, signin, tarefasCollection } from "../../config/firebase.js";
import styles from "./style.js";
import { addDoc, collection, getDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function Lista({ navigation }) {
      
    const route = useRoute();
    const [contatos, setContatos] = useState([]);

    function handleExcluir(id) {
        Alert.alert('Deseja excluir?', 'nao podera ser desfeito', [
            {
              text: 'Cancel',
              onPress: () => console.log('Exclusao negada'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => excluirContato(id)},
          ]);
    }

    async function excluirContato(id) {
        try {
            await deletarContato(id);
            console.log('Documento deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar o documento:', error);
        }
        await fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);
    

    async function fetchData() {
        try {
            setContatos([]);
            if(auth.currentUser === null){
                navigation.navigate('Entrar');
                return;
            }
            setContatos(await buscarContatos());
        } catch (error) {
            console.error('Erro ao buscar dados:', error.message);
        }

    }

    const renderItem = ({ item, index }) => (
        <View style={styles.taskContainer}>
            <View>
                <Text style={styles.title}>Nome: {item.nome}</Text>
                <Text style={styles.title}>Email: {item.email}</Text>
                <Text style={styles.title}>Numero: {item.numero}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contato', {fetchTask: fetchData, item})}>
                    {/* <Ionicons name="edit" size={20} color="blue" /> */}
                    <Text style={{color: 'orange'}}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleExcluir(item.id)}>
                    {/* <Ionicons name="delete" size={20} color="red" /> */}
                    <Text style={{color: 'red'}}>Deletar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>Meus contatos</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={contatos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Contato', {fetchTask: fetchData})}>
                <Text style={styles.addButtonText}>Novo contato</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ancora} onPress={() => {logout(); navigation.navigate('Entrar')}}>
                <Text style={styles.textAnconra}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};
