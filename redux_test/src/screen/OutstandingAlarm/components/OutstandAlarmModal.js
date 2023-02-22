import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {RadioButton, TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';
import {SubModal} from './SubModal';

export const OutStandingAlarmModal = ({
  setShowMainModal,
  showMainModal,
  filterStatus,
  setFilterStatus,
  setLoading,
  filterAlarmType,
  setFilterAlarmType,
}) => {
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openTypeModal, setOpenTypeModal] = useState(false);

  const [ModalContent, setModalContent] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState('');
  const [options, setOptions] = useState('');
  const [filterCode, setFilterCode] = useState(undefined);
  const [filterVal, setfilterVal] = useState();
  const [mode, setMode] = useState('other');

  return (
    <View>
      <Modal
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        style={styles.filterMenu}
        isVisible={showMainModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setShowMainModal(false);
            }}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
        }>
        <View style={styles.filterBody}>
          <View style={styles.filterTop}>
            <Text style={styles.filterTitle}>Filters</Text>
          </View>
          <View style={styles.pV10}>
            <View>
              <Text style={styles.filterItemTitle}>Type</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenTypeModal(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={styles.filterContentText}>
                    {filterAlarmType || 'All'}
                  </Text>
                </View>
                <Icon
                  name="sort-down"
                  type="font-awesome"
                  color={'gray'}
                  size={18}
                  style={styles.mr15}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.bottomSpacing} />

            <View>
              <Text style={styles.filterItemTitle}>Status</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenStatusModal(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={styles.filterContentText}>
                    {filterStatus || 'All'}
                  </Text>
                </View>
                <Icon
                  name="sort-down"
                  type="font-awesome"
                  size={18}
                  color={'gray'}
                  style={styles.mr15}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.bottomSpacing} />

            <View style={styles.flexEnd0Padding}>
              <TouchableOpacity
                onPress={() => {
                  //
                  setFilterAlarmType('');
                  setFilterStatus('');
                }}
                style={styles.resetBtn}>
                <Icon name="sync" type="octicon" size={24} color={'blue'} />
                <Text style={styles.resetBtnTitle}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setLoading(true);
                  setShowMainModal(false);
                }}
                style={styles.filterBtn}>
                <Icon
                  name="filter"
                  type="font-awesome"
                  size={24}
                  color={'green'}
                />
                <Text style={styles.filterBtnTitle}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <SubModal
        setOpenModal={setOpenStatusModal}
        openModal={openStatusModal}
        setFilter={setFilterStatus}
        options={[
          {code: 'All', stateVal: ''},
          {code: 'Active', stateVal: 'ACTIVE'},

          {code: 'Acknowledged', stateVal: 'ACKNOWLEDGED'},
          {code: 'Resumed', stateVal: 'RESUMED'},
        ]}
        setFilterCode={undefined}
        filterVal={filterStatus}
        mode={'others'}
        title={'Status'}
      />
      <SubModal
        setOpenModal={setOpenTypeModal}
        openModal={openTypeModal}
        setFilter={setFilterAlarmType}
        options={[
          {code: 'All', stateVal: ''},

          {code: 'Connection Lost', stateVal: 'CONNECTION_LOST'},
          {code: 'On Battery', stateVal: 'ON_BATTERY'},
          {code: 'UPS Alarm', stateVal: 'UPS_ALARM'},

          {code: 'Normal', stateVal: 'NORMAL'},
          {code: 'State Machine Offline', stateVal: 'STATE_MACHINE_OFFLINE'},
          {code: 'Lamp Fault', stateVal: 'LAMP_FAULT'},
        ]}
        setFilterCode={undefined}
        filterVal={filterAlarmType}
        mode={'others'}
        title={'CONN Status'}
      />
    </View>
  );
};
