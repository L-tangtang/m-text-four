import React, { Component } from 'react';
import Img from '../asstes//image/3.jpg';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
    };
    render() {
        return (
            <div className="box-login">
                <div className="left">
                    <img src={Img} alt="" />
                </div>
                <div className="right">
                    <div>
                        <p>权限管理系统</p>
                        <p>
                            <input
                                type="text"
                                placeholder="账号"
                                value={this.state.username}
                                onChange={e => {
                                    this.setState({
                                        username: e.target.value.trim(),
                                    });
                                }}
                            />
                        </p>
                        <p>
                            <input
                                type="password"
                                placeholder="密码"
                                value={this.state.password}
                                onChange={e => {
                                    this.setState({
                                        password: e.target.value.trim(),
                                    });
                                }}
                            />
                        </p>
                        <p>
                            <input type="button" value="登陆" onClick={this.headleLogin} />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    headleLogin = async () => {
        const { username, password } = this.state;
        let res = await this.http('/login', 'post', { username, password });
        console.log(res);
        if (res.data.code === 1) {
            alert(res.data.msg);
            this.props.history.push('/home');
        }
    };
}
