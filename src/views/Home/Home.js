import React from "react";
 //import BackgroundVideo from './video.mp4';
// import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Card from "components/Card/Card.js";// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";

// import BackgroundVideo from "./BackgroundVideo";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import stail from './pos.css'
import { Container, Grid } from "@material-ui/core";
//const useStyles = makeStyles(styles);

export default function Home() 
{
  // const classes = useStyles();
  return (
    <>
    <Container>
      <Grid>
        <GridContainer>
          <GridItem>
            <h1>The Gaming Houses</h1>
            <h4>
              Te ofrecemos la mejor experiencia para el gaming
            </h4>
            <h4>
              Nuestras máquinas son tip-top gracias a sus excelentes prestaciones
            </h4>
            <h4>
              Podrás interactura con nuestra comunidad y te sentirás recontra cómod@!
            </h4>
            <br />
            <p>
              Contamos con 3 niveles, con más de (XX - 1) máquinas para garantizarte una adecuada para tí!!
            </p>
            {/* Poner una foto que describa las diferencias entre cada piso, los juegos pensados en cada uno, etc*/}
          </GridItem>
        </GridContainer>
      </Grid>
    </Container>
    </>
  );
}
