import React from "react";
import Icon from '@react-native-vector-icons/evil-icons';

import {TipoText, Container, IconView, Tipo, ValorText} from './styles';

export default function HitoricoList({data}){
    return(
        <Container>
            <Tipo>
                <IconView tipo={data.type}>
                    <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                    size={20} color='#FFF' />
                    <TipoText>{data.type}</TipoText>
                </IconView>
            </Tipo>

            <ValorText> R$ {data.value} </ValorText>

        </Container>
    )
}