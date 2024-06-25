import React from 'react';
import CodeBlock from '../../../components/codeBlock/codeBlock';

function ReactRouter() {

  return (
    <div>
      <h1>React Router</h1>

      <CodeBlock>
        {`npm install react-router-dom`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import About from './views/about/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;`}
      </CodeBlock>
    </div>
  );
}

export default ReactRouter;