import React from "react";
import { Platform, View } from "react-native";
import { AreaInput, BackGround, Container, Input,SubmitButton, SubmitText } from "../SingIn/styles";

export default function SingUp(){
    return(
        <BackGround>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        />
                </AreaInput>
                
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
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </BackGround>
    )
}