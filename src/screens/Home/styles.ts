import styled from 'styled-components/native';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const StatusBar = styled.StatusBar.attrs({
  barStyle: "light-content",
  translucent: true,
  backgroundColor: 'transparent'
})``

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`
export const Header = styled.View`
  width: 100%;
  height:${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`
export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${RFValue(28)}px;
  padding: 0 24px;
`
export const LogoSvg = styled(Logo)`
  height: ${RFValue(12)}px;
  width: ${RFValue(108)}px;
`

export const CarsCount = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;


export const ScrollCar = styled.View`
  margin: 0 16px;


`;