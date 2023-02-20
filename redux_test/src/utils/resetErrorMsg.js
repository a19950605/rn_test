export const resetErrorMsg = ({errorSetter}) => {
  errorSetter.map(e => {
    e('');
  });
};
