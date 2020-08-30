import React from "react";
import { Jumbotron } from 'reactstrap';
import styled from "styled-components";

const JumboWrapper = styled.article`

`


const jumbotronArea = () => {
  return (
    <JumboWrapper>
      <div>
        <Jumbotron>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </Jumbotron>
      </div>
    </JumboWrapper>
  );
};

export default jumbotronArea;