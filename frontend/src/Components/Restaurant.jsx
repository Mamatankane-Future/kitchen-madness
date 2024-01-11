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


function Restaurant(){

    const [showSettings, setShowSettings] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [restaurantImage, setRestaurantImage] = useState(restaurantAssets1.image);

    


    return (
        <Container>
            <GameSettings showModal= {showSettings} onDismiss={() => setShowSettings(false)}/>
            <GameMessages showModal= {showMessages} onDismiss={() => setShowMessages(false)} />
            <RestaurantImage restaurantImage={restaurantImage} area={restaurantAssets1.area}/>
            <Container className={styles.iconContainer}>
                <IoMdSettings className={styles.icon} onClick={()=>setShowSettings(true)}/>
                <SiGooglemessages className={styles.icon} onClick={()=>setShowMessages(true)}/>
            </Container>
            {/* <StaffMember chefDetails={chefs.headChef} />
            <StaffMember chefDetails={chefs.fryChef}/>
            <StaffMember chefDetails={chefs.meatChef}/>
            <StaffMember chefDetails={chefs.pastryChef}/> */}
        </Container>  
    )
}

export default Restaurant