import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

// ------------ Imports ------------------
import { COLOR } from '../Constants/colors'

const FilterItem = ({ item, selected, setSelected }) => {
  return (
    <TouchableOpacity key={item?.id}
      style={[styles.filterContainer, { borderRadius: 20, backgroundColor: selected == item?.title ? COLOR.primaryColor : COLOR.secondaryColor, }]}
      onPress={() => setSelected(item?.title)}
    >
      <Text style={styles.textStyle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 15,
    alignSelf: 'center'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLOR.textColor
  }
});

export default FilterItem;