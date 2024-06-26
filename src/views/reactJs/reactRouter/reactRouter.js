import React from 'react';
import CodeBlock from '../../../components/codeBlock/codeBlock';
import '../../../styles/topics.css';

function ReactRouter() {
  return (
    <div>
      <div className='titleAndDescription'>
        <h1>React Router</h1>
        <p>React Router is a library for React applications that enables navigation between different components. It allows you to define routes in your application, mapping specific URLs to the corresponding React components that should render when those URLs are matched.</p>
      </div>
      <div className='npmcommand'>
        <h3>npm command</h3>
        <CodeBlock>
          {`npm install react-router-dom`}
        </CodeBlock>
      </div>
      <div className='example'>
        <h2>Example implementation</h2>
        <p>This example shows the most basic implementation of React Router. It includes a Home.js and About.js views that the user will be able to navigate between. The App.js will have the routing implemented.</p>
        <h3>Files</h3>
        <h4>App.js</h4>
        <CodeBlock language="javascript">
          {`import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> // localhost:3000d
        <Route path="/about" element={<About />} /> // localhost:3000/about
      </Routes>
    </Router>
  );
}

export default App;`}
        </CodeBlock>
        <h4>Home.js</h4>
        <CodeBlock language="javascript">
          {`import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;`}
        </CodeBlock>
        <h4>About.js</h4>
        <CodeBlock language="javascript">
          {`import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default About;`}
        </CodeBlock>
      </div>
    </div>
  );
}

export default ReactRouter;