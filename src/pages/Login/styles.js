import { Platform } from 'react-native';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 0px;
`;
export const Background = styled.ImageBackground`  
  height: 100%;   
  width: 100%;    
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 80px auto 0;  
`;
export const FormInput = styled(Input).attrs({
  color: '#fff'
})`
  margin-bottom: 10px;
  padding-left: 15px;  
  height: 58px;
  align-items: center;
  
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;
export const SubmitButton = styled(Button)`    
  flex:1;  
  position:absolute;
  right:0;
  padding: 8px 21px 8px 20px;
  border-radius:18px;
  right: 15px;
  top: 12px;
`;
export const FragmentButton = styled.View``;

export const FragmentLogoTitle = styled.View`      
  width: 90%;
  margin: 0 auto;  
  flex-direction:row;  
  align-items: center;
`;
export const FragmentLogo = styled.View`  
  justify-content: center;
  align-items:flex-start;     
  margin-right:30px;  
  width: 104;
  height: 36;  
  
`;
export const ImageLogo = styled(Image)`
`;
export const FragmentTitle = styled.View`  
  justify-content: center;
  align-items:center;   
  width: 77;
  height: 40;    
`;
export const ImageTitle = styled(Image)`    
`;
