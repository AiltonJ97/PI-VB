import styled from "styled-components/native";

export const Container = styled.View`
    backgroundColor: #${props => props.bg};
    marginLeft: 14px;
    marginRight: 14px;
    borderRadius: 4px;
    justifyContent: 'center';
    alignItems: 'flex-start';
    width: 300px;
    paddingLeft: 14px;
`;
export const Label = styled.Text`
    fontSize: 30px;
    fontWeight: bold;
    color: '#FFF';
    marginBottom: 10px;
    marginTop: 20px;
`;
export const Balance = styled.Text`
    fontSize: 25px;
    color: '#FFF';
`;
