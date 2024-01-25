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
                {doorOptions.map((el,index)=> <Button key={index} className="mb-1" variant="outline-dark" onClick={() => handleDoorState(index)}>{el}</Button>)}
            </Popover.Body>
        </Popover>
    );

    function handleDoorState(index){

    }

    return (
        <Shape {...props} popover={doorPopover}/>
    )
}

export default Door