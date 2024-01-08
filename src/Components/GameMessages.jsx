import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { RiCheckDoubleLine } from "react-icons/ri";
import globals from '../Styles/global.module.css';
import styles from '../Styles/GameMessages.module.css';
import { useState } from 'react';

function Message(props) {
    return (
      <Alert variant='light' className={globals.spaceBetween}>
           {props.message}
           <RiCheckDoubleLine className={`${globals.icon} ${styles.icon}`}/>
      </Alert>
    );
}

function GameMessages(props){
    const [messages, setMessages] = useState(["Welcome to Kitchen madness."]);
    return (
        <Modal show={props.showModal} onHide={props.onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Messages</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {messages.map( message => <Message message={message}/>)}
            </Modal.Body>
        </Modal>
    )
}

export default GameMessages;