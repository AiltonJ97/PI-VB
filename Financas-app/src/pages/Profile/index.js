import React from "react";
import { useContext } from "react";
import {Container, Message, Name, NewLink, NewText, LogoutButtom, LogoutText} from './styles';

import  Header  from '../../components/Headers';
import { AuthContext } from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native'

export default function Profile(){
    const { user, Logout } = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <Container>
            <Header title="Meu Perfil"/>

            <Message>Bem Vindo de Volta!</Message>

            <Name numberOfLines={1}>
                {user && user.name}
            </Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Fazer Registro</NewText>
            </NewLink>

            <LogoutButtom onPress={() => Logout()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButtom>

        </Container>
    )
}