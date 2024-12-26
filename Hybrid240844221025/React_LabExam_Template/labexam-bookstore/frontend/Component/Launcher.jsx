import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Home from "./Home";
import Registration from "./Registration";
import BookDetail from "./BookDetail";
import Orders from "./Orders";

function Launcher() {

var Stack = createNativeStackNavigator();


    return ( 
    
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Registration" component={Registration}/>
                <Stack.Screen name="BookDetails" component={BookDetail}/>
                <Stack.Screen name="Orders" component={Orders}/>
            </Stack.Navigator>
        </NavigationContainer>
    
    
  );
}

export default Launcher;