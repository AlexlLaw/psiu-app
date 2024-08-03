import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from './Onboarding';
import { WebView } from 'react-native-webview';
import { StyleSheet, BackHandler, View, Text } from 'react-native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function WebViewScreen({ route }) {
  const { url } = route.params;
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack) {
        webViewRef.current.goBack();
        return true;
      }
      BackHandler.exitApp();
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [canGoBack]);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: url }}
      style={{ flex: 1 }}
      onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
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
