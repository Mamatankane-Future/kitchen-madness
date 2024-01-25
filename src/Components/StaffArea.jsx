import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import Shape from './Shape'

function StaffArea(props) {
    const staffareaOptions = [
        "Attend to inspector",
        "Call suppliers",
        "Visit Tables",
        "Attend Complaints",
    ];

    const staffareaPopover = (
        <Popover id={`staffarea-popover`}>
            <Popover.Body className='d-flex flex-column'>
                {staffareaOptions.map((el,index)=> <Button key={index} className="mb-1" variant="outline-dark" onClick={() => handleStaffareaState(index)}>{el}</Button>)}
            </Popover.Body>
        </Popover>
    );

    function handleStaffareaState(index){

    }

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={staffareaPopover}>
            <Shape {...props} />
        </OverlayTrigger>
    )
}

export default StaffArea;