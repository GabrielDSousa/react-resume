import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Resume from "../pages/Resume";

export default () => (
    <Switch>
      <Route path="/" component={Resume} />
    </Switch>
);
