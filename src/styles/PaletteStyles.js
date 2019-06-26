import sizes from "./sizes";

export default {
  Palette: {
    height: "100vh",
    overflow: "hidden",
    [sizes.down("md")]: {
      overflow: "auto"
    }
  },
  PaletteColors: {
    height: "90vh"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-7px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      cursor: "pointer",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      border: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textDecoration: "none"
    }
  }
};
