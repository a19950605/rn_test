import moment from 'moment';

export const statusInfo = ({condStr, data}) => {
  let statusIcon = 'question';
  let statusColor = 'black';
  let statusStr = '';
  let dateStr = '';
  let statusIconType = 'octicon';
  switch (condStr) {
    /**
     * 
     * `Alarm(${
          data?.dtKeepalive != null
            ? moment(data?.dtKeepalive).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
            : '--'
        })`
     */
    case 'Health Status':
      statusColor = 'red';
      statusIcon = 'alert';
      statusStr = `Alarm (${
        data?.dtKeepalive != null
          ? moment(data?.dtKeepalive).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
          : '--'
      })`;
      break;
    case 'Controller Connection Status':
      switch (data?.connectionStatus) {
        case 'NORMAL':
          statusIcon = 'device-desktop';
          statusColor = 'green';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Normal (${dateStr})`;
          break;
        case 'CONNLOST':
          statusColor = 'black';
          statusIcon = 'alert';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Lost (${dateStr})`;
          break;
        case 'UNKNOWN':
          statusColor = 'red';
          statusIcon = 'question';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Unknown (${dateStr})`;
          break;
      }
      break;
    case 'Power Status':
      switch (data?.batteryStatus) {
        case 'NORMAL':
          statusColor = 'green';
          statusIcon = 'plug';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Normal (${dateStr})`;
          break;
        case 'CONNLOST':
          statusColor = 'red';
          statusIcon = 'alert';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Abnormal (Battery) (${dateStr})`;
          break;
        case 'UNKNOWN':
          statusColor = 'black';
          statusIcon = 'question';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Unknown (${dateStr})`;
          break;
      }
      break;
    case 'Lamp Status':
      switch (data?.lampStatus) {
        case 'ON':
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          statusColor = 'green';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `On (${dateStr})`;
          break;

        case 'OFFLINE':
          statusColor = 'gray';
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Offline (${dateStr})`;
          break;
        case 'OFF':
        case 'UNKNOWN':
          statusColor = 'gray';
          statusIcon = 'question';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Unknown (${dateStr})`;
          break;
      }
      break;
    case 'Previous Lamp Status':
      switch (data?.prevLampStatus) {
        case 'ON':
          statusColor = 'green';
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtPrevLampStatus)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `On (${dateStr})`;
          break;
        case 'OFF':
          statusColor = 'gray';
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          dateStr =
            data?.dtKeepalive != null
              ? moment(data?.dtPrevLampStatus)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Off (${dateStr})`;
          break;
        case 'OFFLINE':
          statusColor = 'gray';
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          dateStr =
            data?.dtPrevLampStatus != null
              ? moment(data?.dtPrevLampStatus)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Offline (${dateStr})`;
          break;
        case 'UNKNOWN':
          statusColor = 'gray';
          statusIcon = 'question';
          dateStr =
            data?.dtPrevLampStatus != null
              ? moment(data?.dtPrevLampStatus)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm:ss')
              : '--';
          statusStr = `Unknown (${dateStr})`;
          break;
      }
      break;
    case 'Relay Channel Status':
      switch (data?.relayChannel?.channelStatus) {
        case 'OPEN':
          statusColor = 'green';
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          dateStr =
            data?.relayChannel?.relayDtKeepalive != null
              ? moment(data?.relayChannel?.relayDtKeepalive).format(
                  'YYYY-MM-DD HH:mm:ss',
                )
              : '--';
          statusStr = `Open (${dateStr})`;
          break;
        case 'CLOSED':
          statusColor = 'gray';
          statusIconType = 'material-community';
          statusIcon = 'lightbulb';
          dateStr =
            data?.relayChannel?.relayDtKeepalive != null
              ? moment(data?.relayChannel?.relayDtKeepalive).format(
                  'YYYY-MM-DD HH:mm:ss',
                )
              : '--';
          statusStr = `Closed (${dateStr})`;
          break;
        case 'ERROR':
          statusColor = 'red';
          statusIcon = 'alert';
          dateStr =
            data?.relayChannel?.relayDtKeepalive != null
              ? moment(data?.relayChannel?.relayDtKeepalive).format(
                  'YYYY-MM-DD HH:mm:ss',
                )
              : '--';
          statusStr = `Closed (${dateStr})`;
          break;
      }
      break;
    default:
      break;
  }
  return {statusStr, statusIcon, statusColor, statusIconType};
};
