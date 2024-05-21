import React from "react";


class UserInfor extends React.Component{
    state = {
        name: 'Trung',
        address: 'Hanoi',
        age : 26
    }
    


    handleOnChangeInput = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) =>{
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input 
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age:</label>
                    <input 
                    value={this.state.age}
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;