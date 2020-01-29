import React, { Component } from 'react';

export default class IndAdd extends Component {
    state = {
        indent: '',
    };
    render() {
        return (
            <div>
                <p>
                    <input
                        type="text"
                        placeholder="身份"
                        value={this.state.indent}
                        onChange={e => {
                            this.setState({
                                indent: e.target.value.trim(),
                            });
                        }}
                    />
                </p>
                <p>
                    <button onClick={this.headleAdd.bind(this)}>添加</button>
                </p>
            </div>
        );
    }
    async headleAdd() {
        const { indent } = this.state;
        let res = await this.http('/indentAdd', 'post', { indent });
        if (res.data.code === 1) {
            alert(res.data.msg);
            this.props.history.push('/home/two');
        }
    }
}
