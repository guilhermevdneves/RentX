import { RFValue } from 'react-native-responsive-fontsize';
import { TextProps } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
  color: string
}

interface TitleProps extends TextProps {
  color: string
}

export const Container = styled(RectButton) <ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color ? color : theme.colors.primary};
`

export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, color }) => color ? color : theme.colors.shape};
`
