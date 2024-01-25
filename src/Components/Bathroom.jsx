import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Shape from './Shape'

function Bathroom(props){

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

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={bathroomPopover}>
            <Shape {...props} />
        </OverlayTrigger>
    )
}

export default Bathroom;