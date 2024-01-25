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
  console.log(props);
    return (
      <svg style={{ ...svgStyle, ...props.svg.style }}>
          {props.svg.shapes.map((shape,index) => {
              switch (shape.type) {
                  case 'Table':
                    return (
                      <Table
                        key={index} {...shape}
                      />
                    );
                  case 'Door':
                    return (
                      <Door
                        key={index} {...shape}
                      />
                    );
                  case 'StaffArea':
                    return (
                      <StaffArea
                        key={index} {...shape}
                      />
                    );
                  case 'Storeroom':
                    return (
                      <Storeroom
                        key={index} {...shape}
                      />
                    );
                  case 'Kitchen':
                    return (
                      <Kitchen
                        key={index} {...shape}
                      />
                    );
                  case 'Bathroom':
                    return (
                      <Bathroom
                        key={index} {...shape}
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