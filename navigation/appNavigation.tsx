import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreens from "../screens/MovieScreens";


const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
                <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}