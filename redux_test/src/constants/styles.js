import {StyleSheet} from 'react-native';

const color = StyleSheet.create({
  brightness: {
    color: 'dark',
  },
  redText: {
    color: 'red',
  },
  primaryColor: {
    color: 'green',
  },
  primaryColor: {
    color: '#fd9c12',
  },
  gray: {
    color: 'gray',
  },
  blue: {
    color: 'blue',
  },
  black: {
    color: 'black',
  },
});

const styles = StyleSheet.create({
  brightness: {
    color: 'dark',
  },
  redText: {
    color: 'red',
  },
  primaryColor: {
    color: 'green',
  },
  primaryColor: {
    color: '#fd9c12',
  },
  bgWhite: {backgroundColor: 'white'},
  flex_1: {flex: 1},
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spaceBetweenP10: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  row: {flexDirection: 'row'},
  bold: {fontWeight: 'bold'},
  screenInit: {flex: 1, padding: 5, backgroundColor: 'white'},
  loginMobile: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
  },
  loginTablet: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
  },
  loginImage: {width: 100, height: 80},
  font50: {
    fontSize: 50,
  },
  loginFormMobile: {
    width: '75%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    paddingBottom: 30,
    paddingTop: 20,
  },
  loginFormTablet: {
    width: '30%',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
    paddingBottom: 30,
    paddingTop: 20,
  },
  loginInputM: {
    width: '85%',
    backgroundColor: '#f5f6f7',
  },
  loginInputT: {
    width: '65%',
    backgroundColor: '#f5f6f7',
  },
  loginInputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  justifyContentCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  loginButtonM: {width: '85%'},
  loginButtonT: {width: '65%'},
  //alarm history
  csvHeader: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    flexDirection: 'row',
  },
  blue: {color: 'blue'},
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  flexEnd0Padding: {flexDirection: 'row', justifyContent: 'flex-end'},
  mb60: {marginBottom: 60},
  mb60p5: {marginBottom: 60, padding: 5},
  mbn30: {marginBottom: -30},
  //eventlog
  container: {flex: 1, backgroundColor: 'white'},
  eventFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
    alignItems: 'center',
  },
  csvButton: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },

  //eventlog card
  eventCardBorder: {borderColor: 'gray', borderWidth: 0.2, padding: 10},
  flexRow: {flexDirection: 'row'},
  cardTitle: {color: 'black', fontWeight: 'bold'},
  width100: {width: '100%'},
  width100w: {backgroundColor: 'white', width: '100%'},
  wh100w: {backgroundColor: 'white', width: '100%', height: '100%'},
  tableCell1_5: {flex: 1.5, justifyContent: 'center'},
  tableCell4: {flex: 4, justifyContent: 'center'},
  eventLogTableText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  //lamp Monitoring
  reloadButtonBlue: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reloadButtonGray: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  //padding and margin single item
  p5: {
    padding: 5,
  },
  p10: {padding: 10},
  p20: {padding: 20},
  pV10: {paddingVertical: 10},
  pr5: {
    paddingRight: 5,
  },
  mr15: {
    marginRight: 15,
  },
  mtNeg5: {
    marginTop: -5,
  },
  mt10: {
    marginTop: 10,
  },
  //lamp screen component
  //card
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  bubbleContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 100,
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 13,
    paddingRight: 13,
  },
  bubbleText: {fontSize: 11, textAlign: 'center'},
  //lamp filter modal
  filterMenu: {
    width: '70%',
    position: 'absolute',
    right: -25,
    top: -15,
    height: '100%',
  },
  overlay: {flex: 1, backgroundColor: 'black'},
  filterTop: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  filterTitle: {color: 'white', fontWeight: 'bold', fontSize: 22},
  filterItemTitle: {
    color: 'black',
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  filterContent: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterBody: {flex: 1, backgroundColor: 'white'},
  bottomSpacing: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  filterContentText: {color: 'black', fontSize: 18, marginLeft: 15},
  resetBtn: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },
  resetBtnTitle: {fontSize: 18, color: 'blue', paddingLeft: 5},
  filterBtn: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },
  filterBtnTitle: {fontSize: 18, color: 'green', paddingLeft: 5},
  //lamp table item
  //table cell
  tableCell1: {flex: 1, justifyContent: 'center'},
  tableCell2: {flex: 2, justifyContent: 'center'},
  tableCell4mt: {flex: 4, justifyContent: 'center', marginTop: 5},
  subModalSize: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: -10,
    left: -20,
  },
  subModalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  rowSpaceBetween: {flexDirection: 'row', justifyContent: 'space-between'},
  filterEnterTitle: {color: 'black', fontSize: 16},
  filterEnterTitleContainer: {
    marginRight: 10,
    padding: 10,
  },
  filterClose: {
    marginRight: 10,
    padding: 10,
    flexDirection: 'row',
  },
  filterCloseText: {fontSize: 18, color: 'blue'},
  filterTextInput: {backgroundColor: '#f7f7f7', paddingLeft: 25},
  filterTextIcon: {position: 'absolute', left: '5%', top: '45%'},
  radioTouch: {
    marginRight: 10,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  optionsText: {fontSize: 18, color: 'black'},
  //lamp create screen
  whiteBackground: {backgroundColor: 'white'},
  saveDeleteButtonGroup: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  saveDeleteButtonGroupLessPad: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  saveBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  deleteBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
  },
  saveBtnTitle: {color: 'green'},
  delBtnTitle: {color: 'red'},

  btnIconPadding: {justifyContent: 'center', paddingRight: 5},
  //dropdown
  dropDownContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 999,
    width: '86%',
    left: 41,
    top: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  //lamp create tab
  lampStatus: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 999,
    width: '86%',
    left: 41,
    top: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  lampCreateContainer: {padding: 10, backgroundColor: 'white', flex: 1},
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  rowIcon: {padding: 10, justifyContent: 'center'},
  textInputMobile: {backgroundColor: '#f5f6f7', width: '85%'},
  textInputTablet: {backgroundColor: '#f5f6f7', width: '95%'},
  errorTxtShow: {marginTop: -15, marginLeft: 30},
  errorTxtHide: {marginTop: -30, marginLeft: 30},
  createIconPadd: {paddingLeft: 10, paddingRight: 10, paddingTop: 10},
  inputArrowIcon: {position: 'absolute', left: '90%', top: '30%'},
  inputArrowIconV2: {position: 'absolute', left: '78%', top: '30%'},
  //lamp details

  //role create,
  rowTab: {backgroundColor: 'white', padding: 2},
  roleCheckedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  //row item list
  rowListBorder: {
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  detailBtn: {
    backgroundColor: '#f0fbff',
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  //row man table
  ph0: {paddingHorizontal: 0},
  tableTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tableBtn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e6f9fa',
    borderColor: 'lightgray',
    borderWidth: 0.3,
    borderRadius: 0,
  },
  itemCenter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  tableArr: {flex: 1, justifyContent: 'center', flexDirection: 'row'},
  tableBtn2: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    flexShrink: 1,
  },
  flexGrow1: {flex: 1, flexGrow: 1},
  //useraccount
  userFirstIcon: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  //component
  //card button
  cardBtnContainer: {
    backgroundColor: 'lightblue',
    flex: 1,
    padding: 10,
    marginRight: 1,
  },
  cardBtnTxt: {textAlign: 'center', color: 'blue'},
  createBtnContainer: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },
  //
  loadBtnOverlay: {
    backgroundColor: 'black',
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  loadTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  //message overlay
  msgOverlay: {
    backgroundColor: 'black',
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
});

export {styles, color};
