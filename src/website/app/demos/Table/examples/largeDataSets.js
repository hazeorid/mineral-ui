/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Flex, { FlexItem } from '../../../../../library/Flex';
import Table from '../../../../../library/Table';
import {
  columns2,
  columns4,
  columns104,
  rows100x104,
  rows100x4,
  rows2x2
} from '../shared/largeData';

export default {
  id: 'large-data-sets',
  title: 'Large Data Sets',
  description: `You should open this in a
[chromeless standalone](/components/table/large-data-sets?chromeless)
before clicking those buttons. 😬`,
  hideFromProd: true,
  scope: {
    Button,
    Component,
    Table,
    Flex,
    FlexItem,
    columns2,
    columns4,
    columns104,
    rows100x104,
    rows100x4,
    rows2x2
  },
  source: `
    () => {
      class MyTable extends Component {
        constructor(props) {
          super(props);

          this.state = {
            columns: columns2,
            data: rows2x2
          };

          this.populate2x2 = this.populate2x2.bind(this);
          this.populate4x100 = this.populate4x100.bind(this);
          this.populate104x100 = this.populate104x100.bind(this);
        }

        populate2x2() {
          this.setState({
            columns: columns2,
            data: rows2x2
          })
        }

        populate4x100() {
          this.setState({
            columns: columns4,
            data: rows100x4
          })
        }

        populate104x100() {
          this.setState({
            columns: columns104,
            data: rows100x104
          })
        }

        render() {
          return (
            <div>
              <Flex marginBottom="md">
                <FlexItem>
                  <Button onClick={this.populate2x2} size="medium">2 &times; 2</Button>
                </FlexItem>
                <FlexItem>
                  <Button onClick={this.populate4x100} size="medium">4 &times; 100</Button>
                </FlexItem>
                <FlexItem>
                  <Button onClick={this.populate104x100} size="medium">104 &times; 100</Button>
                </FlexItem>
              </Flex>
              <Table
                columns={this.state.columns}
                data={this.state.data}
                rowKey="aa"
                selectable
                title="Example data"
                hideTitle />
            </div>
          );
        }
      }

      return <MyTable />;
    }
    `
};
