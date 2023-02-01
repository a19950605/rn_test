export const MainModal = ({showModal, setShowModal}) => {
  return (
    <Modal isVisible={showModal}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'column',
            width: '90%',
            marginTop: 20,
            padding: 20,
            backgroundColor: 'white',
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
              }}>
              <Text>close</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Text>username</Text>
            </TouchableOpacity>
            <Text>All</Text>
          </View>
          <View>
            <Text>Role</Text>
            <Text>All</Text>
          </View>
          <View>
            <Text>Status</Text>
            <Text>All</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={{marginRight: 5}}>
              <Text style={{color: 'blue'}}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{color: 'green'}}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
