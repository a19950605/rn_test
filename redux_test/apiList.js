const auth = (username, password) => {
  var formdata = new FormData();
  formdata.append('username', username);
  formdata.append('password', password);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  return fetch('https://gis2.ectrak.com.hk:8900/api/auth', requestOptions)
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
      return JSON.stringify(result);
    })
    .catch(error => console.log('error', error));
};

async function listEventLog(input_obj, token) {
  const {username, funcName, fromTime, toTime} = input_obj;
  var formdata = new FormData();
  console.log(input_obj);
  formdata.append('userName', username);
  formdata.append('funcName', funcName);
  formdata.append('fromTime', fromTime);
  formdata.append('toTime', toTime);
  var requestOptions = {
    method: 'POST',
    body: formdata,
    headers: {
      'X-Token': token,
    },
    redirect: 'follow',
  };

  fetch('https://gis2.ectrak.com.hk:8900/api/data/eventlog', requestOptions)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log('error', error));
}

export {auth, listEventLog};
