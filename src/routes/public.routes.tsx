import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../modules/auth/screens/LoginScreen/loginScreen";
import CreateAccountScreen from "../modules/auth/screens/CreateAccountScreen/createAccountScreen";

export type PublicStackParamList = {
    LoginScreen: undefined;
    CreateAccountScreen: undefined;
}

const Stack = createNativeStackNavigator<PublicStackParamList>();

export default function PublicRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
    </Stack.Navigator>
  );
}
