import { createContext, useState } from "react";
import React from "react";
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const navigation = useNavigation();

    const [user, setUser] = useState({
        nome: 'Ailton'
    })

    async function singUp(email, nome, password) {
        try{
            const response = await api.post('/users', {    
                name: nome,
                password: password,
                email: email,
            })

            navigation.goBack();
        } catch (err) {
            console.log("Erro ao Cadastrar: ",err)
        }
    }
    return(
        <AuthContext.Provider value={{ user, singUp }}>
            {children}
        </AuthContext.Provider>
    )
}