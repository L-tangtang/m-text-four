import React, { Component } from 'react';

export default class One extends Component {
    state = {
        list: [],
        isShow: false,
        username: '',
        id: 0,
        password: '',
        indent: '',
    };
    render() {
        const { username, password, isShow, indent, list } = this.state;
        return (
            <div className="one-box">
                <ul>
                    <li
                        style={{ paddingLeft: '40%', border: '1px solid' }}
                        onClick={() => {
                            this.props.history.push('/home/add');
                        }}
                    >
                        添加
                    </li>
                    <li>
                        <span>姓名</span>
                        <span>密码</span>
                        <span>角色</span>
                        <span>状态</span>
                    </li>
                    {list.map(item => {
                        return (
                            <li key={item.id}>
                                <span>{item.username}</span>
                                <span>{item.password}</span>
                                <span>{item.indent}</span>
                                <span>
                                    <b onClick={this.headleEdit.bind(this, item)}>编辑</b>
                                    <b onClick={this.headleDel.bind(this, item.id)}>删除</b>
                                </span>
                            </li>
                        );
                    })}
                </ul>
                {isShow ? (
                    <div className="mask-box">
                        <div>
                            <b
                                style={{ color: '#fff', fontSize: '18px' }}
                                onClick={() => this.setState({ isShow: false })}
                            >
                                X
                            </b>
                            <ul>
                                <li>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={e =>
                                            this.setState({
                                                username: e.target.value.trim(),
                                            })
                                        }
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={e =>
                                            this.setState({
                                                password: e.target.value.trim(),
                                            })
                                        }
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        value={indent}
                                        onChange={e =>
                                            this.setState({
                                                indent: e.target.value.trim(),
                                            })
                                        }
                                    />
                                </li>
                                <li onClick={this.headlePut.bind(this)} style={{ color: 'green' }}>
                                    确认
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
    async componentDidMount() {
        let res = await this.http('/getlist');
        this.setState({
            list: res.data.result,
        });
    }
    async headleDel(id) {
        let res = await this.http('/del', 'post', { id });
        alert(res.data.msg);
        if (res.data.code === 1) {
            let res = await this.http('/getlist');
            this.setState({
                list: res.data.result,
            });
        }
    }
    async headleEdit(item) {
        this.setState({
            isShow: true,
            id: item.id,
            username: item.username,
            password: item.password,
            indent: item.indent,
        });
    }
    async headlePut() {
        this.setState({
            isShow: false,
        });
        const { username, password, indent, id } = this.state;
        let res = await this.http('/edit', 'put', { username, password, indent, id });
        alert(res.data.msg);
        if (res.data.code === 1) {
            let res = await this.http('/getlist');
            this.setState({
                list: res.data.result,
            });
        }
    }
}
