/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";

class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="panel">
                <productList  products={this.props.products}/>
            </div>
        )
    }
}
React.render(<App/>, document.getElementById("app"));
