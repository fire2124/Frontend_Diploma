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
    color: ${(props) => (props.color ? `${props.color}` : `#7e7d7d`)};
  }
`;

const LegendForm = ({ stats }) => {
  if (stats && stats.length !== undefined) {
    return stats.length > 0 ? (
      <div className="flex">
        {stats.map((e, key) => (
          <SidePanelText key={key}>
            {e.stop} 
            <svg width="90" height="50">
              <rect x="10" width="20" height="20" 
              style={{ fill: e.color, stroke: e.borderColor, strokeWidth: 2 }} />
            </svg>
          </SidePanelText>
        ))}
      </div>
    ) : null;
  }
};

export default React.memo(LegendForm);
