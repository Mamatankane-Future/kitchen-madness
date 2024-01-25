import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Shape from './Shape'

function Door(props){
    const doorOptions = [
        "Make repairs",
        "Renovate door",
        "Attend to customers"
    ];

    const doorPopover = (
        <Popover>
            <Popover.Body className='d-flex flex-column'>
                {doorOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handleDoorState(index)}>{el}</Button>)}
            </Popover.Body>
        </Popover>
    );

    function handleDoorState(index){

    }

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={doorPopover}>
            <Shape {...props} />
        </OverlayTrigger>
    )
}

export default Door