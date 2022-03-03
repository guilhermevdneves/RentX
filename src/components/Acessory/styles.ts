import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 109px; 
  height: 92px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  margin-bottom: 8px;
  padding: 16px;
`

export const Name = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`