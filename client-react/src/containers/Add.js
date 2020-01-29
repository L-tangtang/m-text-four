import React, { Component } from 'react';

export default class Two extends Component {
    state = {
        username: '',
        password: '',
        indent: '',
    };
    render() {
        const { username, password, indent } = this.state;
        return (
            <div className="two-box">
                <p>
                    <input
                        type="text"
                        placeholder="账号"
                        value={username}
                        onChange={e => this.setState({ username: e.target.value.trim() })}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="密码"
                        value={password}
                        onChange={e => this.setState({ password: e.target.value.trim() })}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="身份"
                        value={indent}
                        onChange={e => this.setState({ indent: e.target.value.trim() })}
                    />
                </p>
                <p>
                    <input type="button" value="添加" onClick={this.headleAdd.bind(this)} />
                </p>
            </div>
        );
    }
    async headleAdd() {
        const { username, password, indent } = this.state;
        let res = await this.http('/add', 'post', { username, password, indent });
        alert(res.data.msg);
        if (res.data.code === 1) {
            this.props.history.push('/home/one');
        }
    }
}
