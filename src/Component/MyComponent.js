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
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // listUsersNew.push(userObj);

        // this.setState({
        //     listUsers:listUsersNew
        // })

        this.setState({
            listUsers: [userObj,...this.state.listUsers]
        })
    }
    
    //JSX
    render(){
        // Dry : don't repeat yourself
        return (
        <div>
            <div className="a">
                <AddUserinfor 
                handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor 
                listUsers={this.state.listUsers}
                />
            </div>
            <div className="b">

            </div>
        </div>    
        );
    }
}

export default MyComponent;