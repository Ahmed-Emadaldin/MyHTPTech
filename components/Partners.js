import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Partners = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Partners</Text>
      <View style={styles.partnersContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../assets/dell.png')}
              style={styles.partnerLogo}
            />
            <Image
              source={require('../assets/mcafee.png')}
              style={styles.partnerLogo}
            />
            <Image
              source={require('../assets/microsoft.jpg')}
              style={styles.partnerLogo}
            />
            <Image
              source={require('../assets/cisco.png')}
              style={styles.partnerLogo}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../assets/acer.png')}
              style={styles.partnerLogo}
            />
            <Image
              source={require('../assets/apc.png')}
              style={styles.partnerLogo}
            />
            <Image
              source={require('../assets/aruba.png')}
              style={styles.partnerLogo}
            />
            <Image
              source={require('../assets/veeam.png')}
              style={styles.partnerLogo}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005086',
  },
  partnersContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  partnerLogo: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Partners;