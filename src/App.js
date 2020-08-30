import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import moment from "moment";
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar"
import DayCard from "./components/DayCard"
import DayDetails from "./components/DayDetails"
import Jumbotron from "./components/Jumbotron"
import API from "./utils/API"
import jumbotronArea from "./components/Jumbotron";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    location: "",
    days: [],
    selectedDay: null,
    searchTerm: ""
  });

  const {location, days, selectedDay, searchTerm} = weatherInfo;

  const weatherSearch = (location) => {
    API.getWeather(location)
      .then(({data}) => setWeatherInfo({
        location: data.city_name + ", " + data.state_code,
        days: data.data,
        selectedDay: null,
        searchTerm: ""
      }))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    weatherSearch("Denver,CO")
  }, []);

  const handleInputChange = (e) => {
    setWeatherInfo({...weatherInfo, searchTerm: e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    weatherSearch(searchTerm)
  }

  return (
    <Container>
      <Jumbotron/>
      <Row>
        <Col md={7}><h1>Weather for {location}</h1></Col>
        <Col md={5}>
          <SearchBar 
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          /></Col>
      </Row>
      <Row>
        {days.map(day => (
          <Col key={day.valid_date}>
            <span><DayCard 
              icon={day.weather.icon}
              description={day.weather.description}
              high={day.high_temp}
              low={day.low_temp}
              temp={day.temp}
              precip={day.pop}
              day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
              setSelectedDay={() => setWeatherInfo({...weatherInfo, selectedDay: day})}
              isActive={day === selectedDay}
            />
            </span>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
        {selectedDay ? (
          <DayDetails
          day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd")}
          description={selectedDay.weather.description}
          icon={selectedDay.weather.icon}
          high={selectedDay.high_temp}
          low={selectedDay.low_temp}
          temp={selectedDay.temp}
          precip={selectedDay.pop}
          appHigh={selectedDay.app_max_temp}
          appLow={selectedDay.app_min_temp}
          />
        ): (
          <h3>Click on a day to get day details!</h3>
        )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
