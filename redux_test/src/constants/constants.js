const appDefDomain = 'GIS2ECTRAK';

const appContextPaths = {
  PROD: 'https://172.21.245.49:443',
  GIS2ECTRAK: 'https://gis2.ectrak.com.hk:8900',
};
const appLangs = ['en', 'zh_HK'];

const EndPoint = {
  //auth
  auth: '/api/auth',
  profile: '/api/myProfile',
  myfuncs: '/api/userFuncPermissions',
  user: '/api/system/user',
  users: '/api/system/user',
  userChangePwd: '/api/changePassword',

  //  ROLE
  role: '/api/system/user/rolePermission',
  roles: '/api/system/user/rolePermission',

  //  FUNCTION
  funcs: '/api/funcPermissions',

  //  LAMP
  lamp: '/api/v2/device',
  lamps: '/api/v2/device/search',
  lampImg: '/api/data/device/img',
  lampCmds: '/api/v2/device/{ID}/cmdHistory',
  lampReset: '/api/v2/device/forceReset',
  lampsCtrl: '/api/v2/control/devices',
  lampsChkin: '/api/v2/control/assignment',

  //  ASSIGNMENT
  ass: '/api/v2/assignment',
  asss: '/api/v2/assignment/search',
  assComplete: '/api/v2/assignment/complete',
  assEtmss: '/api/v2/assignment/getEtmsTrans',

  //  ALARM
  alarm: '/api/v2/alarm',
  alarms: '/api/v2/alarm/search',
  alarmAck: '/api/v2/alarm/{ID}/ack',
  alarmRsmack: '/api/v2/alarm/{ID}/ackResume',
  alarmsCsv: '/api/data/alarms/csv',
  alarmsInstant: '/api/v2/alarms/after',

  //  EVENTLOG
  elogs: '/api/data/eventlog',
  elogsCsv: '/api/data/eventlog/csv',

  //  RELAY
  relay: '/api/v2/relay',
  relays: '/api/v2/relay/search',

  //  OPTION
  opLamps: '/api/v2/options/devices',
  opGpnames: '/api/v2/options/activeAssignmentGroupNames',
  opEtmsTns: '/api/v2/options/activeAssignmentETMSTNs',
  opRoles: '/api/v2/options/rolesAsOptions',
  opUsernames: '/api/v2/options/usernameAsOptions',
  opFuncnames: '/api/v2/options/logFunctions',
  opCntlrcodes: '/api/v2/options/controllerCode',

  //  SYSTEM
  sysParam: '/api/v2/systemParameter',
  sysParams: '/api/v2/systemParameters',
};
export {EndPoint, appLangs, appDefDomain, appContextPaths};
