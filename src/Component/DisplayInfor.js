import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
// import logo from './../logo.svg'

//stateless vs stateful


const DisplayInfor = (props) => {
    const {listUsers} = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // Destructuring assgiment

    const handleShowHideListUser = () => {
        setShowHideListUser (!isShowHideListUser)
    }

    console.log('call me daddy')
    useEffect(
        ()=>{
        if(listUsers.length === 0){
            alert('You cook')
        }
        console.log('call me baby')
    },[listUsers]
    );

        return(
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? 'Hide list Users' : "Show List User"}
                    </span>
            </div>
            {isShowHideListUser && 
             <>
                {listUsers.map((user) =>{
    
                    return (
                                <div key ={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick= {() =>props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>

                                    <hr />
                                </div>
                            )
                })}
                </>
             }
        </div>
        )
}

export default DisplayInfor