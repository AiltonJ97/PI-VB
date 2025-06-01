import React, { useContext, useState } from "react";
import { ActivityIndicator, Platform, View } from "react-native";
import { AreaInput, BackGround, Container, Input,SubmitButton, SubmitText } from "../SingIn/styles";
import { AuthContext } from "../../contexts/auth";


export default function SingUp(){
    const {singUp, loadingAuth} = useContext(AuthContext);

    function handleSingUp(){
        if(nome === '' || email === '' || password === '') return;
        singUp(email, nome, password);
    }
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <BackGround>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                
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

                <SubmitButton onPress={handleSingUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF"/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>
            </Container>
        </BackGround>
    )
}