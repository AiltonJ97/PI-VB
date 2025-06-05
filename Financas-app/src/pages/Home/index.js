import React, { useEffect, useState } from "react";
import { BackGround, ListBalance, Title, Area, List } from './styles';
import Icon from "@react-native-vector-icons/evil-icons";
import { TouchableOpacity } from "react-native";
import { format } from 'date-fns';
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";

import BalanceItem from "../../components/BalanceItem";
import Header from "../../components/Headers";
import HitoricoList from "../../components/HistoricoList";


export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [moviments, setMoviments] = useState(['']);

    const [dateMoviment, setDateMoviment] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        async function getMoviments(params) {
            let dateFormated = format(dateMoviment, 'dd/MM/yyyy');

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })

            const balence = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })
            if (isActive){
                setMoviments(receives.data);
                setListBalance(balence.data);
            }
        }

        getMoviments();
        return () => isActive = false;
    },[isFocused])

    return(
        <BackGround>
            <Header title="Minhas Movimentações"/>
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={ ({item}) => (<BalanceItem data={item}/>)}
            />

            <Area>
                <TouchableOpacity>
                <Icon name="calendar" size={40} color='#121212'/>
                </TouchableOpacity>
                <Title>Ultimas Movimentações</Title>
            </Area>

            <List
                data={moviments}
                keyExtractor={item => item.id}
                renderItem={( {item} ) => <HitoricoList data={item}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
            />

        </BackGround>
    )
}