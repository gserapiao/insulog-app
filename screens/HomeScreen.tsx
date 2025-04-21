import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>INSULOG</Text>
      <Text style={styles.subtitle}>GERENCIADOR DE GLICOSE</Text>

      <Text style={styles.welcome}>BEM-VINDO!</Text>
      <Text style={styles.text}>Contamos com a sua participação em nosso aplicativo.</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} style={styles.icon} />
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Image source={{ uri: 'https://img.icons8.com/color/48/facebook.png' }} style={styles.icon} />
        <Text style={styles.facebookText}>Entrar com Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Fazer login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Cadastrar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4b8d4a',
  },
  subtitle: {
    fontSize: 12,
    color: '#444',
    marginBottom: 40,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b8d4a',
  },
  text: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
    borderRadius: 5,
    marginBottom: 10,
  },
  googleText: {
    color: '#555',
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#1877f2',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
    borderRadius: 5,
    marginBottom: 10,
  },
  facebookText: {
    color: '#1877f2',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#eaf5ea',
    paddingVertical: 10,
    width: 250,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: '#4b8d4a',
  },
  registerButton: {
    backgroundColor: '#4b8d4a',
    paddingVertical: 10,
    width: 250,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
