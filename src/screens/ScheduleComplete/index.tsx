import React from 'react';
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
        <ConfirmButton />
      </Footer>
    </Container>
  );
}

export default ScheduleComplete