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
                {kitchenOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handleKitchenState(index)} key={index}>{el}</Button>)}
            </Popover.Body>
        </Popover>
    );
    
    function handleKitchenState(index){
    
    }

    return (
        <Shape {...props} popover={kitchenPopover}/>
    )
}

export default Kitchen;