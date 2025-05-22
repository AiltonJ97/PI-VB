import React, { useContext, useState } from "react";
import { Platform, View } from "react-native";
import { AreaInput, BackGround, Container, Input,SubmitButton, SubmitText } from "../SingIn/styles";
import { AuthContext } from "../../contexts/auth";


export default function SingUp(){
    const {singUp} = useContext(AuthContext);

    function handleSingUp(){
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
                        onChangeText={setNome}
                    />
                </AreaInput>
                
                <AreaInput>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </AreaInput>
                
                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSingUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </BackGround>
    )
}