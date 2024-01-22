import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../modules/home/screens/HomeScreen";

export type PrivateStackParamList = {
    HomeScreen: undefined;
}

const Stack = createNativeStackNavigator<PrivateStackParamList>();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
