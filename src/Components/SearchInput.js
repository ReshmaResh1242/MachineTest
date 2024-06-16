import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --------- Imports ---------------
import { COLOR } from '../Constants/colors'

const SearchInput = ({ value, setValue }) => {

    return (
        <View style={styles.searchContainer}>
            <MaterialCommunityIcons name="magnify" color={COLOR.textColor} size={22} />
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder={'Search for movies'}
                placeholderTextColor={COLOR.textColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        height: 50,
        backgroundColor: COLOR.secondaryColor,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 25
    },
    input: {
        height: 40,
        color: COLOR.textColor,
    },
});

export default SearchInput;