import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Overlay from 'react-bootstrap/Overlay';
import { useState, useRef } from 'react';
import { OwnTooltip} from './OwnTooltip';
import styles from '../Styles/StaffMember.module.css'

function StaffMember(props){

    const [showProfile, setShowProfile] = useState(false);
    const handleProfileClick = () => setShowProfile(!showProfile);
    const target = useRef(null);

    return (
        <>
            <OwnTooltip title={props.chefDetails.role} id={props.chefDetails.name}>
                <Image src={props.chefDetails.profile} ref={target} roundedCircle className={styles.profile} onClick={handleProfileClick}/>
            </OwnTooltip>
            <Overlay target={target.current} show={showProfile} placement="top">
                {({
            placement: _placement,
            arrowProps: _arrowProps,
            show: _show,
            popper: _popper,
            hasDoneInitialMeasure: _hasDoneInitialMeasure,
            }) => (
                <Card className={styles.profileCard} onClick={handleProfileClick}>
                    <Card.Img src={props.chefDetails.img}/>
                    <Card.Title>{props.chefDetails.name}</Card.Title>
                    <Card.Subtitle className={styles.subtitle}>{props.chefDetails.role}</Card.Subtitle>
                    <Card.Text className={styles.text}>{props.chefDetails.description}</Card.Text>
                </Card>
            )}
            </Overlay>
        </>
    )
}



export default StaffMember;