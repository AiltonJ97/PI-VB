import React, { useState, useContext } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
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
    const {singIn, loadingAuth} = useContext(AuthContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSingIn(){
        singIn(email, password);
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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>    

                <SubmitButton activeOpacity={0.8} onPress={handleSingIn}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF'/>
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={()=> navigation.navigate('SingUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
                
            </Container>
        </BackGround>
    )
}