import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
// Views
import { Landing, Hello } from "./pages";

const Routes = (): any => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    config: { mass: 2, tension: 42, friction: 4, clamp: true },
    from: { transform: "translate3d(0, 2%, 0)", opacity: 0 },
    enter: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    leave: { transform: "translate3d(0, -3%, 0)", opacity: 0 },
  });
  return transitions.map(({ item: location, props, key }) => (
    <Slide key={key} style={props}>
      <Switch location={location}>
        <Route exact path="/" component={Landing} />
        <Route path="/hello" component={Hello} />
      </Switch>
    </Slide>
  ));
};

// Styled components
const Slide = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default withRouter(Routes);
