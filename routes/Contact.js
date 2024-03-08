import React, { useState } from 'react';
import { StatusBar, View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    title: '',
    inquiry: ''
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, city, email, phoneNumber, companyName, title, inquiry } = formData;
    setNameError('');
    setEmailError('');
    setPhoneNumberError('');

    if (!name || !city || !email || !phoneNumber || !companyName || !title || !inquiry) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format.');
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneNumberError('Invalid phone number format.');
      return;
    }
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Header />
          <View style={styles.header}>
            <Text style={styles.headerText}>Contact Us</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Our Presence</Text>
            <Text style={styles.formDescription}>
              Interested in our IT services or need advice? Then please get in touch and we'll be glad to help.
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Name*"
                value={formData.name}
                onChangeText={(text) => handleInputChange('name', text)}
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="City*"
                value={formData.city}
                onChangeText={(text) => handleInputChange('city', text)}
              />
            </View>
            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Email*"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
                keyboardType="email-address"
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChangeText={(text) => handleInputChange('phoneNumber', text)}
                keyboardType="numeric"
              />
            </View>
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Company Name*"
                value={formData.companyName}
                onChangeText={(text) => handleInputChange('companyName', text)}
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Title/Role*"
                value={formData.title}
                onChangeText={(text) => handleInputChange('title', text)}
              />
            </View>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="What are you looking for?*"
              multiline
              numberOfLines={4}
              value={formData.inquiry}
              onChangeText={(text) => handleInputChange('inquiry', text)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.globalInfo}>
            <Text style={styles.globalTitle}>Our Global Offices</Text>
          </View>

          <View style={styles.contactsContainer}>
            {contacts.map((contact, index) => (
              <View
                key={index}
                style={[
                  styles.contactInfo,
                  { backgroundColor: index % 2 === 0 ? 'orange' : 'gray' },
                ]}
              >
                <Text style={styles.infoTitle}>{contact.title}</Text>
                <Text style={styles.infoText}>{contact.address}</Text>
                {contact.telephone && (
                  <View style={styles.infoRow}>
                    <Text style={styles.infoTextBold}>Telephone:</Text>
                    <Text style={styles.infoText}> {contact.telephone}</Text>
                  </View>
                )}
                {contact.mobile && (
                  <View style={styles.infoRow}>
                    <Text style={styles.infoTextBold}>Mobile:</Text>
                    <Text style={styles.infoText}> {contact.mobile}</Text>
                  </View>
                )}
                <View style={styles.infoRow}>
                  <Text style={styles.infoTextBold}>Email:</Text>
                  <Text style={styles.infoText}> {contact.email}</Text>
                </View>
              </View>
            ))}
          </View>

          <Footer />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const contacts = [
  {
    title: 'Dubai',
    address: '4202A, Aspin Commercial Tower, 106 Sheikh Zayed Road, Dubai, United Arab Emirates',
    telephone: '+971 (0)4 388-5673',
    mobile: '+971 (0) 52 777-4397',
    email: 'info@myhtptech.com',
  },
  {
    title: 'United Kingdom',
    address: 'PO 22A Well Lane, Working Surrey, GU21 4PL, UK',
    email: 'info@myhtptech.com',
  },
  {
    title: 'India',
    address: '901, Techniplex-II, Off S. V. Road, Goregaon (W), Mumbai – 400062, India.',
    telephone: '+91 (22) 61 960 900, 91 67 970 001-02',
    email: 'info@myhtptech.com',
  },
  {
    title: 'Australia',
    address: '30 Dublin St, Tarneit Vic, 3029, Australia',
    telephone: '+61 (03) 87 312 589',
    mobile: '+61 490 161 404',
    email: 'info@myhtptech.com',
  },
  {
    title: 'Turkey',
    address: 'Kayabaşı Mah. Adnan Menderes Bul. Park Mavera Sitesi Blok No: 10fk, İstanbul / Başakşehir, Türkiye',
    mobile: '+90 534 838 89 27',
    email: 'info@myhtptech.com',
  },
  {
    title: 'Sudan',
    address: '123 North Kordfan State, Sudan, Africa',
    mobile: '+249 91 239 2300',
    email: 'info@myhtptech.com',
  },
  {
    title: 'Kingdom of Saudi Arabia',
    address: 'HTP Smart Security, Building Number : 2548, Ibn Al Tailasan Al Qurtubi, Al Adrid, Riyadh, 13338, KSA',
    email: 'info@myhtptech.com',
  },
  {
    title: 'Egypt',
    address: 'Villa 22,First Omrania, 6 October, Giza, Egypt, Africa',
    mobile: '+20 110 006 3559',
    email: 'info@myhtptech.com',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  scrollView: {
    height: '50vh',
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
  formContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005086',
  },
  formDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputHalf: {
    width: '48%',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#005086',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  globalInfo: {
    marginBottom: 10,
    alignItems: 'center',
  },
  globalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005086',
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  contactsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contactInfo: {
    width: '48%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
  },
  infoTextBold: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});