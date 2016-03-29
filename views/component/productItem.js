/**
 * Created by YikaJ on 15/6/17.
 */
'use strict';
export default class productItem extends React.Component{
    render(){
        return (
            <li>
                <h2>{this.props.productName}</h2>
            </li>
        )
    }
}