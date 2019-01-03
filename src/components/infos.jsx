import React, { Component } from "react";

import {
  Col,
  Card,
  CardTitle,
  Row,
  Input,
  Chip,
  Button,
  Tag
} from "react-materialize";

import Modale from "./modal";

const styles = {
  col: {
    shadow: "#545760",
    padding: "0 10%"
    //weidht: "90%"
  },
  profilePicture: {
    height: 100,
    width: 100,
    //position: "absolute",
    //paddingTop: "20%",
    left: "1%"
  },
  buttons: {
    do: {
      backgroundColor: "#545775",
      color: "#fff"
    },
    dimiss: {
      backgroundColor: "#FFF",
      color: "#545775"
    }
  }
};

const mock = {
  continent: [
    {
      id: 1,
      name: "Eupore",
      country: [
        {
          id: 1,
          name: "Ireland",
          city: [
            {
              id: 1,
              name: "Dublin",
              attraction: ["Spire", "Temple Bar", "Phoneix"]
            },
            {
              id: 2,
              name: "Cork",
              attraction: ["Cork 1", "Cork 2"]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "North America",
      country: [
        {
          id: 1,
          name: "Canada",
          city: [
            {
              id: 1,
              name: "Toronto",
              attraction: ["CN Tower", "Casa Loma", "Distillery District"]
            },
            {
              id: 2,
              name: "Montreal",
              attraction: ["Notre Dame", "Monte Royal"]
            }
          ]
        }
      ]
    }
  ]
};

class Infos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      disableCountrySelect: true,
      disableCitySelect: true,
      disableAttractionSelect: true,

      disableAddButton: true,

      continentSelected: 0,
      countrySelected: 0,
      citySelected: 0,
      attractionSelected: 0
    };
  }

  addPlaces = async () => {
    console.log("add places", this.state.places);
    const {
      continentSelected,
      countrySelected,
      citySelected,
      attractionSelected
    } = this.state;

    await this.setState({
      places: [
        ...this.state.places,
        {
          continent: mock.continent[continentSelected].name,
          country:
            mock.continent[continentSelected].country[countrySelected].name,
          city:
            mock.continent[continentSelected].country[countrySelected].city[
              citySelected
            ].name,
          attraction:
            mock.continent[continentSelected].country[countrySelected].city[
              citySelected
            ].attraction[attractionSelected]
        }
      ],
      continentSelected: 0,
      countrySelected: 0,
      citySelected: 0,
      attractionSelected: 0,
      disableCountrySelect: true,
      disableCitySelect: true,
      disableAttractionSelect: true,
      disableAddButton: true
    });

    console.log("added places", this.state.places);
  };

  mountCardTitle = () => (
    <CardTitle
      style={styles.profilePicture}
      image="https://images.wallpaperscraft.com/image/stars_space_sky_glitter_116409_1920x1080.jpg"
    />
  );

  changeContinentSelected = e => {
    console.log("on change continent", e.target.name, e.target.value);
    this.setState({
      continentSelected: e.target.value - 1,
      disableCountrySelect: false
    });
  };

  changeCountrySelected = e => {
    console.log("on change country", e.target.name, e.target.value);
    this.setState({
      countrySelected: e.target.value - 1,
      disableCitySelect: false
    });
  };

  changeCitySelected = e => {
    console.log("on change city", e.target.name, e.target.value);
    this.setState({
      citySelected: e.target.value - 1,
      disableAttractionSelect: false
    });
  };

  changeAttractionSelected = e => {
    console.log("on change attraction", e.target.name, e.target.value);
    this.setState({
      attractionSelected: e.target.value,
      disableAddButton: false
    });
  };

  mountBody = () => (
    <div>
      <Row>
        <Input
          name="isPrivate"
          type="checkbox"
          value="#545775"
          label="Is it private?"
        />
      </Row>
      <Row>
        <Input
          placeholder="Write name your Itinerary"
          s={6}
          label="Name of Itinerary"
        />
        <Col s={2} />
        <Input
          s={4}
          validate
          type="number"
          label="How many days will you travel?"
        />
      </Row>
      <Row>
        <Input
          s={12}
          placeholder="Write description your Itinerary"
          type="textarea"
          label="Description of Itinerary"
        />
      </Row>

      <Row>
        <Input
          s={6}
          type="select"
          label="Continent"
          onChange={this.changeContinentSelected}
        >
          {mock.continent.map(el => (
            <option value={el.id}>{el.name}</option>
          ))}

          {/* <option value="Europe">Europe</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option> */}
        </Input>

        <Input
          disabled={this.state.disableCountrySelect}
          s={6}
          type="select"
          label="Country"
          onChange={this.changeCountrySelected}
        >
          {mock.continent[this.state.continentSelected].country.map(el => (
            <option value={el.id}>{el.name}</option>
          ))}

          {/* <option value="Ireland">Ireland</option>
          <option value="Portugal">Portugal</option>
          <option value="Spain">Spain</option> */}
        </Input>
      </Row>

      <Row>
        <Input
          disabled={this.state.disableCitySelect}
          s={6}
          type="select"
          label="City"
          onChange={this.changeCitySelected}
        >
          {mock.continent[this.state.continentSelected].country[
            this.state.countrySelected
          ].city.map(el => (
            <option value={el.id}>{el.name}</option>
          ))}

          {/* <option value="Dublin">Dublin</option>
          <option value="Cork">Cork</option>
          <option value="Limerick">Limerick</option> */}
        </Input>

        <Input
          disabled={this.state.disableAttractionSelect}
          s={6}
          type="select"
          label="Attraction"
          onChange={this.changeAttractionSelected}
        >
          {mock.continent[this.state.continentSelected].country[
            this.state.countrySelected
          ].city[this.state.citySelected].attraction.map((el, index) => (
            <option value={index}>{el}</option>
          ))}

          {/* <option value="Spire">Spire</option>
          <option value="Temple Bar">Temple Bar</option>
          <option value="Phoenix">Phoenix</option> */}
        </Input>
      </Row>

      <Button
        onClick={() => this.addPlaces()}
        style={styles.buttons.dimiss}
        disabled={this.state.disableAddButton}
        waves="light"
      >
        Add
      </Button>

      {this.state.places ? (
        <Row>
          {this.state.places.map(place => (
            <p>{place.attraction}</p>
          ))}
        </Row>
      ) : null}
    </div>
  );

  putUpActions = () => (
    <div>
      <Button style={styles.buttons.dimiss} flat modal="close" waves="light">
        Dimiss
      </Button>
      <Button modal="close" waves="light" style={styles.buttons.do}>
        Create
      </Button>
    </div>
  );

  render() {
    return (
      <Col style={styles.col}>
        <Card
        //className='blue-grey darken-1'
        //textClassName='white-text'
        //title="Card title"
        >
          <p>User name</p>
          <span>social medias</span>
          <p>Numbers of Itineraries: 3</p>
          <p>Next Travel: Dublin </p>
          <p>Last Travel: Japan My</p>
          <br />
          <p>points: XXX</p>
          <Row>
            <Modale
              title="New Itinerary"
              body={this.mountBody()}
              floating="true"
              large="true"
              label="+"
              actions={this.putUpActions()}
            />
          </Row>
        </Card>
      </Col>
    );
  }
}

export default Infos;
