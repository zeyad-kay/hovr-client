import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import SlidingMenu from "../components/SlidingMenu/SlidingMenu";
import MenuItem from "../components/MenuItem/MenuItem";

function Dashboard(props) {

    let [menuVisibilty, setMenuVisibilty] = useState(false);
    // const toggleMenu = () => {
    // }
    let showMenu = (e) => {
        e.stopPropagation()
        setMenuVisibilty((prev) => !prev);
    }
    return (
        // <div style={{ overflow: 'hidden', position: "relative" }}>
        //     <Menu visible={menuVisibilty} height={100} width={70} direction='right'>
        //         <Nav defaultActiveKey="/home" className="flex-column">
        //             <MenuItem></MenuItem>
        //             <MenuItem></MenuItem>
        //             <MenuItem></MenuItem>
        //             <MenuItem></MenuItem>
        //         </Nav>
        //     </Menu>

        //     <div style={{ backgroundColor: 'blue', height: '100vh' }} id='map'>
        //         <button style={{ padding: "10rem" }} onClick={() => {
        //             toggleMenu();
        //         }}>show</button>
        //     </div>
        // </div>
        <>
            <SlidingMenu direction='left' visible={menuVisibilty}>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </SlidingMenu>
            <div onClick={() => { setMenuVisibilty(false)}} style={{ backgroundColor: 'blue', width: '100%', height: '100%' }} id='map'>
                <button onClick={showMenu} style={{ margin: "auto" }}>
                    <span style={{ fontSize: "30px", cursor: "pointer" }}>&#9776;</span>
                </button>
            </div>
        </>

    )
}

export default Dashboard;