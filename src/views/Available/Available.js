import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import { Container, Grid } from "@material-ui/core";

export default function Available() 
{
  return (
  <>
  <Container>
    <Grid>
      <GridContainer>
        <GridItem>
          <p>Próximamente implementado</p>
        </GridItem>
      </GridContainer>
    </Grid>
  </Container>
  </>    
  );
}
