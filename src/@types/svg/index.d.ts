declare module "*.svg" {
  import React from "react";
  import { SvgProps } from 'react-native-svg';

  const content: ReactFC<SvgProps>;
  export default content;
}