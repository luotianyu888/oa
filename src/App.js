
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from '../src/model/router.js';
import './assets/css/index.css';
import './assets/css/common/common.css'
import 'antd/dist/antd.css';
class App extends Component {

  render() {
    return (
        <Router>
          <div className="secend-box">           
          {/* {
              routes.map((route,key)=>{

                  if(route.exact){

                    return <Route key={key} exact path={route.path} component={route.component}/>
                  }else{
                    return <Route  key={key}  path={route.path} component={route.component} />
                  }
              })
            }             */}
            {
              routes.map((route,key)=>{

                  if(route.exact){

                    return <Route key={key} exact path={route.path}                     
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}

                    />
                  }else{
                    return <Route  key={key}  path={route.path} 
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                    />

                  }
              })
            }
          
          </div>
      </Router>
    );
  }
}

export default App;

