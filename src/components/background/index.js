import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
   colors: ['#E5E5E5', '#E5E5E5'],  
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
`;
