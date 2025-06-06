import styled from "styled-components/native";

export const BackGround = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;  
`;

export const AreaInput = styled.View`
    flex-direction: collum;
    width: 90%;
`;
export const Input = styled.TextInput`
    background-color: #FFF;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #3b3dbf;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;
export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;
export const Link = styled.TouchableOpacity`
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const LinkText = styled.Text`
    color: #171717;
`;