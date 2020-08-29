import React from "react";
import {Card, CardBody} from "reactstrap"

const DayDetails = ({appHigh, appLow, day, description, high, humidity, icon, low, precip, temp}) => {
  return (
    <Card>
      <CardBody>
        <h2>Weather Details for {day}</h2>
        <h2>{temp}°</h2>
          <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description}/>
          <p>High: {high}°</p>
          <p>Low: {low}°</p>
          <p>{precip}%</p>
      </CardBody>
    </Card>
  )
}

export default DayDetails;