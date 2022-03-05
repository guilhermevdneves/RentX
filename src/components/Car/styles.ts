import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import GasolineSvg from '../../assets/gasoline.svg';

export const Container = styled(RectButton)`
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const CarInfo = styled.View``

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px; 
  color: ${({ theme }) => theme.colors.text_details};
  font-family:${({ theme }) => theme.fonts.secondary_500};
  margin-bottom: 4px;
  text-transform: uppercase;
`

export const Model = styled.Text`
  font-size: ${RFValue(15)}px; 
  color: ${({ theme }) => theme.colors.title};
  font-family:${({ theme }) => theme.fonts.secondary_500};
  margin-bottom: 15px;
`

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const Rent = styled.View`
  margin-right: 24px;
`

export const Period = styled.Text`
  font-size: ${RFValue(10)}px; 
  color: ${({ theme }) => theme.colors.text_details};
  font-family:${({ theme }) => theme.fonts.secondary_500};
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px; 
  color: ${({ theme }) => theme.colors.primary};
  font-family:${({ theme }) => theme.fonts.secondary_500};
`;

export const TypeOfFuel = styled(GasolineSvg)``;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain'
})`

  width: 167px;
  height: 85px;
`