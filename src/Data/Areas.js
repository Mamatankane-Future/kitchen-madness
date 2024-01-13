import restaurant1 from '../Assets/restaurant1.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { randomNumber } from '../Utils/util';


const shapeStyle = {
    cursor: "pointer",
};

const tableOptions = [
    "Seat Customers",
    "Check Ready to Order",
    "Take Order",
    "Serve Food",
    "Check Ready to Pay",
    "Take Bill",
    "Clean Table"
];

const bathroomOptions = [
    "Clean Bathrooms",
    "Make repairs",
    "Renovate Bathrooms",
];


const bathroomPopover = (
    <Popover id={`bathroom-popover`}>
        <Popover.Body className='d-flex flex-column'>
            {bathroomOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handleBathroomState(index)}>{el}</Button>)}
        </Popover.Body>
    </Popover>
);

function handleBathroomState(index){
   
}



const kitchenOptions = [
    "Clean Kitchen",
    "Make repairs",
    "Renovate Kitchen",
];

const kitchenPopover = (
    <Popover id={`kitchen-popover`}>
        <Popover.Body className='d-flex flex-column'>
            {kitchenOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handleKitchenState(index)}>{el}</Button>)}
        </Popover.Body>
    </Popover>
);

function handleKitchenState(index){

}

const storeroomOptions = [
    "Clean Storeroom",
    "Renovate Storeroom",
    "Restock Inventory",
    "Make repairs",
];

const storeroomPopover = (
    <Popover id={`storeroom-popover`}>
        <Popover.Body className='d-flex flex-column'>
            {storeroomOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handlestoreroomState(index)}>{el}</Button>)}
        </Popover.Body>
    </Popover>
);

function handlestoreroomState(index){

}

const doorOptions = [
    "Make repairs",
    "Renovate door",
    "Attend to customers"
];

const door1Popover = (
    <Popover id={`door1-popover`}>
        <Popover.Body className='d-flex flex-column'>
            {doorOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handledoor1State(index)}>{el}</Button>)}
        </Popover.Body>
    </Popover>
);

function handledoor1State(index){

}


const door2Popover = (
    <Popover id={`door2-popover`}>
        <Popover.Body className='d-flex flex-column'>
            {doorOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handledoor2State(index)}>{el}</Button>)}
        </Popover.Body>
    </Popover>
);

function handledoor2State(index){

}

const staffareaOptions = [
    "Attend to inspector",
    "Call suppliers",
    "Visit Tables",
    "Attend Complaints",
];

const staffareaPopover = (
    <Popover id={`staffarea-popover`}>
        <Popover.Body className='d-flex flex-column'>
            {staffareaOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handlestaffareaState(index)}>{el}</Button>)}
        </Popover.Body>
    </Popover>
);

function handlestaffareaState(index){

}


export const Area1 = () => {
const svgStyle = {
    background: `url('${restaurant1}')`,
    backgroundRepeat: "no-repeat",
    width: "906px",
    height: "753px",
};

const tableStates = [useState(0), useState(0), useState(0),useState(0), useState(0), useState(0), useState(0)];
const tableTimeouts = [useState(0), useState(0), useState(0),useState(0), useState(0), useState(0), useState(0)];



let tablePopover = tableStates.map((el,index) =>
    (
        <Popover id={`table-popover${index}`}>
        <Popover.Body>
            <Button variant="outline-dark" onClick={() => handleTableState(index)} className={tableTimeouts[index][0] !== 0 ? 'disabled' : ''}>{tableOptions[tableStates[index][0]]}</Button>
        </Popover.Body>
        </Popover>
    )
);


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



return (
    <svg style={svgStyle}>
        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[0]}>
            <rect
                x="159.3333282470703"
                y="167.60416650772095"
                width="68"
                height="119"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_0"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[1]}>
            <rect
                x="238.3333282470703"
                y="171.60416650772095"
                width="68"
                height="119"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_1"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[2]}>
            <rect
                x="316.3333282470703"
                y="169.60416650772095"
                width="68"
                height="119"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_2"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={staffareaPopover}>
            <rect
                x="506.3333282470703"
                y="231.60416650772095"
                width="145"
                height="285"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_3"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={storeroomPopover}>
            <rect
                x="721.3333282470703"
                y="14.604166507720947"
                width="159"
                height="121"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_5"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[3]}>
            <rect
                x="249.3333282470703"
                y="49.60416650772095"
                width="190"
                height="83"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_6"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={door2Popover}>
            <rect
                x="30.333328247070312"
                y="246.60416650772095"
                width="118"
                height="172"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_7"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={door1Popover}>
            <rect
                x="401.3333282470703"
                y="622.604166507721"
                width="180"
                height="113"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_8"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[4]}>
            <rect
                x="665.3333282470703"
                y="629.604166507721"
                width="185"
                height="84"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_9"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[5]}>
            <circle
                cx="263.3333282470703"
                cy="492.9375"
                r="120"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="circle_0"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[6]}>
            <polygon
                points=" 23.333328247070312,726.6041870117188 27.333328247070312,595.6041870117188 90.33332824707031,595.6041870117188 95.33332824707031,642.6041870117188 112.33332824707031,665.6041870117188 159.3333282470703,666.6041870117188 159.3333282470703,723.6041870117188"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="poly_0"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={tablePopover[7]}>
            <polygon
                points=" 33.33332824707031,49.27082824707031 173.3333282470703,43.27082824707031 177.3333282470703,123.27082824707031 119.33332824707031,117.27082824707031 99.33332824707031,131.2708282470703 100.33332824707031,173.2708282470703 33.33332824707031,172.2708282470703"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="poly_1"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={kitchenPopover}>
            <polygon
                points=" 659.3333282470703,214.60416793823242 719.3333282470703,213.60416793823242 718.3333282470703,140.60416793823242 878.3333282470703,140.60416793823242 891.3333282470703,599.2708435058594 663.3333282470703,595.2708435058594"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="poly_2"
            />
        </OverlayTrigger>

        <OverlayTrigger trigger="click" placement="right" overlay={bathroomPopover}>
            <rect
                x="445.3333282470703"
                y="13.9375"
                width="272"
                height="121"
                opacity="0"
                className="shape"
                style={shapeStyle}
                id="rect_0"
            />
        </OverlayTrigger>

    </svg>
)}