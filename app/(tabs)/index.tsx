import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Main illustration */}
      <View style={styles.imageContainer}>
        {/* Replace the Image URI with the actual illustration image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace this with the actual image source
          style={styles.image}
        />
      </View>

      {/* Heading Text */}
      <Text style={styles.title}>Discover Your Dream Job here</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>
      
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // light background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1E3A8A', // Blue color for the title
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280', // Gray color for the subtitle
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    backgroundColor: '#2563EB', // Blue button color
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: '#E5E7EB', // Light gray button color
    padding: 15,
    borderRadius: 8,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    color: '#111827', // Black for Register text
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
