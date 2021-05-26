import { useState } from 'react';
import { useEffect } from 'react';
import './SlidingMenu.css';

// function checkProps(props) {
//     let { height, width, direction, visible } = props;
//     direction = direction || 'right';
//     if (visible === undefined) {
//         visible = true;
//     }
//     if (width > 100 || !width) {
//         width = 100;
//     }
//     if (height > 100 || !height) {
//         height = 100;
//     }
//     return {
//         height: height,
//         width: width,
//         direction: direction,
//         visible: visible
//     };
// }

// function Menu(props) {

//     let { width, height, direction, visible } = checkProps(props);
//     let [frame, setFrame] = useState(100);


//     const slideOut = () => {
//         setTimeout(() => {
//             setFrame(frame + 1);
//         }, 2);
//     }
//     const slideIn = () => {
//         setTimeout(() => {
//             setFrame(frame - 1);
//         }, 2);
//     }

//     const style = {
//         [direction]: frame + '%',
//         width: width + 'vw',
//         height: height + 'vh',
//     };

//     useEffect(() => {
//         if (!visible) {
//             if (frame <= 100) {
//                 slideOut();
//             }
//         }
//         else {
//             if (direction === 'right' || direction === 'left') {
//                 if (frame === 100 - width) {
//                     return;
//                 }
//             } else {
//                 if (frame === 100 - height) {
//                     return;
//                 }
//             }
//             slideIn()
//         }
//     });
//     return (
//         <div style={style} className="menu">
//             {props.children}
//         </div>
//     )
// }
function SlidingMenu(props) {
    let { visible } = props;
    let [style, setStyle] = useState({});
    useEffect(() => {
        if (visible) {
            setStyle({
                width: '60vw',
            })
        } else {
            setStyle({})
        }
    }, [visible])
    return (

        <div style={style} className="menu">
            {props.children}
        </div>
    )
}
export default SlidingMenu;