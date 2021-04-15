import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Image,
  Alert,
  Modal
} from 'react-native';
import {
  Container,
  Subtitle,
  FragmentSubTitle,
  Card,
  InCard,
  FragmentImage,
  ImageInFragment,
  FragmentDescription,
  Title,
  Author,
  Info,
  FragmentMain,
  FragmentTitle,
  FragmentAuthor,
  FragmentInfo,
  Header,
  HeaderLogo,
  HeaderTitle,
  HeaderIcon,
  ImageLogo,
  ImageTitle,
  FragmentLogoTitle,
  Label,
  FragmentResenha,
  Resenha,
  ButtonCloseModal,
  ImageIcon

} from './styles';

import Background from '~/components/background';
import api from '~/services/api';


export default function BookDetails({ navigation }) {

  const dataDetails = navigation.getParam('data');
  const [data, setData] = useState(dataDetails);

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  BookDetails.navigationOptions = ({ navigation }) => ({

    headerTitle: (
      <Header>
        <FragmentLogoTitle>
          <HeaderLogo>
            <ImageLogo
              source={require('~/assets/l-ioasys.png')}
            />
          </HeaderLogo>
          <HeaderTitle>

            <ImageTitle
              source={require('~/assets/title.png')}
            />
          </HeaderTitle>
        </FragmentLogoTitle>
      </Header>
    ),
  });

  useEffect(() => {

    async function loadData(id) {

      try {
        setLoading(true);

        const response = await api.get('/books/' + id);
        const { data } = response;

        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        Alert.alert(
          'Não conseguimos buscar dados deste livro.',
          error.message,
        );
      }

    }
    loadData(data.id);
  }, []);



  return (
    <Background>

      <Modal visible={modalVisible} transparent={true} animationType="none">

        <Container>

          <ButtonCloseModal onPress={() => {
            setModalVisible(false),
              navigation.goBack()
          }}>
            <ImageIcon source={require('~/assets/close.png')} />
          </ButtonCloseModal>

          {loading === true ? (
            <>
              <ActivityIndicator size="small" color="#000000" />
            </>
          ) : (

            <Card>
              <InCard>

                <FragmentImage>

                  {data.imageUrl === null ? (
                    <ImageInFragment source={require('~/assets/logo.png')} />
                  ) : (<ImageInFragment
                    source={{ uri: data.imageUrl.toString() }}
                  />)}

                </FragmentImage>

                <FragmentMain>

                  <FragmentTitle>
                    <Title>
                      {data.title}
                    </Title>
                  </FragmentTitle>
                  <FragmentAuthor>

                    {data.authors.map((author, x) => (
                      <Author>
                        {author}
                        {x != (data.authors.length - 1) ?
                          (<>, </>)
                          : null}
                      </Author>
                    )
                    )}
                  </FragmentAuthor>
                </FragmentMain>
                <FragmentSubTitle>
                  <Subtitle>
                    INFORMAÇÕES
                  </Subtitle>
                </FragmentSubTitle>

                <FragmentDescription>
                  <FragmentInfo>
                    <Label>
                      {'Páginas'}
                    </Label>
                    <Info>
                      {data.pageCount + ' páginas'}
                    </Info>
                  </FragmentInfo>
                  <FragmentInfo>
                    <Label>
                      {'Editora'}
                    </Label>
                    <Info>
                      {data.publisher}
                    </Info>
                  </FragmentInfo>
                  <FragmentInfo>
                    <Label>
                      {'Publicação'}
                    </Label>
                    <Info>
                      {data.published}
                    </Info>
                  </FragmentInfo>
                  <FragmentInfo>
                    <Label>
                      {'Idioma'}
                    </Label>
                    <Info>
                      {data.language}
                    </Info>
                  </FragmentInfo>
                  <FragmentInfo>
                    <Label>
                      {'Categoria'}
                    </Label>
                    <Info>
                      {data.category}
                    </Info>
                  </FragmentInfo>
                  <FragmentInfo>
                    <Label>
                      {'ISBN-10'}
                    </Label>
                    <Info>
                      {data.isbn10}
                    </Info>
                  </FragmentInfo>
                  <FragmentInfo>
                    <Label>
                      {'ISBN-13'}
                    </Label>
                    <Info>
                      {data.isbn13}
                    </Info>
                  </FragmentInfo>
                </FragmentDescription>

                <FragmentSubTitle>
                  <Subtitle>
                    RESENHA DA EDITORA
                  </Subtitle>
                </FragmentSubTitle>

                <FragmentResenha>
                <ImageIcon source={require('~/assets/abre-aspas.png')} />
                  <Resenha>
                    {data.description}
                  </Resenha>
                </FragmentResenha>


              </InCard>
            </Card>

          )}
        </Container>
      </Modal>
    </Background >
  );
}

