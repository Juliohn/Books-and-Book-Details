import React from 'react';
import {ActivityIndicator} from 'react-native';
import {PropTypes} from 'prop-types';
import {Container, Text} from './styles';


export default function Button({children, icon, loading, ...rest}) {
  return (
    <Container {...rest}>      
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
