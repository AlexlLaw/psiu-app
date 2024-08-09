import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Onboarding({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={{ uri: 'https://semaluguel-images.s3.us-east-2.amazonaws.com/FRMI/Event/capa.jpg' }} // substitua pelo URL da sua imagem
        style={styles.background}
      >
      <LinearGradient
        colors={['rgba(0,0,0,0)', '#171B2E']} // Gradiente transparente para azul
        locations={[0.7, 1]}
        style={styles.gradientOverlay}
      />
      </ImageBackground>
      <View style={styles.overlay}>
        <LinearGradient
          colors={['rgba(23, 27, 46, 0.6)', 'rgba(23, 27, 46, 0)', '#171B2E']}
          locations={[0.03, 0.3117, 0.6369]}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.title}>A melhor experiência em eventos imobiliários.</Text>
            <Text style={styles.description}>
              Experiência Memorável. Conhecimento Único Networking Para a Vida. Nossa missão é te manter aprendendo a vida toda, pois conhecimento nunca é demais!
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={() => navigation.navigate('WebViewScreen', { url: 'https://main.d1rf1wevxlksyb.amplifyapp.com/auth/cadastrar' })}>
                <Text style={styles.buttonText}>Não tenho cadastro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('WebViewScreen', { url: 'https://main.d1rf1wevxlksyb.amplifyapp.com/auth/login' })}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Já tenho cadastro</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.buttons, styles.tertiaryContent]}>
              <TouchableOpacity style={[styles.button, styles.tertiaryButton]} onPress={() => navigation.navigate('WebViewScreen', { url: 'https://main.d1rf1wevxlksyb.amplifyapp.com/auth/login/guest' })}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Entrar sem cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#171B2E',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradientOverlay: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 50,
    backgroundColor: '#171B2E',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#9496A5',
    marginBottom: 30,
    textAlign: 'left',
    alignContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 28,
    marginHorizontal: 5,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1E233A',
  },
  secondaryButton: {
    backgroundColor: '#F69D28',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButtonText: {
    color: '#1A1A1A',
  },
  tertiaryButtonText: {
    color: 'e5e5e5',
  },
  tertiaryButton: {
    backgroundColor: '#e5e5e5',
    borderWidth: 1,
    borderColor: '#1E233A'
  },
  tertiaryContent: {
    padding: 8
  }
});
