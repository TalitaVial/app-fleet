import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import theme from "./src/shared/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
