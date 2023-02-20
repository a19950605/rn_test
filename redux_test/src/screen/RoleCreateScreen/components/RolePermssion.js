import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import {Checkbox} from 'react-native-paper';
import {styles} from '../../../constants/styles';

const RolePermission = props => {
  console.log('RoleDetailPermission');
  console.log(props?.listData);
  const [data1, setData1] = useState();

  const [checked, setChecked] = React.useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    if (props?.listData?.length == selectedId.length) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    props?.setPermission(selectedId);
  }, [selectedId]);

  return (
    <View style={styles.filterBody}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            if (props?.listData?.length == selectedId.length) {
              //  setChecked(false);
              setSelectedId([]);
            } else {
              //  setChecked(true);

              let selectedArr = [];
              props?.listData.map(d => {
                selectedArr.push(d.id);
              });
              // console.log('selected arr');
              // console.log(selectedArr);
              setSelectedId(selectedArr);
            }
          }}
        />
      </View>
      <FlatList
        data={props?.listData}
        renderItem={props => (
          <RoleCheckItem
            {...props}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        )}
      />
    </View>
  );
};

const RoleCheckItem = props => {
  const [checked1, setChecked1] = React.useState(false);
  //   props.selectedId.includes(props?.item?.id)
  //     ? setChecked1(true)
  //     : setChecked1(false);

  useEffect(() => {
    if (props?.selectedId?.includes(props?.item?.id)) {
      setChecked1(true);
    } else {
      setChecked1(false);
    }
  }, [props]);
  useEffect(() => {
    checked1
      ? props.selectedId.includes(props?.item?.id) == false
        ? props.setSelectedId([...props.selectedId, props?.item?.id])
        : ''
      : props.setSelectedId(props.selectedId.filter(s => s != props?.item?.id));
  }, [checked1]);
  return (
    <View style={styles.roleCheckedRow}>
      <View>
        <View style={styles.row}>
          <Text style={styles.bold}>Function ID: </Text>
          <Text>{props?.item?.id || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold}>Function: </Text>
          <Text>{props?.item?.code}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold}>Permission: </Text>
          <Text>{props?.item?.displayName}</Text>
        </View>
      </View>
      <Checkbox
        status={checked1 ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked1(!checked1);
        }}
      />
    </View>
  );
};

export default RolePermission;
