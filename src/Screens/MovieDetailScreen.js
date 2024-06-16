import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

// --------- Component Imports ---------------
import { COLOR } from '../Constants/colors'
import Header from '../Components/Header'

const MovieDetailScreen = ({ navigation }) => {

  const MovieDetails = useSelector(state => state.data);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: MovieDetails?.backdrop_path }}
            style={styles.movieView}
            resizeMode="cover"
          />

          <Text style={styles.title}>{MovieDetails?.title}</Text>
          <View style={styles.timeView}>
            <Text style={[styles.ratingText, { paddingLeft: 5 }]}>Released on </Text>
            <MaterialCommunityIcons name="calendar" color={COLOR.textColor} size={15} />
            <Text style={[styles.ratingText, { paddingLeft: 5 }]}>{MovieDetails?.release_date}</Text>
          </View>
          <View style={styles.timeView}>
            <MaterialCommunityIcons name="timer-outline" color={COLOR.textColor} size={15} />
            <Text style={[styles.ratingText, { paddingLeft: 5 }]}>2h 45m</Text>
          </View>

          <View style={styles.startView}>
            <Text style={styles.starText}>9.6 ⭐ (140K reviews)</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.categoryView}>
            {MovieDetails?.genres?.map((item, index) => {
              return (
                <>
                  {index < 3 &&
                    <Text style={styles.categoryText}>{item}</Text>
                  }
                </>
              )
            })}
          </View>
          <View style={styles.categoryView}>
            {MovieDetails?.genres?.map((item, index) => {
              return (
                <>
                  {index >= 3 &&
                    <Text style={styles.categoryText}>{item}</Text>
                  }
                </>
              )
            })}
          </View>
        </View>
        <Text style={styles.description}>{MovieDetails?.overview}</Text>
      </ScrollView>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.BuyView}>
          <Text style={styles.BuyText}>Book Tickect</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
    paddingHorizontal: 16
  },
  imageContainer: {
    paddingTop: 20
  },
  movieView: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    color: COLOR.textColor,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  startView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  starText: {
    color: COLOR.textColor,
    fontSize: 12,
    paddingLeft: 2,
  },
  description: {
    color: COLOR.textColor,
    fontSize: 14,
    paddingTop: 20,
    textAlign: 'justify'
  },
  categoryView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryText: {
    color: COLOR.textColor,
    fontSize: 12,
    padding: 10,
    backgroundColor: COLOR?.secondaryColor,
    alignSelf: 'center',
    borderRadius: 10,
    marginRight: 5
  },
  bottomView: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  BuyView: {
    width: '100%',
    height: 50,
    backgroundColor: COLOR.primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BuyText: {
    color: COLOR.textColor,
    fontSize: 18,
    fontWeight: 'bold'
  },
  ratingText: {
    fontSize: 14,
    color: COLOR.textColor,
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  }
});

export default MovieDetailScreen;