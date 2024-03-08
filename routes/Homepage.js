import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import Customers from '../components/Customers';
import Stats from '../components/Stats';

export default function Homepage() {
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.scrollContainer}>
                <Header />
                <View style={styles.navLinks}>
                    <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <Text style={styles.navLink}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Career')}>
                        <Text style={styles.navLink}>Careers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                        <Text style={styles.navLink}>Contact Us</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={styles.section}>
                        <Stats />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Our Mission</Text>
                        <Text style={styles.aboutText}>
                            We are a market-focused, process-centered organization that develops and delivers innovative solutions to our customers, consistently outperforms our peers, produces predictable earnings for our shareholders and provides a dynamic and challenging environment for our employees.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Partners />
                    </View>
                    <View style={styles.section}>
                        <Customers />
                    </View>
                </View>
                <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Services</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.link}>Digital Commerce</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.link}>Business Applications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.link}>Data & AI</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Solutions</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.link}>Software Development</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.link}>Recruitment & Outsourcing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.link}>Business Process Outsourcing</Text>
                        </TouchableOpacity>
                </View>
                <Footer />
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        height: '100vh',
    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    navLinks: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    navLink: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        marginBottom: 20,
    },
    section: {
        marginTop: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: '#005086',
        alignSelf: 'center',
    },
    aboutText: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
        marginLeft: 100,
        marginRight: 100,
        width: 1200,
    },
    link: {
        alignSelf: 'center',
    }
});