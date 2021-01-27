import PageNotFound from "../../container/PageNotFound";

export class RouteModel {
    path;
    component;
    exact;
    constructor(_path = "", _component = PageNotFound, _exact = false) {
        this.path = _path;
        this.component = _component;
        this.exact = _exact;
    }
}
