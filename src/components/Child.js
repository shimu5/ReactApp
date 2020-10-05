import React from 'react';

export default class Child extends React.Component{
    render(){
        return (<div>
            <h3>{this.props.data.unit}</h3>
            <button onClick={()=>this.props.data.ChangeUnit("child Unit")}>
                    Change unit 
            </button>
        </div>);
    }
}