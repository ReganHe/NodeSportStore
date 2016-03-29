/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";

export default class productList extends React.Component{
    // 遍历显示任务，转发props
    render(){
        return (
            <ul className="todo-list">
            {this.props.products.map((product, index) => {
                return <productItem key={index} {...product} index={index} {...this.props}/>
    })}
    </ul>
    )
    }
}