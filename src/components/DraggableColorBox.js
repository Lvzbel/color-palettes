import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import styles from "../styles/DraggableColorBoxStyles";

class DraggableColorBox extends Component {
  render() {
    const { color, name, classes, handleClick } = this.props;
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </div>
      </div>
    );
  }
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
