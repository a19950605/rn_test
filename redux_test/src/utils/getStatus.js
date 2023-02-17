const getConnStatus = conn => {
  let connStatus = '';
  switch (conn) {
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
  return connStatus;
};

const getFilterStatus = filterStatus => {
  return filterStatus == 'All'
    ? ''
    : filterStatus == 'ACTIVE'
    ? 'ACTIVE'
    : filterStatus == 'Isolated'
    ? 'SPECIAL'
    : filterStatus == 'Maintenance'
    ? 'DISABLED'
    : '';
};
export {getConnStatus, getFilterStatus};
