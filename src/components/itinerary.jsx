import React, { Component } from "react";

import { Card, CardTitle } from "react-materialize";

const styles = {
  card: {
    //padding: '0% 2%',
    width: '36%',
    left: '10%',
    display: 'block',
    float: 'left',
    marginLeft: '2%'
  }
}
class Itinerary extends Component {
  constructor(props) {
    super(props);
  }

  goToItinerary = (id) => {
    console.log('e nois negada', id)

  }

  render() {
    return (
      <Card
      onClick={() => this.goToItinerary(this.props.itinerary.id)}
        style={styles.card}
        className="small"
        header={
          <CardTitle image="https://images.wallpaperscraft.com/image/stars_space_sky_glitter_116409_1920x1080.jpg">
            {this.props.itinerary.name}
          </CardTitle>
        }
      >
        {this.props.itinerary.description}
      </Card>
    );
  }
}

export default Itinerary;
