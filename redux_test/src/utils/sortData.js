export function sortData(list, key, filterDesc) {
  if (key == 'rflid') {
    if (filterDesc) {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
  } else if (key == 'rfl') {
    if (filterDesc) {
      return list
        .sort((a, b) => (a.code.toLowerCase() > b.code.toLowerCase() ? 1 : -1))
        .reverse();
    } else {
      return list.sort((a, b) =>
        a.code.toLowerCase() > b.code.toLowerCase() ? 1 : -1,
      );
    }
  } else if (key == 'id') {
    if (filterDesc) {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
  } else if (key == 'code') {
    if (filterDesc) {
      return list.sort((a, b) => (a.code > b.code ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.code > b.code ? 1 : -1));
    }
  } else if (key == 'alarmType') {
    if (filterDesc) {
      return list
        .sort((a, b) => (a.alarmType > b.alarmType ? 1 : -1))
        .reverse();
    } else {
      return list.sort((a, b) => (a.alarmType > b.alarmType ? 1 : -1));
    }
  } else if (key == 'controllerCode') {
    if (filterDesc) {
      return list
        .sort((a, b) => (a.controllerCode > b.controllerCode ? 1 : -1))
        .reverse();
    } else {
      return list.sort((a, b) =>
        a.controllerCode > b.controllerCode ? 1 : -1,
      );
    }
  } else if (key == 'dtCreate') {
    if (filterDesc) {
      return list.sort((a, b) => (a.dtCreate > b.dtCreate ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.dtCreate > b.dtCreate ? 1 : -1));
    }
  } else if (key == 'displayName') {
    if (filterDesc) {
      return list
        .sort((a, b) => (a.displayName > b.displayName ? 1 : -1))
        .reverse();
    } else {
      return list.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
    }
  } else if (key == 'username') {
    if (filterDesc) {
      return list.sort((a, b) => (a.username > b.username ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.username > b.username ? 1 : -1));
    }
  } else if (key == 'time') {
    if (filterDesc) {
      return list.sort((a, b) => (a.time > b.time ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.time > b.time ? 1 : -1));
    }
  } else if (key == 'func') {
    if (filterDesc) {
      return list.sort((a, b) => (a.func > b.func ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.func > b.func ? 1 : -1));
    }
  } else if (key == 'type') {
    if (filterDesc) {
      return list.sort((a, b) => (a.type > b.type ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.type > b.type ? 1 : -1));
    }
  } else if (key == 'dest') {
    if (filterDesc) {
      return list.sort((a, b) => (a.dest > b.dest ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.dest > b.dest ? 1 : -1));
    }
  } else if (key == 'status') {
    if (filterDesc) {
      return list.sort((a, b) => (a.status > b.status ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.status > b.status ? 1 : -1));
    }
  } else {
    if (filterDesc) {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    } else {
      return list.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
  }
}
