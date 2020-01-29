import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class index extends Component {
    render() {
        return (
            <Switch>
                <Redirect from="/" to="/login" exact />
                {this.props.routes.map(item => {
                    const Comp = item.component;
                    return (
                        <Route
                            key={item.name}
                            path={item.path}
                            component={prop => {
                                if (item.children) {
                                    return <Comp routes={item.children} {...prop}></Comp>;
                                } else {
                                    return <Comp {...prop}></Comp>;
                                }
                            }}
                        />
                    );
                })}
            </Switch>
        );
    }
}
