import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 40}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItens: "center"
  },
  showsVerticalScrollIndicator: false
})`
  width: 100%;
`

export const Details = styled.View`
  align-self: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px;
  margin-top: 34px;
`

export const Description = styled.View``

export const Rent = styled.View``

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Model = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
  `

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(25)}px;
`
export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  margin-top: 23px;
  line-height: ${RFValue(25)}px;

`
export const AcessoriesList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
`
