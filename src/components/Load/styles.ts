import styled from 'styled-components/native';

export const Container = styled.ActivityIndicator.attrs(props => ({
  size: "large",
  color: props.theme.colors.primary
}))`
  flex: 1;
`