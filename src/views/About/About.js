import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import background3 from

//var Blur = require('react-blur');

import { Container, Grid } from "@material-ui/core";
// style={{ backgroundImage: `url(${background3})` , width: '100%'}}
export default function About() 
{
  //const classes = useStyles();
  return (
    <div>
    <Container>
      <Grid>
        <GridContainer>
          <GridItem>
            <h1>Gaming House Omega</h1>
            <h4>Somos un grupo de estudiantes apasionados por el gaming. Detectamos que el mercado de 
              cabinas para jugar están desfasadas en comparación con las de otros países.
              Es por esto que decidimos montar una nosotros, con características espectaculares para que puedas pasar un excelente rato jugano.</h4>
            {/* Poner una foto que describa las diferencias entre cada piso, los juegos pensados en cada uno, etc*/}
          </GridItem>
          <GridItem>
            <h2>Misión</h2>
            <h4>Volvernos pioneros en el mercado de las gaming house. Ofrecer hardware actualizado en el tiemmpo para que los 
              gamers asistentes puedan gozar de la mejor experiencia posible. </h4>
          </GridItem>
          <GridItem>
            <h2>Visión</h2>
            <h4>Revolucionar el mercado de las Gaming house en Latinoamérica, expandir nuestra misión a otros países y hacer posible 
              a más gamers disfrutar de un servicio de calidad y una gran experiencia de juego.
            </h4>
          </GridItem>
          <GridItem>
            <p>Ofreceremos más servicios que veamos necesarios para la comunidad gamer!</p>
          </GridItem>
        </GridContainer>
      </Grid>
    </Container>
    </div>
  );
}
