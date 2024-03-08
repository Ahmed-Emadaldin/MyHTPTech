import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StatItem = ({ imageSource, number, text }) => {
  return (
    <View style={styles.statItem}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.statImage} />
      </View>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statText}>{text}</Text>
    </View>
  );
};

const Stats = () => {
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(0);
  const [countries, setCountries] = useState(0);
  const [servicesReached, setServicesReached] = useState(0);
  const [engineers, setEngineers] = useState(0);
  const [projectsExecuted, setProjectsExecuted] = useState(0);

  useEffect(() => {
    const incrementSpeed = (number) => {
      if (number < 100) return 10;
      if (number < 10000) return 0.000005;
      return 1;
    };
  
    const interval = setInterval(() => {
      if (satisfiedCustomers < 500) setSatisfiedCustomers(satisfiedCustomers + 1);
      if (countries < 39) setCountries(countries + 1);
      if (servicesReached < 550) setServicesReached(servicesReached + 1);
      if (engineers < 1200) setEngineers(engineers + 1);
      if (projectsExecuted < 500) setProjectsExecuted(projectsExecuted + 1);
    }, incrementSpeed(satisfiedCustomers));
  
    return () => clearInterval(interval);
  }, [
    satisfiedCustomers,
    countries,
    servicesReached,
    engineers,
    projectsExecuted,
  ]);

  return (
    <View style={styles.statsContainer}>
      <StatItem
        imageSource={require('../assets/customer-9.png')}
        number={satisfiedCustomers.toString()}
        text="Satisfied Customers"
      />
      <StatItem
        imageSource={require('../assets/287990-200.png')}
        number={countries.toString()}
        text="No. of Countries we've Executed Projects"
      />
      <StatItem
        imageSource={require('../assets/images.png')}
        number={servicesReached.toString()}
        text="Services Reached Globally"
      />
      <StatItem
        imageSource={require('../assets/map.png')}
        number={engineers.toString()}
        text="No. of Engineers"
      />
      <StatItem
        imageSource={require('../assets/500px-Dollar_Sign.svg.png')}
        number={projectsExecuted.toString()}
        text="No. of Projects Executed"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  statItem: {
    width: '18%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    padding: 8,
    borderRadius: 30,
    marginBottom: 100,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  statImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005086',
    textAlign: 'center',
  },
  statText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Stats;