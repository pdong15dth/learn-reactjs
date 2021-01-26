// import './App.css';
import AboutPage from 'features/AboutPage';
import ContactPage from 'features/ContactPage';
import QuestionPage from 'features/QuestionPage';
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
  const arrRouter = [
    {
      path: '/',
      component: XHomePage,
      isExact: true
    },
    {
      path: '/gioi-thieu',
      component: AboutPage,
      isExact: true
    },
    {
      path: '/on-thi',
      component: QuestionPage,
      isExact: true
    },
    {
      path: '/lien-he',
      component: ContactPage,
      isExact: true
    },
  ]
  const renderRouter = (arrRouter) => {
    return arrRouter.map((item, index) => <Route path={item.path} component={item.component} exact={item.isExact} key={index} />)
  }
  return (
    <div className="App">
      <Switch>
        {renderRouter(arrRouter)}
        <Route component={NotFound} />
      </Switch>
    </div >
  );
}

export default App;
