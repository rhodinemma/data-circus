import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const LineChart = (props) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // D3 Code

    // Dimensions
    let dimensions = {
      width: 1000,
      height: 500,
      margins: 50,
    };

    dimensions.containerWidth = dimensions.width - dimensions.margins * 2;
    dimensions.containerHeight = dimensions.height - dimensions.margins * 2;

    // SELECTIONS
    const svg = d3
      .select(svgRef.current)
      .classed("line-chart", true)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);
    const container = svg
      .append("g")
      .classed("container", true)
      .attr(
        "transform",
        `translate(${dimensions.margins}, ${dimensions.margins})`
      );

    // Draw Circle
    container.append("circle").attr("r", 25);
  }, [props.Data, svgRef.current]); // redraw chart if data changes

  return <svg ref={svgRef} />;
};

export default LineChart;
