import ModalCreateUser from "./ModelCreateUser";
const ManageUser = (props) => {
    return(
        <div className="manageuser-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    Table users
                    <ModalCreateUser />
                </div>
            </div>
            
        </div>
    )
}

export default ManageUser;