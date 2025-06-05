import React, { useState } from "react";
import { RegisterCotainer, RegisterLabel, RegisterTypeButton } from "./styles";
import Icon from "@react-native-vector-icons/evil-icons";

export default function Types({type, sendTypeChanged}){
    const [typeChecked, setTypeChecked] = useState(type);

    function changeType(name){
        if(name === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita');
        } else {
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    }

    return(
        <RegisterCotainer>
            <RegisterTypeButton checked={
                typeChecked === 'receita' ? true : false} 
                onPress={() => changeType('receita')
            }>    
                <Icon name="arrow-up" size={25} color='#121212'/>
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton checked={
                typeChecked === 'despesa' ? true : false}
                onPress={() => changeType('despesa')
            }>    
                <Icon name="arrow-down" size={25} color='#121212'/>
                <RegisterLabel>
                    Despesa
                </RegisterLabel>
            </RegisterTypeButton>
        </RegisterCotainer>
    )
}