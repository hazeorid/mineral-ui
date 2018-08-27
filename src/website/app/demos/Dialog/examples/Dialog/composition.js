/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import Dialog from '../../../../../../library/Dialog';
import Select from '../../../../../../library/Select';
import { statesData as data } from '../../../Select/components/selectData';

export default {
  id: 'composition',
  title: 'Composition',
  description: `TODO Other Mineral components may be composed in the body of the
Dialog.`,
  scope: {
    Button,
    Component,
    data,
    Dialog,
    Select
  },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
      }

      toggleDialog() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

      handleClose() {
        this.setState(prevState => ({
          isOpen: false
        }));
      }

      render() {
        const { isOpen } = this.state;

        return (
          <div>
            <Button onClick={this.toggleDialog}>{isOpen ? 'Close' : 'Open' } Dialog</Button>
            <Dialog
              appSelector="#app"
              title="Lorem ipsum dolor sit amet"
              actions={[
                { onClick: this.toggleDialog, text: 'Cancel' },
                { onClick: this.toggleDialog, text: 'Action' }
              ]}
              isOpen={isOpen}
              onClose={this.handleClose}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <Select data={data} name="state" />
            </Dialog>
          </div>
        )
      }
    }

    return <Demo />;
  }`
};
