export const requestOptions = ({method, userToken, data}) => {
  console.log('requestOptions', data, method);
  if (method == 'GET') {
    return {
      method: method,
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
  } else {
    console.log('inside post put delete');
    console.log(data);
    return {
      method: method,
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
        body: data,
      },
    };
  }
};
