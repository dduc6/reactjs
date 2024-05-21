// class Component
// function Component

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    
    //JSX
    render(){
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name= 'Do' age ='19'/>
                <hr />
                <DisplayInfor name='Nguyen' age='18' />
            </div>
        );
    }
}

export default MyComponent;