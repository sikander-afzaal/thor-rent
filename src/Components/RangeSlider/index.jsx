import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import "./style.css";
function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = () => {
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  return (
    <>
      <div className="range_slder">
        <Stack spacing={1} direction="row">
          <Slider
            getAriaLabel={() => "Temperature"}
            // orientation="vertical"
            getAriaValueText={valuetext}
            max={10}
            track="normal"
            defaultValue={[0, 4]}
            marks={marks}
            // onChange={e => setRangeValue(e.target.value)}
            // value={rangeValue}
          />
        </Stack>
      </div>
    </>
  );
};

export default RangeSlider;
