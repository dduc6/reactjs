// import Sidebar from "./Sidebar";
// import Sidebarcomponent from "./Sidebar";
import './Admin.scss';
import DucSidebar from "./Sidebar";
import {FaBars} from "react-icons/fa"
import { useState } from 'react';
const Admin = (props) =>{
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <DucSidebar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
            <FaBars onClick={() => setCollapsed(!collapsed)}/>
                    fefefe
            </div>
        </div>
    )
}
export default Admin;