import { useEffect, useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import GameSettings from './GameSettings';
import StaffMember from './StaffMember';
import { IoMdSettings } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import styles from "../Styles/Resturant.module.css";
import Area from './Area'

import { restaurantAssets1 } from '../Data/Restaurant';




import GameMessages from './GameMessages';
import { FaRegPauseCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";


function Restaurant(){

    const [showSettings, setShowSettings] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [currentRestaurant, setCurrentRestaurant] = useState(restaurantAssets1);
    const [play, setPlay] = useState(false);
    const staffMembersRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [activeStaff, setActiveStaff] = useState(3);

    function moveStaff(event){
        staffMembersRefs[activeStaff].current.move(event);
        // console.log(staffMembersRefs[activeStaff].current.name);
    }


    useEffect(() => {
        document.addEventListener('keydown', moveStaff);
        return () => {
            document.removeEventListener('keydown', moveStaff);
        };
    }, [activeStaff]);
    

    function changeCurStaff(index) {
        setActiveStaff(index);
    }

    


    return (
        <Container>
            <GameSettings showModal= {showSettings} onDismiss={() => setShowSettings(false)} play={play}/>
            <GameMessages showModal= {showMessages} onDismiss={() => setShowMessages(false)} />
            <div className='d-flex justify-content-center'>
                <Area svg={currentRestaurant.svg}/>
            </div>
            <Container className={styles.iconContainer}>
                {play ? <FaRegPauseCircle className={styles.icon} onClick={() => {setPlay(false)}}/> : <FaPlayCircle className={styles.icon} onClick={() => {setPlay(true)}}/>}
                <IoMdSettings className={styles.icon} onClick={()=>setShowSettings(true)}/>
                <SiGooglemessages className={styles.icon} onClick={()=>setShowMessages(true)}/>
            </Container>
            {Object.keys(currentRestaurant.group.chefs).map((chefType, index) => (
                <StaffMember
                    key={index}
                    onClick={() => changeCurStaff(index)}
                    chefDetails={currentRestaurant.group.chefs[chefType]}
                    ref={staffMembersRefs[index]}
                    active={activeStaff === index}
                />
            ))}

        </Container>  
    )
}

export default Restaurant