import React from "react";

class DisplayInfor extends React.Component{
    render(){
        
        // Destructuring array/object
        const {listUsers} = this.props;
        console.log(listUsers)
        //props
        return(
            <div>
                {listUsers.map((user) =>{
                    return (
                        <div key ={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            </div>
                    )
                })}
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age is {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor