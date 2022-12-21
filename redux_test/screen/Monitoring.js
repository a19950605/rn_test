import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';

const Monitoring = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
              marginRight: 5,
            }}>
            <Text style={{color: 'blue'}}>Add</Text>
          </View>
          <View
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flexDirection: 'row',
            }}>
            <Text style={{color: 'blue'}}>2022-12-06 12:26:43</Text>
          </View>
        </View>
        <View style={{padding: 5}}></View>
      </View>
      <ScrollView style={{paddingBottom: 2000}}>
        <MyComponent />

        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginRight: 5,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Alarm ID:{' '}
              </Text>
              <Text>408</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
              <Text>Lamp Fault</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Controller ID:{' '}
              </Text>
              <Text>C001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>RFL: </Text>
              <Text>KT/R1/001</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Triggered Datetime:{' '}
              </Text>
              <Text>2022-12-06 11:35:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Status: </Text>
              <Text>Active</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'space-around',
              backgroundColor: '#fafcff',
              marginBottom: 2,
            }}>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Details</Text>
            </View>
            <View>
              <Text style={{padding: 10, color: 'blue'}}>Control</Text>
            </View>
          </View>
        </View>
        <MyComponent />
      </ScrollView>
    </View>
  );
};

const optionsPerPage = [2, 3, 4];

const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
            Desser12t
          </Text>
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
            Calories
          </Text>
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
            Calories
          </Text>
        </DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

const cstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  head: {height: 44, backgroundColor: 'lavender'},
  row: {height: 40, backgroundColor: 'lightyellow'},
});
export default Monitoring;
