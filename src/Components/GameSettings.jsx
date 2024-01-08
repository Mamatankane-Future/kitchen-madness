import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { GiSoundOff } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";
import { VscUnmute } from "react-icons/vsc";
import { IoVolumeMuteOutline } from "react-icons/io5";

import globals from "../Styles/global.module.css";


function GameSettings(props){

    const [music, setMusic] = useState(50);
    const [sound, setSound] = useState(50);

    // function handleMusic(){

    // }

    return (
        <Modal show={props.showModal} onHide={props.onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Group className={globals.spaceBetween}>
                            <Form.Label>Music {music===0 ? <GiSoundOff className={globals.icon}/> : <GiSoundOn className={globals.icon}/>}</Form.Label>
                            <Form.Label>{music}%</Form.Label>
                        </Form.Group>
                        <Form.Range 
                        min={0}
                        max={100}
                        onChange={(event) => setMusic(parseInt(event.target.value, 10))}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Group className={globals.spaceBetween}>
                            <Form.Label>Sound {sound===0 ? <IoVolumeMuteOutline className={globals.icon}/> : <VscUnmute className={globals.icon}/>}</Form.Label>
                            <Form.Label>{sound}%</Form.Label>
                        </Form.Group>
                        <Form.Range 
                        min={0}
                        max={100}
                        onChange={(event) => setSound(parseInt(event.target.value, 10))}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button>Save</Button>
            </Modal.Footer>
        </Modal> 
    )
}

export default GameSettings;