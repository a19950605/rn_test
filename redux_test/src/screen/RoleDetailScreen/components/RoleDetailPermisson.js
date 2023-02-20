import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import {Checkbox} from 'react-native-paper';
import {styles} from '../../../constants/styles';

const RoleDetailPermission = props => {
  console.log('RoleDetailPermission');
  console.log(props?.listData);
  // console.log(props?.listData);
  // console.log(props.selectedData);
  const [data1, setData1] = useState();

  const [checked, setChecked] = React.useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    console.log('setting looping p');
    props?.selectedData?.map(p => {
      console.log('looping p');
      console.log(p);
      console.log('pid');
      console.log(p.id);
      setSelectedId(old => [...old, p.id]);
    });
    console.log('selectedid');
    console.log(selectedId);
    console.log(props?.selectedData);
  }, []);
  //props?.selectedData
  useEffect(() => {
    if (props?.listData?.length == selectedId.length) {
      console.log('checked all true');
      console.log(props?.listData?.length);
      console.log(selectedId.length);
      setChecked(true);
    } else {
      console.log('checked all false');
      console.log(props?.listData?.length);
      console.log(selectedId.length);
      setChecked(false);
    }
    props?.setSelectedData(selectedId);
  }, [selectedId]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            console.log('testing check0');
            if (props?.listData?.length == selectedId.length) {
              console.log('checkpoint1');
              //  setChecked(false);
              setSelectedId([]);
            } else {
              //  setChecked(true);
              console.log('checkpoint2');
              let selectedArr = [];
              props?.listData.map(d => {
                selectedArr.push(d.id);
              });
              console.log('selected arr');
              console.log(selectedArr.length);
              console.log(props?.listData?.length);
              console.log(selectedArr);
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
            checked={checked}
          />
        )}
      />
    </View>
  );
};

const RoleCheckItem = ({item, selectedId, setSelectedId, checked}) => {
  const [checked1, setChecked1] = React.useState(false);
  //   props.selectedId.includes(props?.item?.id)
  //     ? setChecked1(true)
  //     : setChecked1(false);

  useEffect(() => {
    if (selectedId.includes(item.id)) {
      setChecked1(true);
    } else {
      setChecked1(false);
    }
  }, [checked]);
  useEffect(() => {
    checked1
      ? selectedId.includes(item?.id) == false
        ? setSelectedId([...selectedId, item?.id])
        : ''
      : setSelectedId(selectedId.filter(s => s != item?.id));
    console.log('GET SELECTED ID');
    console.log(selectedId);
  }, [checked1]);
  return (
    <View style={styles.roleCheckedRow}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Function ID</Text>
          <Text>{item?.id || ''}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Function </Text>
          <Text>{item?.shortDisplayName || ''}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Permission</Text>
          <Text>{item?.displayName || ''}</Text>
        </View>
      </View>
      <Checkbox
        status={checked1 ? 'checked' : 'unchecked'}
        onPress={() => {
          console.log('testing check1');

          setChecked1(!checked1);
        }}
      />
    </View>
  );
};

export default RoleDetailPermission;
