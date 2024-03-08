import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Career(){
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Header />
          <View style={styles.header}>
            <Text style={styles.headerText}>Career</Text>
          </View>

      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Why Join HTP Global Technologies?</Text>
        <Text style={styles.careerText}>
          If you are passionate about technology, innovation and development. HTP Global Technologies is the place for you. At HTP Global, we have built a conductive environment which allows growth, innovation and out-of-the-box thinking.
        </Text>
      </View>

      <Footer />
      </View>
      </ScrollView>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollView: {
    height: '100vh',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    marginTop: 50,
    fontSize: 50,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#005086',
  },
  content: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#005086',
  },
  careerText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    marginLeft: 100,
    marginRight: 100,
    width: 1200,
  },
});