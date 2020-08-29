import React from "react";
import {Card, CardHeader, CardBody} from "reactstrap";
import styled from "styled-components";

const gray = "rgba(0,0,0,.125)";
const teal = "teal";
const border = `2px solid ${gray}`
const tealBorder= `2px solid ${teal}`

const DayWrapper = styled.article`
  text-align: center;
  :hover {
    cursor: pointer;
    .card {
      border: ${tealBorder}
    }
  }
  .card{
    color: navy;
  }
  img{
    width: 85px
  }
  .card-body{
    padding: 20px 10px;
  }
  .card-header{
    background: ${props => props.isActive ? teal : gray}
    border-bottom: ${border}
  }
  .card{
    border: ${props => props.isActive ? tealBorder : border}
  }
`

const DayCard = ({day, temp, icon, description, high, low, precip, setSelectedDay, isActive}) => {
  return (
    <DayWrapper onClick={setSelectedDay} isActive={isActive}>
      <Card>
        <CardHeader>{day}</CardHeader>
        <CardBody>
          <h2>{temp}°</h2>
          <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} alt={description}/>
          <p>High: {high}°</p>
          <p>Low: {low}°</p>
          <p>{precip}%</p>
        </CardBody>
      </Card>
    </DayWrapper>
  )
}

export default DayCard;