import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// -------------------- Screen Imports ----------------------
import MovieListScreen from '../Screens/MovieListScreen';
import MovieDetailScreen from '../Screens/MovieDetailScreen';

const Stack = createNativeStackNavigator();

function StackNavigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="MovieListScreen" component={MovieListScreen} />
                <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigations;