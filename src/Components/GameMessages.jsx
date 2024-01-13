import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { RiCheckDoubleLine } from "react-icons/ri";
import { useState } from 'react';
import styles from '../Styles/GameMessages.module.css'

function Message(props) {
    return (
      <Alert variant='light' className="p-2">
            <RiCheckDoubleLine className={`icon ${styles.icon}`}/>
           {props.message}
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