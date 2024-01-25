import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Shape from './Shape'

function Kitchen(props){

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

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={kitchenPopover}>
            <Shape {...props} />
        </OverlayTrigger>
    )
}

export default Kitchen;