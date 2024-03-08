import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Customers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Customers</Text>
      <View style={styles.customersContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../assets/adib.png')}
              style={styles.customerLogo}
            />
            <Image
              source={require('../assets/fiat.png')}
              style={styles.customerLogo}
            />
            <Image
              source={require('../assets/uaeu.jpg')}
              style={styles.customerLogo}
            />
            <Image
              source={require('../assets/expo.png')}
              style={styles.customerLogo}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../assets/adcb.png')}
              style={styles.customerLogo}
            />
            <Image
              source={require('../assets/ToI.jpg')}
              style={styles.customerLogo}
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
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005086',
  },
  customersContainer: {
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
  customerLogo: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Customers;