import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Menu} from 'react-native-paper';

const SortDropDown = ({
  close,
  setFilterDesc,
  setFilterField,
  setLoading,
  sortOption,
  filterDesc,
  filterField,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 999,

        right: 0,
        top: 40,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      {sortOption.map(s => {
        return (
          <Menu.Item
            key={s.id}
            trailingIcon={
              filterField == s.apiValue
                ? filterDesc
                  ? 'arrow-up'
                  : 'arrow-down'
                : ''
            }
            style={{
              backgroundColor:
                filterField == s.apiValue ? 'lightgray' : 'white',
            }}
            onPress={() => {
              setFilterDesc(!filterDesc);
              setFilterField(s.apiValue);
              // setData(sortData(data, 'rflid', filterDesc));
              setLoading(true);
              close(false);
            }}
            title={s.displayValue}
          />
        );
      })}
    </View>
  );
};

export default SortDropDown;
