import React, { useContext } from 'react';
import { Alert, Platform } from 'react-native';
import { 
    BackGround, 
    Container, 
    Logo, 
    AreaInput, 
    Input, 
    SubmitText, 
    SubmitButton, 
    Link, 
    LinkText } from './styles';

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';



export default function SingIn(){

    const { user } = useContext(AuthContext)
    const navigation = useNavigation();
    
    function handleSingIn(){
        console.log(user.nome)
    }

    return(
        <BackGround>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Email"
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Senha"
                        />
                </AreaInput>    

                <SubmitButton onPress={handleSingIn}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={()=> navigation.navigate('SingUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
                
            </Container>
        </BackGround>
    )
}