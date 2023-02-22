export const permissionCheck = ({permissionCode, userFunc}) => {
  return userFunc?.find(o => o.code === permissionCode);
};
