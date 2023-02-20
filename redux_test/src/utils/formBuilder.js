export const formBuilder = datas => {
  var formdata = new FormData();

  for (var i = 0; i < datas.length; i += 1) {
    formdata.append(datas[i].key, datas[i].value);
  }

  return formdata;
};
