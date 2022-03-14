import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import Logo from '../../assets/logo_background_gray.svg'
import Done from '../../assets/done.svg'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header} ;
`

export const LogoSvg = styled(Logo).attrs({
  width: Dimensions.get('window').width
})`
  margin-top: ${getStatusBarHeight() + 15}px;
`

export const DoneSvg = styled(Done).attrs({
  width: 80,
  height: 80
})`
  align-self: center;
`

export const StatusBar = styled.StatusBar.attrs({
  barStyle: "light-content",
  translucent: true,
  backgroundColor: 'transparent'
})``

export const Content = styled.View`
  width:  100%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 20px;
  text-align: center;
`

export const Message = styled.Text`
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  text-align: center;
  margin-top: 6px;
`
export const Footer = styled.View`
  width:  100%;
  align-items: center;
  margin-top: 50px;
`