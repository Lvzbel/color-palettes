import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./utils/colorHelper";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette List Goes Here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Single Palette List Goes Here</h1>}
      />
    </Switch>
  );
}

export default App;

// <div className="App">
//   <Palette palette={generatePalette(seedColors[4])} />
// </div>
