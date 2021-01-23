import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import NotFound from '../../../components/NotFound';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;