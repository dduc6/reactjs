// class Component
// function Component

import React from "react";
import UserInfor from "./Userinfor";


class MyComponent extends React.Component {
    
    //JSX
    render(){
        return (
            <div>
                <UserInfor></UserInfor>
            </div>
        );
    }
}

export default MyComponent;