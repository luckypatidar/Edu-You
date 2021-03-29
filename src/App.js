import React, { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Home,
  About,
  Newthing,
  Contacts,
  SignIn
} from "./components/pages";
import { Header, Sidebar, Footer } from "./components/layouts";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";
import Dashboard from "./components/widgets/Division/Main.jsx";
import Dummy from './components/widgets/Subject/Main.jsx';
import Chapter from './components/widgets/Chapter/Main.jsx';
import Topic from './components/widgets/Topic/Main.jsx';

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
      <Fragment>
        <Sidebar data={state.data.menu} />
        {/* <Header data={state.data.menu} /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/new" exact component={Newthing} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/class/:id" component={Dummy} />
          <Route path="/subject/:id" component={Chapter} />
          <Route path="/topic/:id" component={Topic} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
