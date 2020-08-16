import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { PageTransition } from "style/global_style";
// Pages
import { Landing, Hello } from "pages";

const Routes = ({ location }: { location: any }) => {
  return (
    <Box>
      <PageTransition>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 200, exit: 200 }}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Landing} />
              <Route path="/hello" component={Hello} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </PageTransition>
    </Box>
  );
};

// Styled components
const Box = styled.div`
  flex-grow: 1;
`;

export default withRouter(Routes);
