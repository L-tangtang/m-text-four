import React, { Component } from 'react';
import MyViews from '../router/index';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <div className="home-left">
                    <NavLink to="/home/one">用户管理</NavLink>
                    <NavLink to="/home/two">角色管理</NavLink>
                </div>
                <div className="home-right">
                    <MyViews routes={this.props.routes} />
                </div>
            </div>
        );
    }
}
