import React from "react"
import { Tooltip } from "reactstrap";

function TooltipProject (props) {
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
  
    return (
      <Tooltip
        isOpen={tooltipOpen}
        target={`i-${props.tool}`}
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        {props.tool}
      </Tooltip>
    )
}
  
export default TooltipProject;