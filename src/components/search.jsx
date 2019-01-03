import React, { Component } from "react";

import { Row, Col, Input } from "react-materialize";

const styles = {
  row: {
    //shadow: "#545760",
    padding: "0 10%"
    //weidht: "90%"
  },
};

class Search extends Component {
  state = {};
  render() {
    return (
      <Row style={styles.row}>
          <Col s={3}> </Col>
          <Input s={6} style={{ left: '25%' }} label="Search Itineraries" />
      </Row>
    );
  }
}

export default Search;
