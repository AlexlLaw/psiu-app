import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Onboarding({ navigation }) {

  return (
    <ImageBackground
      source={{ uri: 'https://s3-alpha-sig.figma.com/img/65ec/b6ec/e9b72156c5e9b735154b066b51f9ea76?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUa4YqXMmuYSZWem5OmamvcoSh0mkDNUlnNkPjG2yje2eh4S~-C4jpqDO4T~5oo-zHrmas2WNBHKoyI1d-6DbHA4pciutM55KvvXvt~2dpoM4Sk39eW9bQDGX3M~UAHJtV7J61RnXTSP~4UOn3cyztz1CiKoa5Q7SRX2uH0szn7AKzZmPTR2b-yjDs7zzvm~l1cWp5wInId83mcQB7qrDfYQds-Na6qgQheNJheLIHR9lCSaaKMb9g7fT6fl8F7C2-DK34UTfwS3~C0EuMSzfh3tCPSWZjYNOZyWQ5od~322flX7l35~0AsIYWJZcioKrmAILkvOuYRgUKTQ6cW9Tw__' }} // substitua pelo URL da sua imagem
      style={styles.background}
    >
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
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('WebViewScreen', { url: 'https://main.d1rf1wevxlksyb.amplifyapp.com/auth/login' })}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.buttons, styles.tertiaryContent]}>
              <TouchableOpacity style={[styles.button, styles.tertiaryButton]} onPress={() => navigation.navigate('WebViewScreen', { url: 'https://main.d1rf1wevxlksyb.amplifyapp.com/auth/login/guest' })}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Convidado</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
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
    backgroundColor: '#FFB300',
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
