// import './App.css';
import AboutPage from 'features/AboutPage';
import ContactPage from 'features/ContactPage';
import XHomePage from 'features/XHomePage';
import { useEffect } from 'react';
import {
  Route, Switch
} from "react-router-dom";
import productApi from './API/productApi';
import NotFound from './components/NotFound';
import './index.css';

const App = () => {

  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params)
      console.log(productList)
    }
    fetchProduct()
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={XHomePage} exact />
        <Route path="/trang-chu.html" component={XHomePage} exact />
        <Route path="/gioi-thieu.html" component={AboutPage} exact />
        <Route path="/lien-he.html" component={ContactPage} exact />
        {/* <Route path="/todos" component={TodoFeature} exact />
        <Route path="/albums" component={AlbumFeature} exact /> */}
        <Route component={NotFound} />
      </Switch>
    </div >
  );
}

export default App;
