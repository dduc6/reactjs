import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Sidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

import {FaTachometerAlt, FaGem, Falist, FaGithub, FaRegLaughWink, FaHeart} from 'react-icons/fa'
import sidebarBg from '../../assets/Hạc.jpg';
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
                    Sugar Baby
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">new</span>}
                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>Components</MenuItem>
                    <SubMenu>
                        suffix={<span className="badge yellow">3</span>}
                        icon={<FaRegLaughWink />}
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
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
                        href="https://github.com/creativetimofficial"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                            viewSource
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