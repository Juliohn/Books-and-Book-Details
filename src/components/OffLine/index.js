import React from 'react';
import {Modal} from 'react-native';
import {StatusBar} from 'react-native';
StatusBar.setHidden(true);

import {
  Container,
  SimageFirts,
  SImage,
  ContainerTitle,
  Title,
  ContainerImagem,
  ContainerMessage,
  STouchableOpacity,
  STextButton,
  ContainerButton,
  SText,
} from './styles';

export default function OffLine() {
  return (
    <Modal visible={true} animationType="fade">
      <Container>
        <ContainerTitle>
          <Title>{'OffLine'}</Title>
        </ContainerTitle>

        <ContainerImagem>
          <SimageFirts>
            <SImage source={require('~/assets/iconOffline.png')} />
          </SimageFirts>
        </ContainerImagem>

        <ContainerMessage>
          <SText>
            {
              'Você esta sem acesso a internet. Ao se reconectar, atualizaremos automaticamente.'
            }
          </SText>
        </ContainerMessage>
      </Container>
    </Modal>
  );
}
