import { Route, Routes } from 'react-router-dom';
import { Counter } from './containers';
import Logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';

import { ReactElement } from 'react';
const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/" element={<Counter />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;
