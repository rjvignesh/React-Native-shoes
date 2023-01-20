import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Trending from "./Trending";
import { Icon } from "@rneui/themed";

const stack = createNativeStackNavigator();
const Home = ()=>{
    return (
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen name="Home" component={Trending}
                        options={{
                            headerShadowVisible:false,
                            headerTitleAlign:"center",
                            headerTitle:"SHOE SELECTOR",
                            headerTitleStyle:{color:"gray",fontSize:24},
                            headerLeft: ()=>{
                                return <Icon
                                name="menu"
                                type="ionicon"
                                size={30}/>
                            },
                            headerRight: ()=>{
                            return <Icon 
                                name="search"
                                type="ionicon"
                                size={30}/>
                            }
                        }}
                    />
                </stack.Navigator>
            </NavigationContainer>
    )
}

export default Home