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
import {styles} from '../../../constants/styles';
export const SubModal = ({
  setOpenModal,
  openModal,
  setFilter, //set the filter value
  options, //list value
  setFilterCode, //set code on rfl option
  filterVal, //selected value
  mode, // rfl,others currently
  title,
}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <Modal
        style={styles.subModalSize}
        isVisible={openModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenModal(false);
            }}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
        }>
        <View style={styles.subModalContainer}>
          <View style={styles.rowSpaceBetween}>
            <View style={styles.filterEnterTitleContainer}>
              <Text style={styles.filterEnterTitle}>Enter {title || ''}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
              }}
              style={styles.filterClose}>
              <Icon name="close" type="ionicon" color={'blue'} size={24} />
              <Text style={styles.filterCloseText}>Done</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.p10}>
              <TextInput
                label=""
                value={text}
                style={styles.filterTextInput}
                onChangeText={text => setText(text)}
              />
              <View style={styles.filterTextIcon}>
                <Icon name="search" size={24} color="gray" type="ionicon" />
              </View>
            </View>
            {(mode == 'rfl' || mode == 'group') &&
              'all'.includes(text?.toLowerCase()) && (
                <TouchableOpacity
                  onPress={() => {
                    mode == 'rfl' &&
                      setFilterCode != undefined &&
                      setFilterCode('');
                    setFilter('');
                  }}
                  style={styles.radioTouch}>
                  <RadioButton
                    value="first"
                    color={'red'}
                    status={filterVal == '' ? 'checked' : 'unchecked'}
                    onPress={() => {}}
                  />
                  <Text style={styles.optionsText}>{'All'}</Text>
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
                    style={styles.radioTouch}>
                    <RadioButton
                      value="first"
                      color={'red'}
                      status={
                        filterVal == o.code ||
                        (o.code == 'All' && filterVal == '')
                          ? 'checked'
                          : 'unchecked'
                      }
                      onPress={() => {
                        mode == 'rfl' &&
                          setFilterCode != undefined &&
                          setFilterCode(o.id);
                        setFilter(o.code);
                      }}
                    />
                    <Text style={styles.optionsText}>{o.code}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </Modal>
    </View>
  );
};
