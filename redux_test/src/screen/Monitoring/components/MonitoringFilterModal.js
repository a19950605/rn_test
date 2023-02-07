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
  rflDropDown,
  filterCONNStatus,
  setFilterCONNStatus,
  filterRFL,
  setFilterRFL,
  setFilterRFLCode,
}) => {
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openConnModal, setOpenConnModal] = useState(false);
  const [openRFLModal, setOpenRFLModal] = useState(false);

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
          <View style={{padding: 20}}>
            <View>
              <Text style={{color: 'black', fontSize: 16.5}}>RFL</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setOpenRFLModal(true);
                }}>
                <Text style={{color: 'black', fontSize: 16.5}}>
                  {filterRFL}
                </Text>
              </TouchableOpacity>
            </View>
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
            <View>
              <Text style={{color: 'black', fontSize: 16.5}}>CONN</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setOpenConnModal(true);
                }}>
                <Text style={{color: 'black', fontSize: 16.5}}>
                  {filterCONNStatus}
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
        </View>
      </Modal>
      <StatusModal
        setOpenStatusModal={setOpenStatusModal}
        openStatusModal={openStatusModal}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <ConnStatusModal
        setFilterCONNStatus={setFilterCONNStatus}
        setOpenConnModal={setOpenConnModal}
        openConnModal={openConnModal}
      />
      <RflModal
        rflDropDown={rflDropDown}
        setFilterRFL={setFilterRFL}
        setFilterRFLCode={setFilterRFLCode}
        openRFLModal={openRFLModal}
        setOpenRFLModal={setOpenRFLModal}
      />
    </View>
  );
};
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
  setFilterCONNStatus,
}) => {
  const options = [
    {displayValue: 'All', stateVal: ''},

    {displayValue: 'Normal', stateVal: 'NORMAL'},
    {displayValue: 'Connection Loss', stateVal: 'CONNLOST'},
    {displayValue: 'Unknown', stateVal: 'UNKNOWN'},
  ];
  return (
    <View>
      <Modal
        isVisible={openConnModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenConnModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setOpenConnModal(false);
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
            {options.map((o, idx) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setFilterCONNStatus(o.displayValue);
                  }}
                  key={idx}
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

const RflModal = ({
  setOpenRFLModal,
  openRFLModal,
  setFilterRFL,
  rflDropDown,
  setFilterRFLCode,
}) => {
  const options = [
    {displayValue: 'All', stateVal: ''},

    {displayValue: 'Normal', stateVal: 'NORMAL'},
    {displayValue: 'Connection Loss', stateVal: 'CONNLOST'},
    {displayValue: 'Unknown', stateVal: 'UNKNOWN'},
  ];
  return (
    <View>
      <Modal
        isVisible={openRFLModal}
        customBackdrop={
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenRFLModal(false);
            }}>
            <View style={{flex: 1, backgroundColor: 'black'}} />
          </TouchableWithoutFeedback>
        }>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setOpenRFLModal(false);
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
            {rflDropDown.map(o => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setFilterRFLCode(o.id);
                    setFilterRFL(o.code);
                  }}
                  key={o.id}
                  style={{
                    marginRight: 10,

                    padding: 10,
                  }}>
                  <Text style={{fontSize: 18, color: 'blue'}}>{o.code}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};
