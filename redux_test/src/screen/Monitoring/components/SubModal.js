import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {RadioButton, TextInput} from 'react-native-paper';
export const SubModal = ({
  setOpenModal,
  openModal,
  setFilter, //set the filter value
  options, //list value
  setFilterCode, //set code on rfl option
  filterVal, //selected value
  mode, // rfl,others currently
}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <Modal
        isVisible={openModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingVertical: 20,
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
              }}
              style={{
                marginRight: 10,
                padding: 10,
                flexDirection: 'row',
              }}>
              <Icon name="close" type="ionicon" color={'blue'} size={24} />
              <Text style={{fontSize: 18, color: 'blue'}}>Done</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={{padding: 10}}>
              <TextInput
                label=""
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            {mode == 'rfl' && 'all'.includes(text?.toLowerCase()) && (
              <TouchableOpacity
                onPress={() => {
                  mode == 'rfl' &&
                    setFilterCode != undefined &&
                    setFilterCode('');
                  setFilter('All');
                }}
                style={{
                  marginRight: 10,
                  flexDirection: 'row',
                  padding: 5,
                  alignItems: 'center',
                }}>
                <RadioButton
                  value="first"
                  color={'red'}
                  status={filterVal == 'All' ? 'checked' : 'unchecked'}
                  onPress={() => {}}
                />
                <Text style={{fontSize: 18, color: 'black'}}>{'All'}</Text>
              </TouchableOpacity>
            )}
            {options
              .filter(r =>
                r?.code?.toLowerCase()?.includes(text?.toLowerCase()),
              )
              .map(o => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      mode == 'rfl' &&
                        setFilterCode != undefined &&
                        setFilterCode(o.id);
                      setFilter(o.code);
                    }}
                    key={o.code}
                    style={{
                      marginRight: 10,
                      flexDirection: 'row',
                      padding: 5,
                      alignItems: 'center',
                    }}>
                    <RadioButton
                      value="first"
                      color={'red'}
                      status={filterVal == o.code ? 'checked' : 'unchecked'}
                      onPress={() => {
                        mode == 'rfl' &&
                          setFilterCode != undefined &&
                          setFilterCode(o.id);
                        setfilterVal(o.code);
                      }}
                    />
                    <Text style={{fontSize: 18, color: 'black'}}>{o.code}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </Modal>
    </View>
  );
};
