import React from 'react';
import Helloworld from './hello-world';
import AboutMe from './About';

class App extends React.Component {
  render() {
   return <>
   <Helloworld />
   <AboutMe />
  </>
  }
}

export default App;
