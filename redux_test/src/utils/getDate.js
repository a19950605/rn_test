const getDate = () => {
  var date = new Date();

  var dateStr =
    date.getFullYear() +
    '-' +
    ('00' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('00' + date.getDate()).slice(-2) +
    '-' +
    ' ' +
    ('00' + date.getHours()).slice(-2) +
    ':' +
    ('00' + date.getMinutes()).slice(-2) +
    ':' +
    ('00' + date.getSeconds()).slice(-2);

  return dateStr;
};

const getToday = () => {
  var date = new Date();

  var dateStr =
    date.getFullYear() +
    '' +
    ('00' + (date.getMonth() + 1)).slice(-2) +
    '' +
    ('00' + date.getDate()).slice(-2);

  return dateStr;
};

const convertDate = data => {
  if (!data) {
    return undefined;
  }
  var date = new Date(data);
  date.setHours(date.getHours() + 8);

  var dateStr =
    date.getFullYear() +
    '-' +
    ('00' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('00' + date.getDate()).slice(-2) +
    '-' +
    ' ' +
    ('00' + date.getHours()).slice(-2) +
    ':' +
    ('00' + date.getMinutes()).slice(-2) +
    ':' +
    ('00' + date.getSeconds()).slice(-2);

  return dateStr;
};
export {getDate, getToday, convertDate};
