import React from "react";
class Car extends React.Component{

    render() {
        return (<h1>Car type is {this.props.car_type} , color is  {this.props.color} </h1>)
    }

}

export default Car;