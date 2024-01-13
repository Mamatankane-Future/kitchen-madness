import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const OwnTooltip = (props) => {
    return (
        <OverlayTrigger placement='auto' overlay={<Tooltip id={props.id}>{props.title}</Tooltip>}>
            {props.children}
        </OverlayTrigger>
    )
}