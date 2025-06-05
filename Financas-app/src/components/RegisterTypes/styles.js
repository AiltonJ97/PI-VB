import styled from "styled-components/native";

export const RegisterCotainer = styled.View`
    flexDirection: row;
    width: 100%;
    paddingLeft: 5%;
    paddingRight: 5%;
    justifyContent: space-between;
    alignItems: center;
`;
export const RegisterTypeButton = styled.TouchableOpacity`
    backgroundColor: ${props => props.checked ? '#FFF' : '#e7e7e7'};
    width: 47%;
    height: 45px;
    justifyContent: center;
    alignItems: center;
    flexDirection: row;
    marginBottom: 14px;
    borderRadius: 4px;
    borderWidth: 1.5px;
    borderColor: ${props => props.checked ? '#3b3dbf' : 'transparent'};
`;

export const RegisterLabel = styled.Text`
    marginLeft: 8px;
    fontSize: 17px;
    fontWeight: bold,
`;
