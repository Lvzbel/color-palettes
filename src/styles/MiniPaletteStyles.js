export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    padding: "0.5rem",
    borderRadius: "5px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    position: "relative",
    marginBottom: "-7px"
  },
  deleteIcon: {
    boxSizing: "content-box",
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    padding: "10px",
    right: "0px",
    top: "0px",
    zIndex: 10,
    opacity: 0,
    transition: "all 0.3s ease-in-out"
  }
};
