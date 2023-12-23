import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import theme from "./src/shared/theme";
import Routes from "./src/routes";
import { Loading } from "./src/shared/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if(!fontsLoaded){
    return <Loading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
