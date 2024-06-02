import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Sidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

import {FaTachometerAlt, FaGem, Falist, FaGithub, FaRegLaughWink, FaHeart} from 'react-icons/fa'
import sidebarBg from '../../assets/Hạc.jpg';
import {DiReact} from "react-icons/di";
import {MdDashboard} from "react-icons/md";

import './Sidebar.scss';
const DucSidebar = ({image, collapsed, toggled, handleToggleSidebar}) => {
    return (
    <>
        <ProSidebar
        image = {sidebarBg }
        collapsed = {collapsed}
        toggled = {toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: "24px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: 14,
                        letterSpacing: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    <DiReact size ={'3em'} color= {'00bfff'} />
                    <span>Sugar Baby</span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                    >
                        Dashboard
                    </MenuItem>
                    <SubMenu
                        icon = {<FaGem />}
                        title ="Features"
                    >
                        
                        <MenuItem>Quản lý User</MenuItem>
                        <MenuItem>Quản lý Bài Quiz</MenuItem>
                        <MenuItem>Quản lý Câu Hỏi</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: "center" }}> 
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: "20px 24px",
                    }}
                >
                    <a
                        href="https://github.com/tduc16"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                           &#169; Trung Duc 
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>

        {/* <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<FaHeart />}>
                    <MenuItem icon={<FaHeart />}>Component 1</MenuItem>
                    <MenuItem icon={<FaHeart />}>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar> */}
    </>
    )
}   

export default DucSidebar