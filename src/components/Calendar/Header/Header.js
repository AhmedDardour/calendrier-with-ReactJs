import React, { useState } from "react";
import classes from "./Header.module.css";

import DaysHeader from "./DaysHeader";
import Stack from "@mui/material/Stack";
import CalenderWeek from "./CalenderWeek";

const Header = () => {
  const [currentDate, setCurrentDate] = useState({}) 
  

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={0}
      className={classes.header}
    >
      
      <CalenderWeek currentDate={currentDate} setCurrentDate={setCurrentDate} />
    <DaysHeader currentDate={currentDate} setCurrentDate={setCurrentDate}/>
    </Stack>
  );
};

export default Header;
