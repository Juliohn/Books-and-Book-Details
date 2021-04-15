import styled from 'styled-components/native';
import { Modal, Image, Dimensions } from 'react-native';
import Input from '~/components/Input';

export const Container = styled.View.attrs({})`
  align-content: center;  
  margin: 20px;
  flex: 1;    
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Card = styled.TouchableOpacity`
  flex-direction: row;    
  margin-bottom: 10px;
  background-color: #ffffff;    
  width:100%; 
  min-height:200;  
`;

export const Header = styled.View`
  flex-direction: row;      
  width: 90%;
  margin: 0 auto;    
  justify-content:space-between;
`;



export const HeaderLogo = styled.View`  
  justify-content: center;
  align-items:flex-start;     
  margin-right:40px;  
  width: 104;
  height: 36;    
`;

export const ImageLogo = styled(Image)`
`;

export const HeaderTitle = styled.View`  
  justify-content: center;
  align-items:center;   
  width: 77;
  height: 40;      
`;

export const ImageTitle = styled(Image)`    
`;


export const FragmentLogoTitle = styled.View` 
  width:250px;
  flex-direction: row;    
`;

export const HeaderIcon = styled.TouchableOpacity`  
  justify-content: center;
  align-items:flex-end; 
  width: 32;
  height: 32;          
`;

export const ImageIcon = styled(Image)`
`;

export const FragmentMain = styled.View`  
  width:100%;  
  min-height:100;  
`;

export const FragmentTitle = styled.View`  
  margin-top:8%;
  width:100%;    
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2
})` 
  color: #333333;
  font-size: 20px;
  text-align: left;  
  font-weight:bold;
`;

export const FragmentAuthor = styled.View`  
  margin-top:3%;
  width:100%;          
`;

export const Author = styled.Text.attrs({
  numberOfLines: 2
})`  
  color: #AB2680;
  font-size: 18px;
  text-align: left;        
  
`;

export const FragmentImage = styled.View`  
  justify-content: center;
  align-items:center;  
  min-width:35%;    
`;

export const ImageInFragment = styled(Image)`
    width: 105;
    height: 155;
`;

export const FragmentDescription = styled.View`      
  min-width:65%;  
`;

export const FragmentInfo = styled.View`  
  width:100%;  
  min-height:100;  
`;


export const Info = styled.Text.attrs({
  numberOfLines: 1
})`  
  color: #999999;
  font-size: 18px;
  text-align: left;  
  margin-bottom:5px;  
`;

export const ButtonTop = styled.TouchableOpacity`
  background: #d09222;
  padding: 12px;
  border-radius: 4px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const ButtonTopText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;





export const ButtonCloseModal = styled.TouchableOpacity`
  position: absolute;
  width: 30;
  height: 30;
  align-items: center;
  justify-content: center;
  left: 90%;
  top: 10;
  background: #d09222;
  border-radius: 100px;
`;

export const ModalView = styled(Modal)``;

export const ModalBody = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 95%;

  min-height: 470px;
  margin: 21% auto 0;
  flex-direction: column;
  padding: 30px 0 -140px;
  border-radius: 20px;
  border: 1px solid #c7c7c7;
`;