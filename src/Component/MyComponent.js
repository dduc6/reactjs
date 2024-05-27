// class Component
// function Component

import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserinfor from "./AddUserinfor";


// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             {id: 1, name : "Nguyen", age : '16'},
//             {id: 2, name : "Duc", age : '68'},
//             {id: 3, name : "Do", age : '19'},
//         ]
//     }


//     handleAddNewUser = (userObj) =>{
//         // let listUsersNew = this.state.listUsers;
//         // listUsersNew.unshift(userObj);
//         // listUsersNew.push(userObj);

//         // this.setState({
//         //     listUsers:listUsersNew
//         // })

//         this.setState({
//             listUsers: [userObj,...this.state.listUsers]
//             // listUsers: [...this.state.listUsers,userObj]
//         })
//     }

//     handleDeleteUser = (userId) =>{
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
    
//     //JSX
//     render(){
//         // Dry : don't repeat yourself
//         return (
//         <>
//             <div className="a">
//                 <AddUserinfor 
//                 handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br></br>
//                 <DisplayInfor 
//                 listUsers={this.state.listUsers}
//                 handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//             <div className="b">

//             </div>
//         </>   
//         );
//     }
// }

const MyComponent = (props) =>{

    const [listUser, setListUsers ] = useState(
        [
            {id: 1, name : "Nguyen", age : '16'},
            {id: 2, name : "Duc", age : '68'},
            {id: 3, name : "Do", age : '19'},
        ]
    )



    const  handleAddNewUser = (userObj) =>{
        setListUsers([userObj,...listUser])
        // this.setState({
        //     listUsers: [userObj,...this.state.listUsers]
        //     // listUsers: [...this.state.listUsers,userObj]
        // })
    }


    const handleDeleteUser = (userId) =>{
        let listUsersClone = listUser;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone);
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
                <br />
          <div className="a">
            <AddUserinfor 
                   handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <DisplayInfor 
                listUsers={listUser}
                handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>  
    )
} 
export default MyComponent;