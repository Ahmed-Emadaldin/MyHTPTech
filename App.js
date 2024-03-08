import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './routes/Homepage';
import About from './routes/About';
import Career from './routes/Career';
import Contact from './routes/Contact';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={Homepage} />
                <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
                <Stack.Screen name="Career" component={Career} options={{ headerShown: false }} />
                <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}