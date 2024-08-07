import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './Onboarding';
import { WebView } from 'react-native-webview';
import { StyleSheet, BackHandler, View, Text, Alert } from 'react-native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function WebViewScreen({ route }) {
  const { url } = route.params;
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [lastBackPress, setLastBackPress] = useState(0);

  useEffect(() => {
    const onBackPress = () => {
      const now = Date.now();

      if (currentUrl === 'https://main.d1rf1wevxlksyb.amplifyapp.com/event') {
        console.log('Current URL:', currentUrl);
        // Impede que o aplicativo saia quando estiver na URL especificada
        if (now - lastBackPress < 2000) {
          // Se o botão de voltar foi pressionado duas vezes em menos de 2 segundos, mostra o alerta
          Alert.alert(
            'Sair do aplicativo',
            'Você deseja sair do aplicativo?',
            [
              {
                text: 'Cancelar',
                onPress: () => null,
                style: 'cancel'
              },
              {
                text: 'Sim',
                onPress: () => BackHandler.exitApp()
              }
            ],
            { cancelable: false }
          );
          return true;
        }
        setLastBackPress(now);
        return true;
      }

      if (canGoBack) {
        webViewRef.current.goBack();
        return true;
      }
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [canGoBack, currentUrl, lastBackPress]);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: url }}
      style={{ flex: 1 }}
      onNavigationStateChange={navState => {
        setCanGoBack(navState.canGoBack);
        setCurrentUrl(navState.url);
      }}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
