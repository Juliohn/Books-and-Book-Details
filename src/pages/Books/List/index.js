import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOutRequest } from '~/store/modules/auth/actions';

import {
  ActivityIndicator,  
  Alert
} from 'react-native';
import {
  Container,
  List,
  Card,
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
  ImageIcon,
} from './styles';

import Background from '~/components/background';
import api from '~/services/api';


export default function Books({navigation}) {
  const dispatch = useDispatch();  

  const [last_page, setLastPage] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [dataList, setDataList] = useState([]);  

  Books.navigationOptions = ({ navigation }) => ({

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
        <HeaderIcon onPress={() => {
          dispatch(signOutRequest());
        }}>
          <ImageIcon
            
            source={require('~/assets/signout.png')}
          />
        </HeaderIcon>
      </Header>
    ),
  });

  useEffect(() => {
    setLoading(true);
    async function loadData() {

      try {
        const response = await api.get('/books?page=1');
        const { data } = response;

        setLoading(false);
        setDataList(data.data);
        setPage(2);
        setLastPage(data.totalPages);
      } catch (error) {
        Alert.alert(
          'Não conseguimos buscar os dados.',
          error.message,
        );
      }

    }
    loadData();
  }, []);

  refresh = async () => {
    //const response = await api.get('/books?page=1&category=behavior');
    try {
      const response = await api.get('/books?page=1');
      const { data } = response;
      setLoading(false);
      setDataList(data.data);
      setPage(2);
      setLastPage(data.totalPages);
    } catch (error) {
      Alert.alert(
        'Não conseguimos atualizar a lista os dados.',
        error.message,
      );
    }

  };

  loadMoreData = async () => {
    if (loadingMore) {
      return;
    }

    if (page <= last_page) {
      setLoadingMore(true);
      try {
        const response = await api.get('/books?page=' + page);
        const { data } = response;
        setDataList([...dataList, ...data.data]);
        setLoadingMore(false);
        setPage(page + 1);
      } catch (error) {
        Alert.alert(
          'Não conseguimos buscar mais dados.',
          error.message,
        );
      }

    }
  };

  renderFooter = () => {
    if (!loadingMore) {
      return null;
    }
    return (
      <>
        <ActivityIndicator size="small" color="#000000" />
      </>
    );
  };

  return (
    <Background>
      <Container>
        {loading === true ? (
          <>
            <ActivityIndicator size="small" color="#000000" />
          </>
        ) : (
          <List
            data={dataList}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Card onPress={() => navigation.navigate('BookDetails',{
                  data: item,                
              })}>
                <FragmentImage>
                  {item.imageUrl === null ? (
                    <ImageInFragment source={require('~/assets/logo.png')} />
                  ) : (<ImageInFragment
                    source={{ uri: item.imageUrl.toString() }}
                  />)}

                </FragmentImage>
                <FragmentDescription>
                  <FragmentMain>

                    <FragmentTitle>
                      <Title>
                        {item.title}
                      </Title>
                    </FragmentTitle>
                    <FragmentAuthor>

                      <Author>
                        {item.authors[0]}
                      </Author>
                    
                    </FragmentAuthor>
                  </FragmentMain>

                  <FragmentInfo>
                    <Info>
                      {item.pageCount + ' Paginas'}
                    </Info>

                    <Info>
                      {'Editora ' + item.publisher}
                    </Info>
                    <Info>
                      {'Publicado em ' + item.published}
                    </Info>
                  </FragmentInfo>


                </FragmentDescription>

              </Card>
            )}
            refreshing={false}
            onRefresh={this.refresh}
            onEndReachedThreshold={0.1}
            onEndReached={this.loadMoreData}
            ListFooterComponent={this.renderFooter}
          />)}
      </Container>

    </Background>
  );
}

