import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 95%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
  padding: 70px 0 50px;
`;

export const Title = styled.Text`
  color: #2f722c;
  font-size: 25px;
  text-transform: uppercase;
`;

export const ContainerImagem = styled.View`
  border-radius: 15;
  width: 200px;
  height: 200px;
`;

export const SimageFirts = styled.View`
  border-radius: 15;
  justify-content: center;
  align-items: center;
`;

export const SImage = styled.Image`
  height: 185px;
  width: 100%;
`;

export const SText = styled.Text`
  color: #2f722c;
  font-size: 17px;
  text-transform: uppercase;
  text-align: center;
  line-height: 26px;
`;

export const STouchableOpacity = styled.TouchableOpacity`
  background-color: #2f722c;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const STextButton = styled.Text`
  color: #ffffff;
  font-size: 17px;
  text-transform: uppercase;
`;

export const ContainerButton = styled.View`
  margin: 20px 0;
  height: auto;
  align-self: center;
  width: 70%;
  text-align: justify;
`;

export const ContainerMessage = styled.View`
  padding: 10px;
  height: auto;
  justify-content: center;
  align-self: center;
  max-width: 300px;
  text-align: center;
`;
