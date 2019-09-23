import React from 'react';
import { Component } from 'react';

class TodoList extends Component<IProps>{
    state = {
        name: ''
    }
    render(){
        return (
            <div>
                {this.props.list}
                {this.props.name}
            </div>
        )
    }
}
type IProps = {
    list?: any[],
    name?: string
}
export default TodoList;