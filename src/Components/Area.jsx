import Table from './Table';
import StaffArea from './StaffArea';
import Door from './Door';
import Storeroom from './Storeroom';
import Bathroom from './Bathroom';
import Kitchen from './Kitchen';

const svgStyle = {
    backgroundRepeat: "no-repeat",
}

function Area(props){
    return (
        <svg style={`${svgStyle} ${props.svg.style}`}>
            {props.svg.shapes.map((shape,index) => {
                switch (shape.type) {
                    case 'Table':
                      return (
                        <Table
                          key={index}
                          x={shape.x}
                          y={shape.y}
                          width={shape.width}
                          height={shape.height}
                          opacity={shape.opacity}
                        />
                      );
                    case 'Door':
                      return (
                        <Door
                          key={index}
                          x={shape.x}
                          y={shape.y}
                          width={shape.width}
                          height={shape.height}
                          opacity={shape.opacity}
                        />
                      );
                    case 'StaffArea':
                      return (
                        <StaffArea
                          key={index}
                          x={shape.x}
                          y={shape.y}
                          width={shape.width}
                          height={shape.height}
                          opacity={shape.opacity}
                        />
                      );
                    case 'Storeroom':
                      return (
                        <Storeroom
                          key={index}
                          x={shape.x}
                          y={shape.y}
                          width={shape.width}
                          height={shape.height}
                          opacity={shape.opacity}
                        />
                      );
                    case 'Kitchen':
                      return (
                        <Kitchen
                          key={index}
                          points={shape.points}
                          opacity={shape.opacity}
                        />
                      );
                    case 'Bathroom':
                      return (
                        <Bathroom
                          key={index}
                          x={shape.x}
                          y={shape.y}
                          width={shape.width}
                          height={shape.height}
                          opacity={shape.opacity}
                        />
                      );
                    default:
                      return null;
                }
            })}
        </svg>
    )
}


export default Area;