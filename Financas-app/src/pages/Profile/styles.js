import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    backgroundColor: #f0f4ff;
    alignItems: center;
`;

export const Message = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    marginTop: 24px;
`;

export const Name = styled.Text`
    fontSize: 24px;
    marginTop: 8px;
    marginBottom: 24px;
    padding: 0 14px;
    color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
    backgroundColor: #3b3dbf;
    width: 90%;
    height: 45px;
    borderRadius: 8px;
    alignItems: center;
    justifyContent: center;
    marginBottom: 14px;
`;

export const NewText = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    color: #fff;
`;

export const LogoutButtom = styled.TouchableOpacity`
    alignItems: center;
    justifyContent: center;
    width: 90%;
    height: 45px;
    borderRadius: 8px;
    borderWidth: 1px;
    borderColor: #c62c36;
`;

export const LogoutText = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    color: #c62c36;
`;

