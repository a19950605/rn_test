import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {appContextPaths, EndPoint, appDefDomain} from '../constants/constants';
import {signout} from '../redux/features/login/loginSlice';
import {sortData} from '../utils/sortData';
import moment from 'moment';
const useFetchRoleData = ({
  userToken,
  loading,
  isFocused,
  setLoading,
  filterField,
  filterDesc,
}) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  console.log('hello fetch');
  console.log;
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(`${appContextPaths[appDefDomain]}${EndPoint.roles}`, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        // return result;
        // setData(result);
        console.log('role management');
        // console.log(result);
        setData(sortData(result?.content, filterField, filterDesc));
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log('error1', error);
      });
  }, [loading, isFocused]);

  return [data, error];
};
const useFetchUsersData = ({
  userToken,
  loading,
  isFocused,
  setLoading,
  filterField,
  filterDesc,
  isReload,
  setIsReload,
  isLastPage,
  setIsLastPage,
  setTotalPages,
  totalPages,
  page,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  console.log('hello fetch');

  useEffect(() => {
    if (
      isLastPage == true ||
      page == totalPages ||
      (isReload == false && loading == false)
    ) {
      return;
    }
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    //`https://gis2.ectrak.com.hk:8900/api/system/user${appendStr}`,

    //
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.users}?sort=${filterField},${
        filterDesc == true ? 'desc' : 'asc'
      }`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        // return result;
        // setData(result);
        console.log('user account management');
        console.log();
        // console.log(result);
        if (isReload == true) {
          setData(prevArray => [...prevArray, ...result?.content]);
          // setData(result?.content);
        } else {
          setData(result?.content);
          // TypeError: Invalid attempt to destructure non-iterable instance.
        }
        console.log('totalpage************');
        console.log(result?.totalPages);
        console.log('last******************');
        console.log(result?.last);

        setTotalPages(result?.totalPages);
        setIsLastPage(result?.last);
        if (loading == true) setLoading(false);
        if (isReload == true) setIsReload(false);
      })
      .catch(error => {
        setError(true);
        console.log('error1', error);
      });
  }, [loading, isFocused, isReload]);

  return [data, error];
};

const useFetchEventLogData = ({
  userToken,
  loading,
  isFocused,
  setLoading,
  filterField,
  filterDesc,
}) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  let formdata = new FormData();
  formdata.append('userName', '');
  formdata.append('funcName', '');
  formdata.append('fromTime', moment().format('YYYYMMDD'));
  formdata.append('toTime', moment().format('YYYYMMDD'));

  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: {
        'X-Token': userToken,
      },
      body: formdata,
    };
    fetch(`${appContextPaths[appDefDomain]}${EndPoint.elogs}`, requestOptions)
      .then(response => {
        console.log('response');
        return response.json();
      })
      .then(result => {
        console.log('result');
        console.log(result);
        setData(sortData(result, filterField, filterDesc));

        setLoading(false);
      })
      .catch(error => console.log('error', error));
  }, [loading, isFocused]);

  return [data, error];
};

const useFetchMonitorData = ({
  userToken,
  loading,
  isFocused,
  setLoading,
  filterField,
  filterDesc,
  setCurrentDate,
}) => {
  const dispatch = useDispatch();
  const [data2, setData] = useState();
  const [error2, setError] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    //`https://gis2.ectrak.com.hk:8900/api/system/user${appendStr}`,

    let showActive = '?showOnlyActive=0';
    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.opLamps}${showActive}`,
      requestOptions,
    )
      .then(response => {
        console.log('response.status: ', response.status); // 👉️ 200
        if (response.status == 403) {
          dispatch(signout());
        }
        return response.json();
      })
      .then(result => {
        console.log('role management');
        console.log(result);
        setData(sortData(result, filterField, filterDesc));
        // setLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log('error1', error);
      });
  }, [isFocused]);

  return [data2, error2];
};

const useCreateUser = ({userToken, form, navigation}) => {
  console.log(form);
  var formdata = new FormData();
  formdata.append('status', form?.status || '');
  formdata.append('username', form?.username || '');
  formdata.append('displayName', form?.displayName || '');
  formdata.append('password', form?.password || '');
  formdata.append('staffNo', form?.staffNo || '');
  formdata.append('rmks', form?.rmks || '');
  formdata.append('roleIds', [form?.role]);
  console.log('formdata');
  console.log(formdata);
  // createUser({token, formdata})
  //   .unwrap()
  //   .then(() => {})
  //   .then(error => {
  //     console.log(error);
  //   });
  var requestOptions = {
    method: 'POST',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': userToken,
    },
    body: formdata,
  };
  fetch(`${appContextPaths[appDefDomain]}${EndPoint.user}`, requestOptions)
    .then(response => {
      if (response.status == 200) {
        alert('create success');
        navigation.navigate('UserAccount');
      } else {
        alert('create fail');
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
      // return result;
    })
    .catch(error => console.log('error1', error));
};

const useFetchMonitorTest = ({
  userToken,
  loading,
  isFocused,
  setLoading,
  filterField,
  filterDesc,
  setCurrentDate,
  filterStatus,
  filterCONNStatus,
  filterRFLCode,
}) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    let formdata = new FormData();

    formdata.append(
      'status',
      filterStatus == 'All'
        ? ''
        : filterStatus == 'ACTIVE'
        ? 'ACTIVE'
        : filterStatus == 'Isolated'
        ? 'SPECIAL'
        : filterStatus == 'Maintenance'
        ? 'DISABLED'
        : '',
    ); //SPECIAL=ISOLATE, //maintenance=disabled //isolate=special
    let connStatus = '';
    switch (filterCONNStatus) {
      case 'Normal':
        connStatus = 'NORMAL';
        break;
      case 'Connection Lost':
        connStatus = 'CONNLOST';
        break;
      case 'Unknown':
        connStatus = 'UNKNOWN';
        break;
      default:
        connStatus = '';
        break;
    }
    formdata.append('deviceId', filterRFLCode);
    formdata.append('connectionStatus', connStatus);
    //status maintenace
    var requestOptions = {
      method: 'POST',
      headers: {
        'X-Token': userToken,
      },
      body: formdata,
    };

    fetch(`${appContextPaths[appDefDomain]}${EndPoint.lamps}`, requestOptions)
      .then(response => {
        console.log('response.status: ', response.status); // 👉️ 200

        return response.json();
      })
      .then(result => {
        setData(sortData(result?.content, filterField, filterDesc));
        setCurrentDate(moment().format('YYYY-MM-DD HH:mm:ss'));
        setLoading(false);
        console.log('post list test');
      })
      .catch(error => {
        setError(true);

        console.log('error1', error);
      });
  }, [loading, isFocused]);
  return [data, error];
};

const useFetchControllerList = ({userToken, loading, isFocused}) => {
  const [data3, setData3] = useState();
  const [error3, setError3] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    //`https://gis2.ectrak.com.hk:8900/api/system/user${appendStr}`,

    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.opCntlrcodes}`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        // return result;
        // setData(result);
        console.log('controller code');
        console.log(result);
        setData3(result);
      })
      .catch(error => {
        setError3(true);
        console.log('error1', error);
      });
  }, [loading, isFocused]);

  return [data3, error3];
};

const createNewRecord = ({
  token,
  setAlertMessage,
  setColor,
  setIcon,
  setShowModal,
  navigation,
  form,
  uri,
  lampX,
  lampY,
  imgX,
  imgY,
}) => {
  var formdata = new FormData();
  formdata.append('controllerCode', form.controllerId);
  formdata.append('code', form.rfl);

  formdata.append('controllerDeviceId', parseInt(form.deviceId));
  formdata.append('lampPositionY', lampX);
  formdata.append('lampPositionX', lampY);
  formdata.append('imageW', imgX);
  formdata.append('imageH', imgY);
  formdata.append('relayChannelIdx', parseInt(form.relayChannelIdx));
  formdata.append('xxoo', {
    uri: uri,
    type: 'image/jpeg',
    name: 'xxoo',
  });
  formdata.append('status', 'ACTIVE');

  var requestOptions = {
    method: 'POST',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: formdata,
  };
  fetch(`${appContextPaths[appDefDomain]}${EndPoint.lamp}`, requestOptions)
    .then(async response => {
      console.log('response create');
      let data = await response.json();
      console.log(data);
      if (response.status == 200) {
        setAlertMessage('Create success' + `(id:${data?.id})`);
        setIcon('check-circle');
        setColor('green');
        setShowModal(true);

        navigation.navigate('MonitoringTestSub');
      } else {
        setIcon('alert');
        setColor('red');
        console.log('alert test');
        console.log(data);
        setAlertMessage(data?.funcDesc);
        setShowModal(true);
      }

      // return response.json();
    })

    .catch(error => console.log('error1', error));
};

const useFetchUsersDataTest = async ({userToken}) => {
  let obj;
  var requestOptions = {
    method: 'GET',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': userToken,
    },
  };
  //`https://gis2.ectrak.com.hk:8900/api/system/user${appendStr}`,

  const result = await fetch(
    `${appContextPaths[appDefDomain]}${EndPoint.users}`,
    requestOptions,
  );

  obj = await result.json();
  console.log(obj);
  return obj;
};
export {
  useFetchRoleData,
  useFetchUsersData,
  useFetchEventLogData,
  useFetchMonitorData,
  useCreateUser,
  useFetchMonitorTest,
  useFetchControllerList,
  createNewRecord,
  useFetchUsersDataTest,
};
