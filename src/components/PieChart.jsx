import React, { useEffect } from "react";
import * as d3 from "d3";
import Wrapper from "../assets/wrappers/PieChart";
import { Typography } from "@mui/material";
import { MainInfoAPI } from "../api/Qualifications/mainInfoApi";
import { useDispatch, useSelector } from "react-redux";
import {
  changeResults,
  setFiltersIndustry,
  setFiltersArea,
} from "../redux/searchResults";

const PieChart = () => {
  const [graphItems, setGraphItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState([]);
  const { qualifications, filters_industry, filters_area } = useSelector(
    (state) => state.searchResults
  );
  const dispatch = useDispatch();

  const handleSearchResults = (newValue) => {
    dispatch(changeResults(newValue));
  };
  const handleFiltersIndustry = (newValue) => {
    dispatch(setFiltersIndustry(newValue));
  };
  const handleFiltersArea = (newValue) => {
    dispatch(setFiltersArea(newValue));
  };

  const graphOptions = {
    width: 440,
    height: 440,
    radius: Math.min(440, 440) / 2,
  };

  useEffect(() => {
    // get data to draw graph if there isnt any
    if (graphItems.length <= 0) {
      getGraphItemsFixture(), [];
    }
  });

  useEffect(() => {
    drawGraph(graphItems);
    // Cleanup on component unmount
    return () => {
      d3.select("#graph").select("svg").remove();
      d3.select("#border").select("svg").remove();
    };
  }, [graphItems]);

  const getGraphItemsFixture = async () => {
    setSelectedItem([]);
    const response = await MainInfoAPI.getGraphItemsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    setGraphItems(response.results);
  };

  const getGraphItemsChildrenFixture = async () => {
    const response = await MainInfoAPI.getGraphItemsChildrenFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    if (response && response.results) {
      setGraphItems([...response.results]);
    } else {
      console.error("No data received from API");
    }
  };

  const getSearchResultsFixture = async () => {
    const response = await MainInfoAPI.getSearchResultsFixture()
      .catch((error) => console.log([error.message]))
      .finally(() => {
        console.log("");
      });
    if (response && response.results) {
      handleSearchResults([...response.results]);
    } else {
      console.error("No data received from API");
    }
  };

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

    function handlePathClick(d, event) {
      console.log("Clicked slice data:", d.data[1]); // Debugging log

      if (d.data[1] && d.data[1].color) {
        // Set selected item to display on graph
        console.log(d.data[1].name);
        if (d.data[1].parent_id == "0") {
          handleFiltersArea([d.data[1].name]);
        } else {
          handleFiltersIndustry([d.data[1].name]);
        }

        setSelectedItem(d.data[1].name);
        // Reset all slices to the default color and reset font size
        d3.selectAll(".arc path")
          .transition()
          .duration(200)
          .attr("fill", "#F7F7F7"); // Reset color for all slices

        d3.selectAll(".arc text")
          .transition()
          .duration(200)
          .style("font-size", "12px"); // Reset font size for all labels

        // Get the original color
        const originalColor = d.data[1].color;

        // Convert the color to rgba and set the opacity to make it more white
        const rgbaColor = convertToRGBA(originalColor, 0.2);

        // Apply the new color with increased opacity
        d3.select(event.currentTarget)
          .select("path")
          .transition()
          .duration(200)
          .attr("fill", rgbaColor);

        // Increase the font size of the label for the clicked slice
        d3.select(event.currentTarget)
          .select("text")
          .transition()
          .duration(200)
          .style("font-size", "14px"); // Increase font size
      } else {
        console.error("Data structure is not as expected:", d.data);
      }
      // Check level of current data - if top, get data to redraw graph
      if (d.data[1].parent_id == "0") {
        setTimeout(() => {
          getGraphItemsChildrenFixture();
        }, 1000);
      } else {
        getSearchResultsFixture();
      }
    }

    // Helper function to convert a hex color to rgba
    function convertToRGBA(hex, opacity) {
      let r = 0,
        g = 0,
        b = 0;
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return `rgba(${r},${g},${b},${opacity})`;
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
    <Wrapper>
      <div className="pie-chart-container">
        <div id="border"></div>
        <div id="graph"></div>
        <div
          onClick={() => {
            getGraphItemsFixture();
          }}
          className="home-compass"
        >
          <Typography variant="h6" align="center">
            {selectedItem}
          </Typography>
        </div>
      </div>
    </Wrapper>
  );
};

export default PieChart;
