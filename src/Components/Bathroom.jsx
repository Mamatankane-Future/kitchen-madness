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
                {bathroomOptions.map((el,index)=> <Button className="mb-1" variant="outline-dark" onClick={() => handleBathroomState(index)} key={index}>{el}</Button>)}
            </Popover.Body>
        </Popover>
    );
    
    function handleBathroomState(index){
       
    }

    return (
        <Shape {...props} popover={bathroomPopover}/>
    )
}

export default Bathroom;