import React from "react";
import styled from "styled-components";


const SidePanelText = styled.div`
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #7e7d7d;
  flex: 1;
  display: flex;
  strong {
    color: ${(props) => (props.color ? `${props.color}` : `#7e7bff`)}; 
  }
`;

const StatLegend = ({stats}) => {
    return stats.length > 0 ? 
    <div className="flex">
    {
      stats.map(([label, val, color], key) => <SidePanelText key={key} color={color}> {label} {" "}<strong>{val}</strong></SidePanelText>)
    }
    </div>
    : null
  
}

export default React.memo(StatLegend);