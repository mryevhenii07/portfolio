import 'styled-components';
interface ITheme {
  backgroundColor: string;
  textColor: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
