import { createContext, useState, useEffect } from "react";
import React from "react";
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    //Manter o Usuario Logado e Autenticar o Token
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@fToken');

            if(storageUser){
                const response = await api.get('/me', {
                    headers:{
                        'Authorization': `Bearer ${storageUser}`
                    }
                }).catch(() => {
                    setUser(null);
                })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false);
            }   
            setLoading(false);
        }
        loadStorage();
    }, [])

    //Função de Cadastrar Usuario
    async function singUp(email, nome, password) {
        setLoadingAuth(true);
        
        try{
            const response = await api.post('/users', {    
                name: nome,
                password: password,
                email: email,
            })
            
            setLoadingAuth(false);
            navigation.goBack();
        } catch (err) {
            console.log("Erro ao Cadastrar: ",err);
            setLoadingAuth(false);
        }
    }

    //Função de Login, Buscar Dados de Cadastro do Banco de Dados
    async function singIn(email, password) {
        setLoadingAuth(true);

        try{
            const response = await api.post('/login', {
                    email: email,
                    password: password,
                })

                const {id, name, token} = response.data;
                const data = {
                    id, name, token, email,
                };
                
                await AsyncStorage.setItem('@fToken', token);

                api.defaults.headers['Authorization'] = `Bearer ${token}`;

                setUser({
                    id,name,email,
                })

                setLoadingAuth(false);

        }catch (err) {
            console.log("Erro ao Logar", err);
            setLoadingAuth(false);
        }
    }

    async function Logout() {
        await AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed : !!user, user, singUp, singIn, Logout, loadingAuth, loading }}>
            {children}
        </AuthContext.Provider>
    )
}