import Container from 'react-bootstrap/Container';
// import { useState } from 'react';

import globals from '../Styles/global.module.css';
import styles from '../Styles/RestaurantImage.module.css';


function RestaurantImage(props){
    return (
        <Container className={globals.centerItems}>
            <img src={props.restaurantImage} useMap="#image-map" alt=''/>
            <map name="image-map"> 
            {props.area.map((area, index) => (
                <>
                    <area key={index} alt={area.alt} href="#" title={area.alt} coords={area.coords} shape={area.shape} />
                    {/* <div coords={area.coords} shape={area.shape}>Hello</div> */}
                </>
            ))}
            </map>
                
                
                
        </Container>
    )
}

export default RestaurantImage;