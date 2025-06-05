import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex-direction: row;
    alignItems: 'center';
    justifyContent: 'flex-start';
    marginTop: 30px;
    marginBottom: 15px;
    marginLeft: 15px;
    width: 100%;
    maxHeight: 60px;
`;
export const Title = styled.Text`
    font-size: 22px;
    marginLeft: 8px;
`;
export const ButtonMenu = styled.TouchableOpacity`
    justifyContent: 'center';
    alignItems: 'center';
`;