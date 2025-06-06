import React from "react";

import { ButtonMenu, Container, Title } from './styles';
import Icon from '@react-native-vector-icons/evil-icons'

import { useNavigation } from '@react-navigation/native';

export default function Header({ title }){
    const navigation = useNavigation();
    
    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Icon name="navicon" size={35} color="#121212"/>
            </ButtonMenu>
            { title && (
                <Title>{title}</Title>
                )
            }
        </Container>
    )
}