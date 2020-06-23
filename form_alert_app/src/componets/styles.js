import { makeStyles } from "@material-ui/core/styles";
import {
  Carbon1,
  Carbon2,
  Carbon3,
  Lluvia,
  LluviaHover,
  Coco2
} from "../constants";

export const styles = makeStyles({
  container: {
    margin: "2px auto",
    width: "40%",
    height: "88vh",
    overflow: "hidden",
    overflowX: "hidden",
    alignItems: "center",
    "&:hover": {
      overflowY: "auto"
    }
  },
  title: {
    fontSize: ".8em",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "normal",
    textAlign: "left",
    color: Carbon1,
    display: "flex",
    "@media (min-width:1400px)": {
      // eslint-disable-line no-useless-computed-key
      fontSize: "1em"
    }
  },
  textField: {
    width: "90%"
  },
  textFieldToHundred: {
    width: "99%"
  },
  textFieldSmall: {
    width: "48%"
  },
  formControlSmall: {
    width: "48%",
    fontSize: "10px"
  },
  formControl: {
    width: "98%",
    margin: "3vh 0 0 1vh",
    fontSize: "10px"
  },
  buttonCancelarStyles: {
    border: "none",
    margin: "0 0 0 0",
    "&:hover": {
      backgroundColor: "transparent"
    },
    padding: "5px 10px"
  },
  buttonTextCancelar: {
    fontSize: "1em",
    color: Carbon2,
    textTransform: "initial"
  },
  buttonTextGuardar: {
    fontSize: "1em",
    color: Coco2,
    textTransform: "initial"
  },
  buttonGuardarStyles: {
    backgroundColor: Lluvia,
    borderRadius: "8px",
    margin: "0 0 0 3vh",
    "&:hover": {
      backgroundColor: LluviaHover
    },
    padding: "5px 10px"
  },
  buttonsRow: {
    margin: "2vh 0vw 2vh 0vw",
    padding: "1em 0em 1em 0em",
    backgroundColor: "#ececec", 
    minHeight: "7vh",
    textAlign: "center"
  },
  inputLabel: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "normal",
    textAlign: "left",
    color: Carbon2
  },
  sliderInputLabel: {
    fontFamily: "Roboto",
    fontSize: "11px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.50",
    letterSpacing: "normal",
    textAlign: "left",
    color: Carbon2
  },
  slider: {
    width: "84%",
    marginLeft: "22px"
  },
  inputPlaceHolder: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.19",
    letterSpacing: "normal",
    textAlign: "left",
    color: Carbon3
  }
});
