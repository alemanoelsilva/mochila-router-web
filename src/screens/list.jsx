import React, { Component } from "react";

import { Row, CardTitle } from "react-materialize";

import Itinerary from "../components/itinerary";

class ListItinerary extends Component {
  constructor() {
    super();

    this.state = {
      itineraries: [
        {
          id: 1,
          name: "itinerary 1",
          description:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. 1"
        },
        {
          id: 2,
          name: "itinerary 2",
          description:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. 2"
        },
        {
          id: 3,
          name: "itinerary 3",
          description:
            "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. 3"
        }
      ]
    };
  }

  render() {
    return (
      <Row s={12}>
        {this.state.itineraries.map(el => (
          <Itinerary key={el.id} itinerary={el} />
        ))}
      </Row>
    );
  }
}

export default ListItinerary;
