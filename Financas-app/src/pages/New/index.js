import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import Header from '../../components/Headers';

import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Types from "../../components/RegisterTypes";

export default function New(){
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    return(        
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <Background>
                <Header title="Registrando" />
                <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Input 
                        placeholder="Descrição do Registro"
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />
                    <Input 
                        placeholder="Valor"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <Types type={type} sendTypeChanged={(item) => setType(item)}/>

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}