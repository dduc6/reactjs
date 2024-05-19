// class Component
// function Component

import React from "react";

class MyComponent extends React.Component {
    
    state = {
        name: 'Trung',
        address: 'Hanoi',
        age : 26
    }
    
    handleClick = (event) =>{
        console.log(">> Click me my button");
        
        //merge State => react class
        this.setState({
            name : 'Duc',
            age : Math.floor((Math.random() * 100) +1)
        })

        // this.setState({
        //     age : Math.floor((Math.random() * 100) +1)
        // })
    }

    handleOnMoverOver(event){
        // console.log(event.pageX)
    }

    //JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;