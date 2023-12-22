import 'styled-components/native';
import theme from '../shared/theme';

declare module "styled-components/native"{
    type ThemeInterface = typeof theme;
    export interface DefaultTheme extends ThemeInterface{}

}