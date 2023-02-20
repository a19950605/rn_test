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

export const LampFilterModal = ({
  setShowMainModal,
  showMainModal,
  filterStatus,
  setFilterStatus,
  setLoading,
  rflDropDown,
  filterCONNStatus,
  setFilterCONNStatus,
  filterRFL,
  setFilterRFL,
  setFilterRFLCode,
  filterGroup,
  setFilterGroup,
  setOpenDate,
  date,
}) => {
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openConnModal, setOpenConnModal] = useState(false);
  const [openRFLModal, setOpenRFLModal] = useState(false);
  const [openGroupModal, setOpenGroupModal] = useState(false);

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
        animationOut={'slideOutDown'}
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
              <Text style={styles.filterItemTitle}>RFL</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenRFLModal(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={{color: 'black', fontSize: 18, marginLeft: 20}}>
                    {filterRFL}
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
            <View
              style={{
                borderBottomColor: 'rgba(0,0,0,0.2)',
                borderBottomWidth: 1,
                marginBottom: 15,
              }}
            />

            <View>
              <Text style={styles.filterItemTitle}>CONN Status</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenConnModal(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={styles.filterContentText}>
                    {filterCONNStatus}
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
              <Text style={styles.filterItemTitle}>Group</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenGroupModal(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={styles.filterContentText}>{filterGroup}</Text>
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
              <Text style={styles.filterItemTitle}>Status as of</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenDate(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={styles.filterContentText}>{'select Date'}</Text>
                </View>
                <Icon
                  name="close"
                  type="font-awesome"
                  size={18}
                  color={'black'}
                  style={styles.mr15}
                />
              </View>
            </TouchableWithoutFeedback>
            <View>
              <Text style={styles.filterItemTitle}>Status</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenStatusModal(true);
              }}>
              <View style={styles.filterContent}>
                <View>
                  <Text style={styles.filterContentText}>{filterStatus}</Text>
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
                  setFilterCONNStatus('All');
                  setFilterRFLCode('');
                  setFilterRFL('All');
                  setFilterStatus('ACTIVE');
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
        setOpenModal={setOpenGroupModal}
        openModal={openGroupModal}
        setFilter={setFilterGroup}
        options={[]}
        setFilterCode={undefined}
        filterVal={filterGroup}
        mode={'group'}
        title={'group'}
      />

      <SubModal
        setOpenModal={setOpenStatusModal}
        openModal={openStatusModal}
        setFilter={setFilterStatus}
        options={[
          {code: 'All', stateVal: ''},
          {code: 'ACTIVE', stateVal: 'ACTIVE'},

          {code: 'Isolated', stateVal: 'SPECIAL'},
          {code: 'Maintenance', stateVal: 'DISABLED'},
        ]}
        setFilterCode={undefined}
        filterVal={filterStatus}
        mode={'others'}
        title={'Status'}
      />
      <SubModal
        setOpenModal={setOpenConnModal}
        openModal={openConnModal}
        setFilter={setFilterCONNStatus}
        options={[
          {code: 'All', stateVal: ''},

          {code: 'Normal', stateVal: 'NORMAL'},
          {code: 'Connection Lost', stateVal: 'CONNLOST'},
          {code: 'Unknown', stateVal: 'UNKNOWN'},
        ]}
        setFilterCode={undefined}
        filterVal={filterCONNStatus}
        mode={'others'}
        title={'CONN Status'}
      />

      <SubModal
        setOpenModal={setOpenRFLModal}
        openModal={openRFLModal}
        setFilter={setFilterRFL}
        options={rflDropDown}
        setFilterCode={setFilterRFLCode}
        filterVal={filterRFL}
        mode={'rfl'}
        title={'RFL'}
      />
    </View>
  );
};
