import React from "react";
import { Table, Column, Cell } from "fixed-data-table-2";
import "fixed-data-table-2/dist/fixed-data-table.css";

class MyTextCell extends React.Component {
  render() {
    // const { rowIndex, field, data, ...props } = this.props;
    const { rowIndex, field, columnKey, data, ...props } = this.props;
    return <Cell {...props}>{data[rowIndex][columnKey]}</Cell>;
  }
}

class MyLinkCell extends React.Component {
  render() {
    // const { rowIndex, field, data, ...props } = this.props;
    const { rowIndex, field, columnKey, data, ...props } = this.props;
    const link = data[rowIndex][columnKey];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

// const MyCustomCell = ({ rowIndex, field, data, special, ...props }) => (
const MyCustomCell = ({ rowIndex, field, columnKey, data, ...props }) => (
  <Cell>{data[rowIndex].special ? "I'm special" : "I'm not special"}</Cell>
);

export default class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        { name: "Rylan", email: "Angelita_Weimann42@gmail.com", special: true },
        {
          name: "Amelia",
          email: "Dexter.Trantow57@hotmail.com",
          special: false
        },
        { name: "Estevan", email: "Aimee7@hotmail.com", special: true },
        {
          name: "Florence",
          email: "Jarrod.Bernier13@yahoo.com",
          special: true
        },
        { name: "Tressa", email: "Yadira1@hotmail.com", special: false }
      ]
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
      >
        <Column
          header={<Cell>Name</Cell>}
          columnKey={'name'}
          // cell={<MyTextCell data={this.state.myTableData} field='name' />}
          cell={<MyTextCell data={this.state.myTableData} field='name' />}
          width={200}
        />
        <Column
          header={<Cell>Email</Cell>}
          columnKey={'email'}
          cell={<MyLinkCell data={this.state.myTableData} field="email" />}
          width={300}
        />
        <Column
          header={'Special or Not'}
          columnKey={'special'}
          cell={<MyCustomCell data={this.state.myTableData} field="special"></MyCustomCell>}
          width={200}
        >
        </Column>
      </Table>
    );
  }
}
