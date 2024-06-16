import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

// ------------ Imports ------------------
import { COLOR } from '../Constants/colors'

const ListItem = ({ item, navigation }) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity key={item?.id} style={styles.item} onPress={() => {
            navigation.navigate('MovieDetailScreen')
            dispatch({
                type: 'SET_DETAILS',
                payload: item,
            });
        }}>
            <ImageBackground source={{ uri: item?.backdrop_path }} resizeMode="cover" style={styles.image}>
                <View style={styles.contentContainer}>
                    <View style={styles.content}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, paddingTop: 5, paddingLeft: 10 }}>
                                <Text style={styles.title} numberOfLines={1}>{item?.title}</Text>
                                <View style={styles.timeView}>
                                    <MaterialCommunityIcons name="timer-outline" color={COLOR.textColor} size={15} />
                                    <Text style={[styles.ratingText, { paddingLeft: 5 }]}>2h 45m</Text>
                                </View>
                                <Text style={styles.ratingText}>9.5 ⭐ (140K reviews)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLOR.backgroundColor,
        marginVertical: 8,
        height: 200,
    },
    title: {
        fontSize: 16,
        color: COLOR.textColor,
        fontWeight: 'bold',
        paddingTop: 5
    },
    image: {
        height: '100%',
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        height: 90,
        backgroundColor: COLOR.secondaryColor,
        opacity: 0.85
    },
    ratingText: {
        fontSize: 14,
        color: COLOR.textColor,
        paddingTop: 2
    },
    timeView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    }
});

export default ListItem;