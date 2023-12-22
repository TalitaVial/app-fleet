import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../modules/auth/screens/LoginScreen/loginScreen"

const Stack = createNativeStackNavigator()

export default function PublicRoutes(){
    return (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    )
}