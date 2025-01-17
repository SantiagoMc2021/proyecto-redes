/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

var tiempo = new Date();


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

export default function Notifications() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = (place) => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notificaciones</h4>
        <p className={classes.cardCategoryWhite}>
          Lista actualizada a {" "}
          <a
            target="_blank"
            href="https://material-ui-next.com/?ref=creativetime"
          >
            {tiempo.toLocaleString("es-LA")}
          </a>{" "}
          <a
            target="_blank"
            //href="https://www.creative-tim.com/?ref=mdr-notifications-page"
          >
          </a>
          . Si encuentra un error, lláme al{" "}
          <a href="#pablo" target="_blank">
            (+51) 987-654-321
          </a>
          .
        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Notificaciones</h5>
            <br />
            <SnackbarContent
              message={
                'Pedido N°1713-4 "AUO-34544 Monitor x5" expectado a arrivar en 37 horas [link_rastreo]'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'Máquina(s) 1.4 1.7 y 1.10 actualizaron correctamente a Windows KBXXXXXXXL'
              }
              close
              color="success"
            />
            <SnackbarContent
              message={
                'Cloudfare reporta tráfico inusualmente alto'
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                'Robistar presenta problemas en zona XXX-YYY-ZZZ-1111'
              }
              close
              color="danger"
            />
            <SnackbarContent
              message={
                'Batería al 79%'
              }
              close
              color="primary"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h5>To-do</h5>
            <br />
            <SnackbarContent message={"Revisar grupos de segurida de EC2"} />
            <SnackbarContent
              message={"Programar punto de restauración en PC madre"}
            />
            <SnackbarContent
              message={"Revisar incidencias en registros del Piso 1"}
              icon={AddAlert}
            />
            <SnackbarContent
              message={"Realizar escaneo en máquina 3.1"}
              close
              icon={AddAlert}
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer xs = {12} sm={12} md = {6}>
          <GridItem>
            <h5>
              Ai dio mioh{}

            </h5>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
