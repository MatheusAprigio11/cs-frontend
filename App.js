import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { Provider } from 'react-redux'
import { Store } from './services/reducers/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Lexend-Regular.ttf'),
    light: require('./assets/fonts/Lexend-Light.ttf'),
    bold: require('./assets/fonts/Lexend-Bold.ttf'),
    medium: require('./assets/fonts/Lexend-Medium.ttf'),
    semibold: require('./assets/fonts/Lexend-SemiBold.ttf'),
    itim: require('./assets/fonts/Itim-Regular.ttf')
  })


  const onLayoutRootView = useCallback(async () => {


    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#FFF" barStyle={"light-content"}/>
        <Routes />
      </NavigationContainer>
    </Provider>
  )
}
