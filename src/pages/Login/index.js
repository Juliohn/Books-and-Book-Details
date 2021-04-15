import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '~/store/modules/auth/actions';

import {  
  Background,
  Container,
  Form,
  FormInput,
  SubmitButton,
  FragmentLogoTitle,
  FragmentLogo,
  ImageLogo,
  FragmentTitle,
  ImageTitle,
  FragmentButton

} from './styles';

export default function Login({navigation}) {
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [password, setPassword] = useState('12341234');
  const [email, setEmail] = useState('desafio@ioasys.com.br');
  

  useEffect(() => {    
  }, []);

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {    
    dispatch(signInRequest(email, password));
  }
  return (
    <Background 
    
    source={require('~/assets/background-login.png')}>
      <Container>

      <FragmentLogoTitle>
        <FragmentLogo>
          <ImageLogo  source={require('~/assets/logo-white.png')} />
        </FragmentLogo>

        <FragmentTitle>
          <ImageTitle source={require('~/assets/title-white.png')} />
        </FragmentTitle>
      
      </FragmentLogoTitle>
        
        <Form>
          
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-MAIL"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />
          
          <FragmentButton>

            <FormInput
              icon="lock"
              secureTextEntry
              placeholder="SENHA"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              ENTRAR
            </SubmitButton>
          </FragmentButton>
        </Form>
      </Container>
      </Background>
  );
}
