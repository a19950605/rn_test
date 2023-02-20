export function sortData(list, key, filterDesc) {
  if (filterDesc) {
    return list.sort((a, b) => (a[key] > b[key] ? 1 : -1)).reverse();
  } else {
    return list.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
}

/*export function sortData2(list, key, filterDesc) {
  console.log('inside list2');
  console.log(list);
  console.log(key);

  if (list[0][key] != undefined) {
    if (typeof list[0][key][0] == 'number') {
      if (filterDesc) {
        return list.sort((a, b) => (a[key] > b[key] ? 1 : -1)).reverse();
      } else {
        return list.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      }
    } else {
      if (filterDesc) {
        return list
          .sort((a, b) =>
            a.code.toLowerCase() > b.code.toLowerCase() ? 1 : -1,
          )
          .reverse();
      } else {
        return list.sort((a, b) =>
          a.code.toLowerCase() > b.code.toLowerCase() ? 1 : -1,
        );
      }
    }
  } else {
    return list;
  }
}
*/
