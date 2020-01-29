import React, { Component } from 'react';

export default class One extends Component {
    state = {
        list: [],
        isShow: false,
        id: 0,
        indent: '',
    };
    render() {
        const { indent, list, isShow } = this.state;
        return (
            <div className="one-box">
                <ul>
                    <li
                        style={{ paddingLeft: '40%', border: '1px solid' }}
                        onClick={() => {
                            this.props.history.push('/home/IndentAdd');
                        }}
                    >
                        添加
                    </li>
                    <li>
                        <span>id</span>
                        <span>角色</span>
                        <span>状态</span>
                    </li>
                    {list.map(item => {
                        return (
                            <li key={item.id}>
                                <span>{item.id}</span>
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
        let res = await this.http('/getInd');
        this.setState({
            list: res.data.result,
        });
    }
    async headleDel(id) {
        let res = await this.http('/delInd', 'post', { id });
        alert(res.data.msg);
        if (res.data.code === 1) {
            let res = await this.http('/getInd');
            this.setState({
                list: res.data.result,
            });
        }
    }
    async headleEdit(item) {
        this.setState({
            isShow: true,
            id: item.id,
            indent: item.indent,
        });
    }
    async headlePut() {
        this.setState({
            isShow: false,
        });
        const { indent, id } = this.state;
        let res = await this.http('/editInd', 'put', { indent, id });
        alert(res.data.msg);
        if (res.data.code === 1) {
            let res = await this.http('/getInd');
            this.setState({
                list: res.data.result,
            });
        }
    }
}
