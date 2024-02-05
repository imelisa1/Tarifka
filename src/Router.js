import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./Pages/Categories/Categories";
import Meals from "./Pages/Meals";
import Details from "./Pages/Details/Details";

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} options={{
                    headerTitleAlign: 'center',
                    headerTintColor: "orange",
                }}/>
                <Stack.Screen name="Meals" component={Meals} options={{
                    headerTitleAlign: 'center',
                    headerTintColor: "orange"
                }}/>
                <Stack.Screen name="Details" component={Details} options={{
                    headerTitleAlign: 'center',
                    headerTintColor: "orange" 
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;