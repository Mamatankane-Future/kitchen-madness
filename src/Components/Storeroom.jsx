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
                {storeroomOptions.map((el,index)=> <Button key={index} className="mb-1" variant="outline-dark" onClick={() => handlestoreroomState(index)}>{el}</Button>)}
            </Popover.Body>
        </Popover>
    );
    
    function handlestoreroomState(index){
    
    }
    

    return (
        <Shape {...props} popover={storeroomPopover}/>
    )
}

export default Storeroom;