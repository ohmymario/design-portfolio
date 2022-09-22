import React from 'react';
import GlobalStyle from './theme/globalStyles';
import ArrowButton from './components/ArrowButton/ArrowButton';
import ConButton from './components/ConButton/ConButton';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
      {/* <h1>Heading Large</h1>
      <h2>Heading Medium</h2>
      <h3>Heading Small</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ArrowButton direction={"left"} />
      <ArrowButton direction={"right"} />
      <ConButton primary >Free Consultation</ConButton>
      <ConButton primary={false} >Free Consultation</ConButton> */}
    </>
  );
}

export default App;
