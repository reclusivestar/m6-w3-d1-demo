import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import VertexSphere from './vertexSphere/src/Scene'; // Ensure the entry file for this app is named 'App.js'
import CollapsibleTree from './collapsibleTree/src/Tree';
import AnimatedBarChart from './animatedBarChart/src/BarChart';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/vertex-sphere">Vertex Sphere</Link></li>
            <li><Link to="/collapsible-tree">Collapsible Tree</Link></li>
            <li><Link to="/animated-bar-chart">Animated Bar Chart</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/vertex-sphere" component={VertexSphere} />
          <Route path="/collapsible-tree" component={CollapsibleTree} />
          <Route path="/animated-bar-chart" component={AnimatedBarChart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
