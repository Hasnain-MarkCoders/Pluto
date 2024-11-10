
import {  NativeBaseProvider } from "native-base"
import ImagesScreens from "./src/screens/ImagesScreens"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,  } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import DetailScreen from "./src/screens/DetailScreen"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SCREEN_NAMES } from "./src/screenNames";
import theme from "./theme";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()
const App = ()=>{
  return(
<QueryClientProvider  client={queryClient}>
    <NativeBaseProvider theme={theme}>
      <GestureHandlerRootView>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name={SCREEN_NAMES.HOME} options={{
          animation: 'slide_from_right',
          animationDuration: 300
        }} component={ImagesScreens} />
        <Stack.Screen name={SCREEN_NAMES.DETAILS} options={{
          animation: 'slide_from_right',
          animationDuration: 300
        }} component={DetailScreen} />
       
      </Stack.Navigator>
      </NavigationContainer>
      </GestureHandlerRootView>
  </NativeBaseProvider>
</QueryClientProvider>
  )
}

export default App