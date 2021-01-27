import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoute } from '../../common/Utils'
import UserFotter from '../../components/UserFotter'
import UserNavbar from '../../components/UserNavbar'
import { routeUser } from '../../route'

export default class UserTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
            <UserNavbar/>
              <Switch>
                {renderRoute(routeUser)}
              </Switch>
            <UserFotter/>
          </BrowserRouter>
        )
    }
}