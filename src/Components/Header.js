import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --------- Component Imports ---------------
import { COLOR } from '../Constants/colors'

const Header = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="chevron-left" color={COLOR.textColor} size={30} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
    },
});

export default Header;