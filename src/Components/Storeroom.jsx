import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Shape from './Shape'

function Storeroom(props){

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
    

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={storeroomPopover}>
            <Shape {...props} />
        </OverlayTrigger>
    )
}

export default Storeroom;