import React from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import {useTransition, animated} from 'react-spring'
// Views
import { Landing, Hello } from "./pages";

const Routes = (): any => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    config: { mass: 1, tension: 50, friction: 5, clamp: true },
    from: { opacity: 0, transform: 'translate3d(0, 5%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -5%, 0)' },
  });
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route exact path="/" component={Landing} />
        <Route path="/hello" component={Hello} />
      </Switch>
    </animated.div>
  ));
};

export default withRouter(Routes);
