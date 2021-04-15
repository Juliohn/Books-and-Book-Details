import styled from 'styled-components/native';
import { Modal, Image, Dimensions } from 'react-native';
import Input from '~/components/Input';


export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;  
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
  width:300px;
  flex-direction: row;    
`;
export const ImageIcon = styled(Image)`
`;
export const Card = styled.View`    
  background-color: #ffffff;    
  width:90%; 
  height:auto;  
  margin :70px auto; 
`;
export const FragmentMain = styled.View`  
  width:300px;
  margin: 0 auto;   
`;
export const FragmentTitle = styled.View` 
  justify-content:flex-start;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1
})` 
  color: #333333;
  font-size: 30px;
  text-align: left;  
  font-weight:bold;  
`;
export const FragmentAuthor = styled.View`    
  flex-direction: row;      
  justify-content:flex-start;
  margin: 12px 0;   
  max-width:300;   
`;
export const Author = styled.Text.attrs({
  numberOfLines: 2
})`  
  color: #AB2680;
  font-size: 16px;
  text-align: left;   
         
`;
export const FragmentImage = styled.View`  
  justify-content: center;
  align-items:center;   
  margin: 25px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const ImageInFragment = styled(Image)`
  width: 300px;
  height: 400px;       
`;
export const InCard = styled.View`      
  width: 300px; 
  justify-content: center;
  align-items:center;    
  margin: 0 auto;  
`;
export const FragmentDescription = styled.View`      
  min-width:65%;  
`;
export const FragmentSubTitle = styled.View`     
  justify-content:flex-start;  
  width:300px;
  margin: 20px 0 20px;   
`;
export const Subtitle = styled.Text.attrs({
  numberOfLines: 1
})`  
  color: #000;
  font-size: 14px;     
  text-align: left;  
`;
export const Label = styled.Text.attrs({
  numberOfLines: 1
})`  
  color: #000;
  font-size: 18px;     
  text-align: left;  
`;
export const FragmentInfo = styled.View`  
  justify-content:space-between;  
  width:300px;
  margin: 0 auto;
  flex-direction:row;

`;
export const Info = styled.Text.attrs({
  numberOfLines: 1
})`  
  color: #999999;
  font-size: 18px;
  text-align: left;  
  margin-bottom:5px;  
`;
export const FragmentResenha = styled.View`  
  justify-content:space-between;  
  width:300px;
  margin: 0 auto;
  flex-direction:row;
`;
export const Resenha = styled.Text.attrs({
  numberOfLines: 10
})`  
  color: #999999;
  font-size: 18px;
  text-align: left;  
  margin-bottom:5px;  
  margin-left:2px;  
`;
export const ButtonCloseModal = styled.TouchableOpacity`
  position: absolute;
  width: 32;
  height: 32;    
  align-items: center;
  justify-content: center;
  left: 90%;
  top: 30;  
  border-radius: 100px;  
`;

  
