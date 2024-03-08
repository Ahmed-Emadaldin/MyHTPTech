import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const Footer = () => {
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 HTP Global Technologies. All Rights Reserved.</Text>
      <View style={styles.socialLinksContainer}>
        <Text style={styles.socialText}>Follow us</Text>
        <TouchableOpacity
          onPress={() => openLink('https://www.facebook.com/people/HTP-Global-Technologies/100076107217408/')}
          onPressIn={() => setIsFacebookHovered(true)}
          onPressOut={() => setIsFacebookHovered(false)}
        >
          <Image
            source={require('../assets/Facebook.png')}
            style={[
              styles.icon,
              isFacebookHovered && { transform: [{ scale: 1.2 }], tintColor: 'blue' },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink('https://twitter.com/i/flow/login?redirect_after_login=%2FMyhtptech')}
          onPressIn={() => setIsTwitterHovered(true)}
          onPressOut={() => setIsTwitterHovered(false)}
        >
          <Image
            source={require('../assets/twitter.png')}
            style={[
              styles.icon,
              isTwitterHovered && { transform: [{ scale: 1.2 }], tintColor: 'blue' },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink('https://www.linkedin.com/company/htp-global-technologie')}
          onPressIn={() => setIsLinkedInHovered(true)}
          onPressOut={() => setIsLinkedInHovered(false)}
        >
          <Image
            source={require('../assets/linkedin.png')}
            style={[
              styles.icon,
              isLinkedInHovered && { transform: [{ scale: 1.2 }], tintColor: 'blue' },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
  socialText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginRight: 10,
  },
  socialLinksContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

export default Footer;