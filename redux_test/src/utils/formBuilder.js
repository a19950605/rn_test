export const formBuilder = datas => {
  var formdata = new FormData();

  for (var i = 0; i < datas.length; i += 1) {
    formdata.append(datas[i].key, datas[i].value);
  }

  //   formdata.append('status', form?.status || '');
  //   formdata.append('username', form?.username || '');
  //   formdata.append('displayName', form?.displayName || '');
  //   formdata.append('password', form?.password || '');
  //   formdata.append('staffNo', form?.staffNo || '');
  //   formdata.append('rmks', form?.rmks || '');
  //   formdata.append('roleIds', [form?.role]);

  return formdata;
};
