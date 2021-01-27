import { RouteModel } from "../models/route";
import HomeUserpage from '../container/UserTemplate/HomePage'
import UserTemplate from "../container/UserTemplate";
import AdminTemplate from "../container/AdminTemplate";

export const routeUser = [
   new RouteModel('/', HomeUserpage, true),
];

export const routeAdmin = [

];

export const mainRoute = [
   new RouteModel('/', UserTemplate, true),
   new RouteModel('/admin', AdminTemplate, false),
]

