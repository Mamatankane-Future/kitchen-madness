import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const Element = (props) => {
    console.log(props.title);
    return (
        <OverlayTrigger overlay={<Tooltip id={props.id}>{props.title}</Tooltip>}>
            {props.children}
        </OverlayTrigger>
    )
}