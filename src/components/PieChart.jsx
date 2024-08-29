import React, { useEffect } from "react";
import * as d3 from "d3";
import "./PieChart.css";

const PieChart = (props) => {
  const graphOptions = {
    width: 440,
    height: 440,
    radius: Math.min(440, 440) / 2,
  };

  useEffect(() => {
    drawGraph(props.graphItems);

    // Cleanup on component unmount
    return () => {
      d3.select("#graph").select("svg").remove();
      d3.select("#border").select("svg").remove();
    };
  }, [props.graphItems]);

  function drawGraph(items) {
    const borderWidth = 20;

    function wrap(textToWrap, width) {
      textToWrap.each(function () {
        const text = d3.select(this);
        const words = text.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.3;
        const y = Number(text.attr("y")) - 10;
        const x = text.attr("x");
        const dy = parseFloat(text.attr("dy"));
        let tspan = text
          .text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");

        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", x)
              .attr("y", y)
              .attr("dy", () => ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }
    function handlePathClick(d, i) {
      // Adjust based on the actual data structure
      if (d.data && Array.isArray(d.data) && d.data[1]) {
        console.log(d.data[1].id);
      } else {
        console.error("Data structure is not as expected:", d.data);
      }
    }

    // Draw graph border
    const borderCanvas = d3
      .select("#border")
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${graphOptions.width + borderWidth} ${
          graphOptions.height + borderWidth
        }`
      );

    const borderGroup = borderCanvas
      .append("g")
      .attr(
        "transform",
        `translate(${(graphOptions.width + borderWidth) / 2}, ${
          (graphOptions.height + borderWidth) / 2
        })`
      );

    const borderArc = d3
      .arc()
      .innerRadius(graphOptions.width / 2)
      .outerRadius((graphOptions.width + borderWidth) / 2);

    const borderPie = d3.pie().value(() => 1);
    const borderDataReady = borderPie(Object.entries(items));

    const theArcBorder = borderGroup
      .selectAll(".arc-border")
      .data(borderDataReady)
      .enter()
      .append("g")
      .attr("class", "arc-border");

    theArcBorder
      .append("path")
      .attr("d", borderArc)
      .attr("fill", (d) => {
        return d.data[1].color || "red";
      });

    // Draw data graph
    const canvas = d3
      .select("#graph")
      .append("svg")
      .attr("viewBox", `0 0 ${graphOptions.width} ${graphOptions.height}`);

    const group = canvas
      .append("g")
      .attr(
        "transform",
        `translate(${graphOptions.width / 2}, ${graphOptions.height / 2})`
      );

    const arc = d3.arc().innerRadius(114).outerRadius(graphOptions.radius);

    const pie = d3.pie().value(() => 1);
    const dataReady = pie(Object.entries(items));

    const theArc = group
      .selectAll(".arc")
      .data(dataReady)
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("tabindex", "0") // Make it focusable
      .on("click", function (event, d) {
        handlePathClick(d, event);
      })
      .each((d, i, nodes) => {
        nodes[i].addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handlePathClick(d, i, nodes);
          }
        });
      });

    theArc
      .append("path")
      .attr("d", arc)
      .attr("fill", "#F7F7F7")
      .attr("stroke", "#E6E6E6")
      .style("stroke-width", "1px");
    //   .on("mouseover", function (event, d) {
    //     // Check if d.data[1] exists before accessing
    //     if (d.data[1] && d.data[1].color) {
    //       d3.select(this).attr("fill", d.data[1].color);
    //     } else {
    //       d3.select(this).attr("fill", "#84C465"); // Default color
    //     }
    //     d3.select(this).on("mouseleave", function () {
    //       d3.select(this).attr("fill", "#F7F7F7");
    //     });
    //   })
    //   .on("mousedown", function (event, d) {
    //     d3.selectAll(".arc path").attr("fill", "#F7F7F7");
    //     if (d.data[1] && d.data[1].color) {
    //       d3.select(this).attr("fill", d.data[1].color);
    //     }
    //     d3.select(this).on("mouseleave", null);
    //   });

    theArc
      .append("text")
      .attr("x", (d, e) => {
        const d3El = d3.select("g.arc:nth-child(" + (e + 1) + ") path");
        return arc.centroid(d3El.datum())[0];
      })
      .attr("y", (d, e) => {
        const d3El = d3.select("g.arc:nth-child(" + (e + 1) + ") path");
        return arc.centroid(d3El.datum())[1];
      })
      .attr("dy", 0)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .text(
        (d) =>
          `${
            d.data[1].name.length > 40
              ? d.data[1].name.substring(0, 40) + "..."
              : d.data[1].name
          }`
      )
      .call(wrap, 80);
  }

  return (
    <div className="pie-chart-container">
      <div id="border"></div>
      <div id="graph"></div>
    </div>
  );
};

export default PieChart;
