import { Route } from "react-router-dom";

export const renderRoute = (route) => {
    if (route && route.length > 0) {
        return route.map((item, index) => {
            return (
                <Route
                    key={index}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                />
            );
        });
    }
    <></>
};