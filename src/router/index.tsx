import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Hello from '../containers/hello';

function AppRouter(){
    return (
        <Router>
          <Route exact path='/index' component={Hello} />
          <Redirect to='index'/>
      </Router>
    )
}
export default AppRouter;