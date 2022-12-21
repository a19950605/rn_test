import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button} from '@rneui/themed';

const optionsPerPage = [2, 3, 4];

const TableTest = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <Text>RFL ID</Text>
        </DataTable.Title>
        <DataTable.Title>RFL</DataTable.Title>
        <DataTable.Title>EPIC</DataTable.Title>
        <DataTable.Title>Group</DataTable.Title>
        <DataTable.Title>Status As Of</DataTable.Title>
        <DataTable.Title>eRFL Readliness</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
        <DataTable.Title>Action</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>KT/R1/001</DataTable.Cell>
        <DataTable.Cell>-</DataTable.Cell>
        <DataTable.Cell>-</DataTable.Cell>
        <DataTable.Cell>2022-12-13 15:29:03</DataTable.Cell>
        <DataTable.Cell>Active(available)</DataTable.Cell>
        <DataTable.Cell>icon1 icon2 icon3 icon4 icon5</DataTable.Cell>
        <DataTable.Cell>Button</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>KT/R1/001</DataTable.Cell>
        <DataTable.Cell>-</DataTable.Cell>
        <DataTable.Cell>-</DataTable.Cell>
        <DataTable.Cell>2022-12-13 15:29:03</DataTable.Cell>
        <DataTable.Cell>Active(available)</DataTable.Cell>
        <DataTable.Cell>icon1 icon2 icon3 icon4 icon5</DataTable.Cell>
        <DataTable.Cell>Button</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell>KT/R1/001</DataTable.Cell>
        <DataTable.Cell>-</DataTable.Cell>
        <DataTable.Cell>-</DataTable.Cell>
        <DataTable.Cell>2022-12-13 15:29:03</DataTable.Cell>
        <DataTable.Cell>Active(available)</DataTable.Cell>
        <DataTable.Cell>icon1 icon2 icon3 icon4 icon5</DataTable.Cell>
        <DataTable.Cell>Button</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TableTest;
