import styled from 'styled-components/native';


export const BackGround = styled.SafeAreaView`
    flex: 1;
    background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
    maxHeight: 190px;
`;
export const Area = styled.View`
    marginTop: 24px;
    backgroundColor: #FFF;
    borderTopLeftRadius: 15px;
    borderTopRightRadius: 15px;
    flexDirection: row;
    paddingLeft: 14px;
    paddingRight: 14px;
    alignItems: baseline;
`;
export const Title = styled.Text`
    marginLeft: 4px;
    color: #121212;
    marginBottom: 14px;
    fontWeight: bold;
    fontSize: 18px;
`;
export const List = styled.FlatList`
    flex: 1;
    backgroundColor: #FFF;
`;