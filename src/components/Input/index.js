import React, {forwardRef} from 'react';
import {PropTypes} from 'prop-types';

import {Container, TextInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>      
      <TextInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultPropos = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
