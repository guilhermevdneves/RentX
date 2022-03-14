import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ConfirmButton from '../../components/ConfirmButton';
import {
  Container,
  StatusBar,
  LogoSvg,
  Content,
  DoneSvg,
  Title,
  Message,
  Footer
} from './styles';


function ScheduleComplete(props) {
  const { navigate } = useNavigation()
  return (
    <Container>
      <StatusBar />
      <LogoSvg />

      <Content>
        <DoneSvg />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton onPress={() => navigate('Home')} />
      </Footer>
    </Container>
  );
}

export default ScheduleComplete