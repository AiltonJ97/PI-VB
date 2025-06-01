import { createContext, useState } from "react";
import React from "react";
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

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
    return(
        <AuthContext.Provider value={{ signed : !!user, user, singUp, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )
}