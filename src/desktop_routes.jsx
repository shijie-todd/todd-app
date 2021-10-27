import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import {DesktopPath} from './scripts/constants/routes';
import App from './App';
import {Home} from './scripts/components/home'
const DesktopRoutes = () => {

  return (
    <Router>
      <React.Suspense fallback={(<></>)}>
        <Switch>
          <Route path={DesktopPath.HOME} component={Home}/>
          <Route path="/" component={App}/>
          <Link to="https://baidu.com" />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default DesktopRoutes;