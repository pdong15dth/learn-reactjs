import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { renderRoute } from './common/Utils';
import PageNotFound from './container/PageNotFound';
import { mainRoute } from './route';
import SpinnerComponent from './components/Spinner'

function App() {
  return (
    <BrowserRouter>
    <SpinnerComponent/>
      <Switch>
        {renderRoute(mainRoute)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
