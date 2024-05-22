// class Component
// function Component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserinfor from "./AddUserinfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name : "Nguyen", age : '16'},
            {id: 2, name : "Duc", age : '68'},
            {id: 3, name : "Do", age : '19'},
        ]
    }

    handleAddNewUser = (userObj) =>{
        console.log('check date forn', userObj)
        this.setState({
            listUsers: [userObj,...this.state.listUsers]
        })
    }
    
    //JSX
    render(){
        // Dry : don't repeat yourself
        return (
            <div>
                <AddUserinfor 
                handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor 
                listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;