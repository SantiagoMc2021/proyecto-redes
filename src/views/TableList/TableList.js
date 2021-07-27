import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Sucesos principales</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Piso", "Máquina", "Estado", "Descripción"]}
              tableData={[
                ["1", "M7", "Sin respuesta", "No se recibió respuesta después de varios intentos de ping"],
                ["1", "M13", "En uso", "Intento de inicio de acceso a privilegios de administrador (denegado-5)"],
                ["2", "M3", "En uso", 'Error general: "Cannoto modify file, File is in use by another process'],
                ["3", "M1", "Standby (Apagado programado)", "Parche de seguridad de Microsoft (KBXXXXXX) programado para instalar"],
                ["2", "M5", "Standby", "Esperando señal de wakeup"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Máquinas
            </h4>
            <p className={classes.cardCategoryWhite}>
              Listado completo 
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Estado", "ETA", "Recursos", "NO se que poner"]}
              tableData={[
                ["1.1", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Oud-Turnhout"],
                ["1.2", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Sinaai-Waas"],
                ["1.3", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Baileux"],
                ["1.4", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Oud-Turnhout"],
                ["1.5", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Sinaai-Waas"],
                ["1.6", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Baileux"],
                ["1.7", "Desconocido", "~", "~", "Baileux"],

                ["2.1", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Oud-Turnhout"],
                ["2.2", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Sinaai-Waas"],
                ["2.3", "En uso", "3H 12M 3s", "CPU: 13.3% RAM: 74% SSD: 17%", "Baileux"],
                ["2.4", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Oud-Turnhout"],
                ["2.5", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Sinaai-Waas"],
                ["2.6", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Baileux"],
                ["2.7", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Baileux"],

                ["3.1", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Oud-Turnhout"],
                ["3.2", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Sinaai-Waas"],
                ["3.3", "En uso", "3H 12M 3s", "CPU: 13.3%  RAM: 74% SSD: 17%", "Baileux"],
                ["3.4", "Libre", "~", "CPU: 13.3%  RAM: 74% SSD: 17%", "Oud-Turnhout"],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
