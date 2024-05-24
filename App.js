import { StatusBar } from 'expo-status-bar';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lista from './src/pages/lista';

import Login from './src/pages/login';
import CriarConta from './src/pages/criarconta';
import NovoContato from './src/pages/novocontato';
import { auth } from './src/config/firebase';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName={auth.currentUser !== null ? "Lista" : "Entrar"}>
        <Stack.Screen
          name="Lista de contatos"
          component={Lista}
          options={{
            headerTintColor: "#5a9a99",
          }}
        />
        <Stack.Screen
          name="Entrar"
          component={Login}
          options={{
            headerTintColor: "#5a9a99",
          }}
        />
        <Stack.Screen
          name="Criar conta"
          component={CriarConta}
          options={{
            headerTintColor: "#5a9a99",
          }}
        />
        <Stack.Screen
          name="Contato"
          component={NovoContato}
          options={{
            headerTintColor: "#5a9a99",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

