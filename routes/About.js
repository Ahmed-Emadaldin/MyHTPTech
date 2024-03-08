import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Header />
          <View style={styles.header}>
            <Text style={styles.headerText}>About Us</Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>IT solutions to help your business flourish</Text>
            <Text style={styles.aboutText}>
              We are an ISO 9001:2015 & 27001:2013 Certified Organisation whose prime focus is customer delight. Quality is at the heart of our Business plans and our Business Associates are our partners in progress. We provide cost-effective, on-time solutions through a team of experienced members, serving medium to large-sized enterprise customers all across the globe. Helping your business flourish is our main objective, and we would love to exceed your expectations to form a long-term mutually beneficial relationship with you.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <TouchableOpacity
              style={styles.directorLink}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/irfan-mohammed-6841851/')}
            >
              <Image source={require('../assets/Staff/Irfan.png')} style={styles.directorImage} />
            </TouchableOpacity>
            <View style={styles.directorDescription}>
              <Text style={styles.directorName}>Irfan Mohammed</Text>
              <Text style={styles.directorDescriptionText}>
                Irfan Mohammed is the Regional Sales Director of HTP Global Technologies. As a business leader and technologist, he has led the building and expansion of new markets for various companies in IT Infrastructure, artificial intelligence, cloud solutions, business process and enterprise architecture. He has also played a significant role in the development of innovative products and solutions based on these emerging technologies in various Markets. Over his 17-year career, Irfan led a series of bold transformations and delivered proven business results. Irfan has been an outspoken advocate for learning at every stage of one’s career. Irfan has a Masters in Business Administration and Bachelor of Engineering.
              </Text>
            </View>
          </View>
            <Text style={styles.sectionTitle}>Our Team</Text>
            <View style={styles.teamRow}>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/lawrence-chettiar-549466231')}>
                  <Image source={require('../assets/Staff/LawrenceChettiar.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Lawrence Chettiar</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/sashank-shekhar-placement-and-beyond-28a1151b/')}>
                  <Image source={require('../assets/Staff/Sashank.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Sashank Shekhar</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/khizer-abdul-sattar-68a61715/?challengeSource=AgHjg2-F5TpMFQAAAY4Zo4tYH3GHdD5vp2N7kmt7bWG3dCyVcYdMHc5moQWdtcE&challegeType=AgFo92cWjtEs4gAAAY4Zo4tb9YJOmwGOGvI_oYD238_v5mECS2EYZto&memberId=AgF_W460LkvI6QAAAY4Zo4teVbDirROWbYq3MdpH7_2E0sM&recognizeDevice=AgGzR2pgvLVGOAAAAY4Zo4thdA_uNBgceYHwiU5DYcSjF2qI8Vxv&challengeId=AQG1gtrXQ55WKAAAAY4Zo44Vb-E1u2Yeg66XP9pOOZZwFp4ta0pZ5tP8KO_9NNkK6c-EMwqI3S5Ka9eiLxmgVD0bkNm14rgc6Q&submissionId=d3d799ce-b786-ba17-068e-8ee52c43e61b&challengeSource=AgHFXU2RpHWVXwAAAY4Zo8WyVZnMOtm0umtMg2z3svbVsWJjwyAk7eTo1Alcu0M&challegeType=AgG54Fo3mYAGyAAAAY4Zo8W2Zo2JTrVTTYWlGM0FF7C6LIpd66Hk0SQ&memberId=AgET0J1OaJ72EAAAAY4Zo8W6SoQZTaw2_nn1hgIgvG5xt9w&recognizeDevice=AgFC1pZ-5T06oQAAAY4Zo8W-vwibRaFiQb9MrM_jHG04_KoOpNNZ')}>
                  <Image source={require('../assets/Staff/Khizer.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Khizer A. Sattar</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/smriti-shekhar-8b08b776/')}>
                  <Image source={require('../assets/Staff/Smriti.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Smriti Sinha</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gokila-promod-3a48471ab/')}>
                  <Image source={require('../assets/Staff/Gokila.jpg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Gokila Promod</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/amol-gomkale-7276504')}>
                  <Image source={require('../assets/Staff/Amol.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Amol Gomkale</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jennice-rodricks-65665a209/')}>
                  <Image source={require('../assets/Staff/Jennice.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Jennice Rodricks</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/prerana-rakvi-b868386/')}>
                  <Image source={require('../assets/Staff/Prerana.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Prerana Rakvi</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/arbaz-shaikh-5507b91ba/')}>
                  <Image source={require('../assets/Staff/Arbaz.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Arbaz Shaikh</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ibrahimk84')}>
                  <Image source={require('../assets/Staff/Ibrahim.jpg')} style={styles.teamImage} />
                </TouchableOpacity> 
                <Text style={styles.teamName}>Ibrahim Mohammed</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/swathy-c-s-29213497?original_referer=https%3A%2F%2Fmyhtptech.com%2F')}>
                  <Image source={require('../assets/Staff/Swathy.jpg')} style={styles.teamImage} />
                </TouchableOpacity> 
                <Text style={styles.teamName}>Swathy Anuraj</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/divyendu-shekhar-72a27081')}>
                  <Image source={require('../assets/Staff/Divyendu.jpeg')} style={styles.teamImage} />
                </TouchableOpacity> 
                <Text style={styles.teamName}>Divyendu Shekhar</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://ae.linkedin.com/in/priya-jaiswal-a1b1ab179')}>
                  <Image source={require('../assets/Staff/Priya.jpeg')} style={styles.teamImage} />
                </TouchableOpacity> 
                <Text style={styles.teamName}>Priya Jaiswal</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://in.linkedin.com/in/rehan-khan-33b92240')}>
                  <Image source={require('../assets/Staff/Rehan.jpg')} style={styles.teamImage} />
                </TouchableOpacity>  
                <Text style={styles.teamName}>Rehan Khan</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/yaser-elsheaikh-8a324415b/')}>
                  <Image source={require('../assets/Staff/Yaser.jpg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Yaser ElShaikh</Text>
              </View>
              <View style={styles.teamMember}>
                <TouchableOpacity onPress={() => Linking.openURL('https://ae.linkedin.com/in/sanduni-fernando-abb202180?original_referer=https%3A%2F%2Fmyhtptech.com%2F')}>
                  <Image source={require('../assets/Staff/Sanduni.jpeg')} style={styles.teamImage} />
                </TouchableOpacity>
                <Text style={styles.teamName}>Sanduni Fernando</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Vision and Mission</Text>
              <View style={styles.visionMissionContainer}>
                <View style={styles.visionMissionBox}>
                  <Text style={styles.visionMissionTitle}>Our Vision and Mission</Text>
                  <Text style={styles.visionMissionText}>
                    Be the global leader in customer values. We are market-focused, process-centered organization that develops and delivers innovative solutions to our customers, consistently outperforms our peers, produces predictable earnings for our shareholders.
                  </Text>
                </View>
                <View style={styles.visionMissionBox}>
                  <Text style={styles.visionMissionTitle}>Our Values</Text>
                  <Text style={styles.visionMissionText}>
                    Nothing can substitute honest hard work when it comes to progress. Customer is king. Quality should never be compromised.
                  </Text>
                </View>
                <View style={styles.visionMissionBox}>
                  <Text style={styles.visionMissionTitle}>Our Culture</Text>
                  <Text style={styles.visionMissionText}>
                    We treat our customer's growth as if it was our own and put in work accordingly. We give equal importance to our employees’ well being and growth as we give to our business. We believe in keeping all our stakeholders happy.
                  </Text>
                </View>
                <View style={styles.visionMissionBox}>
                  <Text style={styles.visionMissionTitle}>Our Commitment to Customers</Text>
                  <Text style={styles.visionMissionText}>
                    We commit to leaving our customers so satisfied with our work that they don't have to think twice before choosing us again or being our advocate.We commit to helping all of our employees reach their maximum potential.
                  </Text>
                </View>
                <View style={styles.visionMissionBox}>
                  <Text style={styles.visionMissionTitle}>Community and Excellence</Text>
                  <Text style={styles.visionMissionText}>
                    Creating a positive place to work and supporting ethical initiatives. Always deliver exceptional quality, accomplish and improve.
                  </Text>
                </View>
                <View style={styles.visionMissionBox}>
                  <Text style={styles.visionMissionTitle}>Innovation and Commitment</Text>
                  <Text style={styles.visionMissionText}>
                  Think outside the box, challenge constructively and act before others do. Be accountable, work together as a team and communicate clearly.
                  </Text>
                </View>
              </View>
          </View>

          <Footer />
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
  content: {
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005086',
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    marginLeft: 100,
    marginRight: 100,
    width: 1200,
  },
  directorContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
  directorLink: {
    overflow: 'hidden',
    borderRadius: 75,
  },
  directorImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginLeft: 430,
    borderRadius: 75,
  },
  directorDescription: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  directorName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  directorDescriptionText: {
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: 100,
    marginRight: 100,
    width: 1200,
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  teamMember: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '33.33%',
    paddingHorizontal: 10,
  },
  teamImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  teamName: {
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  teamDescription: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },

  visionMissionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  visionMissionBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '45%',
  },
  visionMissionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  visionMissionText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
  },
});