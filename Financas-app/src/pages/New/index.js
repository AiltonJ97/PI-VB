import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, Alert } from "react-native";
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api';
import Header from '../../components/Headers';
import Types from "../../components/RegisterTypes";

export default function New(){
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');
    const navigation = useNavigation();

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null){
            alert('Preencha todos os campos!!')
            return;
        }

        Alert.alert(
            'Comfirmando Dados: ',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: handleAdd
                }
            ]
        )
    }

    async function handleAdd(params) {
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })
        navigation.navigate('Home');
        setLabelInput('');
        setValueInput('');
    }

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

                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}