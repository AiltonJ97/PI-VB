import React from 'react';
import { Platform } from 'react-native';
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

export default function SingIn(){

    const navigation = useNavigation();
     
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

                <SubmitButton>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={()=> navigation.navigate('SingUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
                
            </Container>
        </BackGround>
    )
}