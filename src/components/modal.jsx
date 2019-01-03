import React, { Component } from "react";

import { Modal, Button, Icon, T } from "react-materialize";

const styles = {
  button: {
    backgroundColor: "#545775",
    color: "#fff"
  }
};

class Modale extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body, floating, large, label, actions } = this.props;

    return (
      <Modal
        header={title}
        trigger={
          <Button style={styles.button} floating={floating} large={large}>
            {label}
          </Button>
        }
        actions={actions}
      >
        <p>{body}</p>
      </Modal>
    );
  }
}

export default Modale;
