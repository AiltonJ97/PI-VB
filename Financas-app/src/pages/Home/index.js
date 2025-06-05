import React, { useContext, useEffect, useState } from "react";
import { BackGround, ListBalance } from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from "../../components/Headers";

import api from "../../services/api";
import { format } from 'date-fns';

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMoviment, setDateMoviment] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        async function getMoviments(params) {
            let dateFormated = format(dateMoviment, 'dd/MM/yyyy');

            const balence = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })
            if (isActive){
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
        </BackGround>
    )
}