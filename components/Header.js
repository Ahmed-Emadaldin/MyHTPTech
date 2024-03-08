import React, { useState } from 'react';
import { ImageBackground, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const goToHomepage = () => {
    navigation.navigate('Homepage');
  };

  return (
    <View style={styles.header}>
      <ImageBackground source = {require('../assets/htp.jpg')} style={{width: '150%', height: '140%'}}>
        <TouchableOpacity
          onPress={goToHomepage}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.8}
          style={styles.logoContainer}
        >
          <Image
            source={require('../assets/HTPTech.png')}
            style={[styles.logo, isPressed && styles.logoPressed]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  
  header: {
    marginRight: 20,
    marginBottom: 80,
  },
  logoContainer: {
    width: 250,
    height: 125,
    borderRadius: 10,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'transparent',
  },
});

export default Header;