import { AppStateProvider } from './context';
import { BrowserRouter, } from "react-router-dom";

import containers from './context/state';
import { Header } from './components';
import Routing from './routing';

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
