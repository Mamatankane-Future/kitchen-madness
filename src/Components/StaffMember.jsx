import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Overlay from 'react-bootstrap/Overlay';
import { useState} from 'react';
import { OwnTooltip} from './OwnTooltip';
import styles from '../Styles/StaffMember.module.css'
import React, {useRef} from 'react';

const StaffMember = React.forwardRef((props,ref) => {

    const [showProfile, setShowProfile] = useState(false);
    const [coordinates, setCoordinates] = useState({x: 50, y: 50});
    const  target = useRef(null);
    const handleProfileClick = () => {
        setShowProfile(!showProfile);
    }

    const move = (event) => {
        let speed = 1;
        let x = 0;
        let y = 0;
      
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            y = -speed;
            break;
          case 'ArrowDown':
            event.preventDefault();
            y = speed;
            break;
          case 'ArrowRight':
            x = speed;
            break;
          case 'ArrowLeft':
            x = -speed;
            break;
          default:
            break;
        }
      
        setCoordinates({x: coordinates.x+x, y: coordinates.y+y});
      };
    
    function handleClick(event){
        switch (event.detail){
            case 1:
                props.onClick();
                break;
            case 2: 
                handleProfileClick(); 
                break;
            default:
                break;
        }
    }

    React.useImperativeHandle(ref, ()=>({
        move,
        name: props.chefDetails.name,
    }));

    
    return (
        <>
            <OwnTooltip title={props.chefDetails.role} id={props.chefDetails.name}>
                <Image 
                    src={props.chefDetails.profile} 
                    roundedCircle className={styles.profile}  
                    ref={target}
                    style={{
                        top: `${coordinates.y}%`,
                        left: `${coordinates.x}%`,
                        ...(props.active && { border: '2px solid #8CFF9E', boxShadow: '0 0 10px #8CFF9E' })
                      }}
                    onClick={handleClick}
                />
            </OwnTooltip>
            <Overlay target={target.current} show={showProfile} placement="top">
                {({
            placement: _placement,
            arrowProps: _arrowProps,
            show: _show,
            popper: _popper,
            hasDoneInitialMeasure: _hasDoneInitialMeasure,
            }) => (
                <Card className={styles.profileCard} onClick={handleProfileClick}
                style={{
                    top: `${coordinates.y}%`,
                    left: `${coordinates.x}%`,
                }}> 
                    <Card.Img src={props.chefDetails.img}/>
                    <Card.Title>{props.chefDetails.name}</Card.Title>
                    <Card.Subtitle className={styles.subtitle}>{props.chefDetails.role}</Card.Subtitle>
                    <Card.Text className={styles.text}>{props.chefDetails.description}</Card.Text>
                </Card>
            )}
            </Overlay>
        </>
    )
});



export default StaffMember;