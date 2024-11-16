import React from "react";
import { RiEqualizerFill } from "react-icons/ri";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const AllcategoryOption = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={(props) => (
            <IoIosArrowDown
              {...props}
              style={{ color: "gray", fontSize: "1.5rem" }}
            />
          )}
        >
          <MenuItem value="">
            <h1 className="flex gap-2 text-xl font-bold">
              <RiEqualizerFill className="text-xl font-bold"></RiEqualizerFill>{" "}
              All Category
            </h1>
          </MenuItem>
          <MenuItem value={10}>Living Room</MenuItem>
          <MenuItem value={20}>Dining Room</MenuItem>
          <MenuItem value={30}>Bedroom</MenuItem>
          <MenuItem value={30}>Office</MenuItem>
          <MenuItem value={30}>Bedroom</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AllcategoryOption;
