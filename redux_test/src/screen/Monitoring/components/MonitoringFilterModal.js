import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

export const MonitoringFilterModal = ({
  setShowMainModal,
  showMainModal,
  filterStatus,
  setFilterStatus,
  setLoading,
}) => {
  const [openStatusModal, setOpenStatusModal] = useState(false);

  return (
    <View>
      <Modal
        isVisible={showMainModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setShowMainModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <View>
            <Text style={{color: 'black', fontSize: 16.5}}>Status</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setOpenStatusModal(true);
              }}>
              <Text style={{color: 'black', fontSize: 16.5}}>
                {filterStatus}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                marginRight: 10,
                borderWidth: 1,
                borderColor: 'blue',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text style={{fontSize: 18, color: 'blue'}}>Reset</Text>
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
              }}>
              <Text style={{fontSize: 18, color: 'green'}}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StatusModal
        setOpenStatusModal={setOpenStatusModal}
        openStatusModal={openStatusModal}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
    </View>
  );
};
//拆出黎
const StatusModal = ({
  setOpenStatusModal,
  openStatusModal,
  filterStatus,
  setFilterStatus,
}) => {
  const options = [
    {displayValue: 'All', stateVal: ''},
    {displayValue: 'ACTIVE', stateVal: 'ACTIVE'},

    {displayValue: 'Isolated', stateVal: 'SPECIAL'},
    {displayValue: 'Maintenance', stateVal: 'DISABLED'},
  ];
  return (
    <View>
      <Modal
        isVisible={openStatusModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenStatusModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setOpenStatusModal(false);
              }}
              style={{
                marginRight: 10,
                borderWidth: 1,
                borderColor: 'blue',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text style={{fontSize: 18, color: 'blue'}}>Done</Text>
            </TouchableOpacity>
          </View>

          <View>
            {options.map(o => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setFilterStatus(o.displayValue);
                  }}
                  key={o.displayValue}
                  style={{
                    marginRight: 10,

                    padding: 10,
                  }}>
                  <Text style={{fontSize: 18, color: 'blue'}}>
                    {o.displayValue}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ConnStatusModal = ({
  setOpenConnModal,
  openConnModal,
  filterStatus,
  setFilterStatus,
}) => {
  const options = [
    {displayValue: 'All', stateVal: ''},
    {displayValue: 'ACTIVE', stateVal: 'ACTIVE'},

    {displayValue: 'Isolated', stateVal: 'SPECIAL'},
    {displayValue: 'Maintenance', stateVal: 'DISABLED'},
  ];
  return (
    <View>
      <Modal
        isVisible={openStatusModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenStatusModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setOpenStatusModal(false);
              }}
              style={{
                marginRight: 10,
                borderWidth: 1,
                borderColor: 'blue',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text style={{fontSize: 18, color: 'blue'}}>Done</Text>
            </TouchableOpacity>
          </View>

          <View>
            {options.map(o => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setFilterStatus(o.displayValue);
                  }}
                  key={o.displayValue}
                  style={{
                    marginRight: 10,

                    padding: 10,
                  }}>
                  <Text style={{fontSize: 18, color: 'blue'}}>
                    {o.displayValue}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};
