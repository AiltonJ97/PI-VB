import styled from "styled-components/native";

export const Container = styled.View`
    backgroundColor: #f0f3ff;
    borderRadius: 4px;
    marginLeft: 10px;
    marginRight: 10px;
    marginBottom: 14px;
    padding: 12px;
`;
export const Tipo = styled.View`
    flexDirection: row;
`;

export const TipoText = styled.Text`
    color: #fff;
    fontSize: 16px;
    fontStyle: italic;
`;

export const IconView = styled.View`
    flexDirection: row;
    backgroundColor: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'} ;
    paddingBottom: 4px;
    paddingTop: 4px;
    paddingRight: 8px;
    paddingLeft: 8px;
    borderRadius: 4px;
    marginBottom: 2px;
`;

export const ValorText = styled.Text`
    color: #121212;
    fontSize: 22px;
`;

