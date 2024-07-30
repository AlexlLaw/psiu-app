import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=u6Zd78-W0vA");
  const handleShowWebView = () => {
    setShowWebView(true);
  };

  const handleCloseWebView = () => {
    setShowWebView(false);
  };
  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{ uri: "https://main.d1rf1wevxlksyb.amplifyapp.com/auth/login" }}
    />
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
