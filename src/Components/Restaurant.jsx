import { useState} from 'react';
import Container from 'react-bootstrap/Container';
import GameSettings from './GameSettings';
import RestaurantImage from './RestaurantImage';
import StaffMember from './StaffMember';
import { IoMdSettings } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { restaurantAssets1 } from '../Data/Restaurant';
import styles from "../Styles/Resturant.module.css";




import GameMessages from './GameMessages';
import { FaRegPauseCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";


function Restaurant(){

    const [showSettings, setShowSettings] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [currentRestaurant, setCurrentRestaurant] = useState(restaurantAssets1);
    const [play, setPlay] = useState(false);


    


    return (
        <Container>
            <GameSettings showModal= {showSettings} onDismiss={() => setShowSettings(false)} play={play}/>
            <GameMessages showModal= {showMessages} onDismiss={() => setShowMessages(false)} />
            <RestaurantImage Area={currentRestaurant.area}/>
            <Container className={styles.iconContainer}>
                {play ? <FaRegPauseCircle className={styles.icon} onClick={() => {setPlay(false)}}/> : <FaPlayCircle className={styles.icon} onClick={() => {setPlay(true)}}/>}
                <IoMdSettings className={styles.icon} onClick={()=>setShowSettings(true)}/>
                <SiGooglemessages className={styles.icon} onClick={()=>setShowMessages(true)}/>
            </Container>
            <StaffMember chefDetails={currentRestaurant.group.chefs.headChef} />
            <StaffMember chefDetails={currentRestaurant.group.chefs.fryChef}/>
            <StaffMember chefDetails={currentRestaurant.group.chefs.meatChef}/>
            <StaffMember chefDetails={currentRestaurant.group.chefs.pastryChef}/>
        </Container>  
    )
}

export default Restaurant