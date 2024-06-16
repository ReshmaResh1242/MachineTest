import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import LoaderKit from 'react-native-loader-kit'

// ------------ Imports ---------------
import ListItem from '../Components/ListItem';
import { COLOR } from '../Constants/colors';
import SearchInput from '../Components/SearchInput';
import FilterItem from '../Components/FilterItem';
import { api } from '../Api';

const MovieListScreen = ({ navigation }) => {

    const [search, setSearch] = useState(''); // Search State
    const [loading, setLoading] = useState(false); // State for loader

    const [selected, setSelected] = useState('All'); // State to set selected filter

    const [data, setData] = useState([]) // State to set movie list data and to set on change filter and search
    const [dataSet, setDataSet] = useState([]) // State to set movie list data
    const [filterdDatas, setFilterdDatas] = useState([]) // State to set filtered movie list data

    const [filterData, setFilterData] = useState([
        {
            id: '1',
            title: 'All',
        },
        {
            id: '2',
            title: 'Action & Adventure',
        },
        {
            id: '3',
            title: 'Horror',
        },
        {
            id: '4',
            title: 'Romance',
        },
        {
            id: '5',
            title: 'Animation',
        },
        {
            id: '6',
            title: 'Sci-Fi & Fantasy',
        },
        {
            id: '7',
            title: 'History',
        },
        {
            id: '8',
            title: 'Thriller'
        },
        {
            id: '9',
            title: 'Drama'
        },
        {
            id: '10',
            title: 'Crime'
        }
    ])

    useEffect(() => {
        getMovieListApi()
    }, [])

    // ---------------------- Get Movie List Api Integration -------------------------------
    const getMovieListApi = () => {
        setLoading(true)
        api.getMovieList().then(result => {
            if (result?.status == 200) {
                console.log("MovieList ----->>", result?.data?.movies[0])
                setData(result?.data?.movies)
                setDataSet(result?.data?.movies)
                setFilterdDatas(result?.data?.movies)
                setLoading(false)
            }
        }).catch(err => {
            console.log("MovieList ----->>", err?.response);
            setLoading(false)

        });
    }

    // -------------------------- Filter -----------------------
    useEffect(() => {
        setSearch('')
        if (selected == 'All') {
            setData(dataSet)
            setFilterdDatas(dataSet)
        } else {
            const filterdData = dataSet.filter((item, index) => {
                return item?.genres?.includes(selected)
            })
            setData(filterdData)
            setFilterdDatas(filterdData)
        }
    }, [selected])

    // ------------------------------ Search ------------------------------------
    useEffect(() => {
        if (search == '') {
            setData(filterdDatas)
        } else {
            const filterdData = filterdDatas?.filter((item, index) => {
                return item?.title?.toLowerCase()?.includes(search?.toLowerCase())
            })
            setData(filterdData)
        }
    }, [search])

    return (
        <SafeAreaView style={styles.container}>

            <SearchInput value={search} setValue={setSearch} />

            <View style={{ flex: 0.15 }}>
                <ScrollView horizontal style={{ marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
                    {filterData.map((item, index) => {
                        return (
                            <FilterItem item={item} selected={selected} setSelected={setSelected} />
                        )
                    })}
                </ScrollView>
            </View>
            {loading
                ? <View style={{ flex: 1, paddingHorizontal: 20, alignItems: 'center', marginTop: 20 }}>
                    <LoaderKit
                        style={{ width: 40, height: 40 }}
                        name={'BallSpinFadeLoader'}
                        color={COLOR?.primaryColor}
                    />
                </View>
                : <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <Text style={styles.title}>{selected}</Text>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <ListItem
                                item={item}
                                navigation={navigation}
                            />}
                        keyExtractor={item => item.id}
                    />
                </View>
            }

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.backgroundColor,
        paddingTop: 30
    },
    title: {
        fontSize: 22,
        color: COLOR.textColor,
        fontWeight: 'bold',
        paddingBottom: 10,
    }
});

export default MovieListScreen;