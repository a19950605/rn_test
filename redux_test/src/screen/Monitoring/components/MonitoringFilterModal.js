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
import {SubModal} from './SubModal';

export const MonitoringFilterModal = ({
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

  useEffect(() => {
    if (ModalContent == true) {
    }
    {
      /*
        setOpenModal={setOpenRFLModal}
        openModal={openRFLModal}
        setFilter={setFilterRFL}
        options={rflDropDown}
        setFilterCode={setFilterRFLCode}
        filterVal={filterRFL}
        mode={'rfl'}
*/
    }
  }, [ModalContent]);

  return (
    <View>
      <Modal
        animationIn={'slideInRight'}
        animationOut={'slideOutDown'}
        style={{
          width: '70%',
          position: 'absolute',
          right: -25,
          top: -15,
          height: '100%',
        }}
        isVisible={showMainModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setShowMainModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              backgroundColor: 'black',
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 22}}>
              Filters
            </Text>
          </View>
          <View style={{paddingVertical: 10}}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}>
                RFL
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenRFLModal(true);
              }}>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
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
                  style={{marginRight: 15}}
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
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}>
                CONN Status
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenConnModal(true);
              }}>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{color: 'black', fontSize: 18, marginLeft: 15}}>
                    {filterCONNStatus}
                  </Text>
                </View>
                <Icon
                  name="sort-down"
                  type="font-awesome"
                  color={'gray'}
                  size={18}
                  style={{marginRight: 15}}
                />
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                borderBottomColor: 'rgba(0,0,0,0.2)',
                borderBottomWidth: 1,
                marginBottom: 25,
              }}
            />

            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}>
                Group
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenGroupModal(true);
              }}>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{color: 'black', fontSize: 18, marginLeft: 15}}>
                    {filterGroup}
                  </Text>
                </View>
                <Icon
                  name="sort-down"
                  type="font-awesome"
                  color={'gray'}
                  size={18}
                  style={{marginRight: 15}}
                />
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                borderBottomColor: 'rgba(0,0,0,0.2)',
                borderBottomWidth: 1,
                marginBottom: 25,
              }}
            />
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}>
                Status
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                setOpenStatusModal(true);
              }}>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={{color: 'black', fontSize: 18, marginLeft: 15}}>
                    {filterStatus}
                  </Text>
                </View>
                <Icon
                  name="sort-down"
                  type="font-awesome"
                  size={18}
                  color={'gray'}
                  style={{marginRight: 15}}
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

            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setFilterCONNStatus('All');
                  setFilterRFLCode('');
                  setFilterRFL('All');
                  setFilterStatus('ACTIVE');
                }}
                style={{
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: 'blue',
                  borderRadius: 5,
                  padding: 10,
                  flexDirection: 'row',
                }}>
                <Icon name="sync" type="octicon" size={24} color={'blue'} />
                <Text style={{fontSize: 18, color: 'blue', paddingLeft: 5}}>
                  Reset
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setLoading(true);
                  setShowMainModal(false);
                }}
                style={{
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: 'green',
                  borderRadius: 5,
                  padding: 10,
                  flexDirection: 'row',
                }}>
                <Icon
                  name="filter"
                  type="font-awesome"
                  size={24}
                  color={'green'}
                />
                <Text style={{fontSize: 18, color: 'green', paddingLeft: 5}}>
                  Filter
                </Text>
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
