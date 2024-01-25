import React, { useState } from 'react'
import { randomNumber } from '../Utils/util'
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
    const [tableState, setTablestate]= useState(0);
    const [tableTimeout, setTabletimeout] = useState(0)

    function handleTableState(){
        let timeout = null;
        switch (tableState){
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
        setTabletimeout(setTimeout(()=>{
            if (tableState === 1 || tableState ===4){
                if (randomNumber(0,1)) {
                    setTablestate((tableState+1)%tableOptions.length);
                }
            }
            else {
                setTablestate((tableState+1)%tableOptions.length);
            }
            clearTimeout(tableTimeout);
            setTabletimeout(0);
        }, timeout*1000));
    }
    

    let tablePopover = (
        <Popover>
            <Popover.Body>
                <Button variant="outline-dark" onClick={() => handleTableState()} className={tableTimeout !== 0 ? 'disabled' : ''}>{tableOptions[tableState]}</Button>
            </Popover.Body>
        </Popover>
    );

    
    return (
        <Shape {...props} popover={tablePopover}/>
    )

}

export default Table;