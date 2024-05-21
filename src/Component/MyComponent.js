// class Component
// function Component

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name : "Nguyen", age : '30'},
            {id: 2, name : "Duc", age : '20'},
            {id: 3, name : "Do", age : '19'},
        ]
    }
    
    //JSX
    render(){
        // Dry : don't repeat yourself
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}/>
                
            </div>
        );
    }
}

export default MyComponent;