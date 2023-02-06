import { AppStateProvider } from './context';
import { BrowserRouter, } from "react-router-dom";

import containers from './state';

import Routing from './Routing';
import { Header } from './components/Header';

function App() {
  return (
    <AppStateProvider containers={containers}>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
