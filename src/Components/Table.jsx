import React, { useState } from 'react'
import { randomNumber } from '../Utils/util'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Shape from './Shape'

function Table(props){
    const tableOptions = [
        "Seat Customers",
        "Check Ready to Order",
        "Take Order",
        "Serve Food",
        "Check Ready to Pay",
        "Take Bill",
        "Clean Table"
    ];
    const tableStates = [useState(0), useState(0), useState(0),useState(0), useState(0), useState(0), useState(0)];
    const tableTimeouts = [useState(0), useState(0), useState(0),useState(0), useState(0), useState(0), useState(0)];

    function handleTableState(index){
        let timeout = null;
        switch (tableStates[index][0]){
            case 0: 
                timeout = randomNumber(10, 15);
                break;
            case 1:
                timeout = randomNumber(2, 5);
                break;
            case 2:
                timeout = randomNumber(5, 10);
                break;
            case 3: 
                timeout = randomNumber(5, 10);
                break;
            case 4: 
                timeout = randomNumber(2, 5);
                break;
            case 5:
                timeout = randomNumber(5, 10);
                break;
            case 6:
                timeout = randomNumber(10, 15);
                break;
            default: break;
        }
        if (!timeout) return;
        tableTimeouts[index][1](setTimeout(()=>{
            if (tableStates[index][0] === 1 || tableStates[index][0] ===4){
                if (randomNumber(0,1)) {
                    tableStates[index][1](++tableStates[index][0]%tableOptions.length);
                }
            }
            else {
                tableStates[index][1](++tableStates[index][0]%tableOptions.length);
            }
            clearTimeout(tableTimeouts[index][0]);
            tableTimeouts[index][1](0);
        }, timeout*1000));
    }
    



    let tablePopover = tableStates.map((el,index) =>
    (
        <Popover>
            <Popover.Body>
                <Button variant="outline-dark" onClick={() => handleTableState(index)} className={tableTimeouts[index][0] !== 0 ? 'disabled' : ''}>{tableOptions[tableStates[index][0]]}</Button>
            </Popover.Body>
        </Popover>
    ));

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover}>
            <Shape {...props} />
        </OverlayTrigger>
    )

}

export default Table;