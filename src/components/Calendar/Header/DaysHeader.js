import React from "react";
import classes from "./DaysHeader.module.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { addDays } from "date-fns";

const DaysHeader = ({currentDate,setCurrentDate}) => {
    const list = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const monthes = ['Janvier', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October','November','December']
 
   return (
    <Grid container spacing={0} columns={7} className={classes.days}>
      {list.map((cur, index) => (
        <Stack
        key={index}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0}
          className={classes.head}
          
        >
          <p className={classes.par}>
            <span>{cur}</span> <br /> 
          </p>

        <div style={{fontSize:"12px"}}>
          {index===0 ? (currentDate?.day  +" "+ monthes[currentDate?.month]):addDays(new Date((currentDate?.month+1)+"/"+currentDate?.day+"/"+currentDate?.year),index).getDate() +" "+ monthes[currentDate?.month]}
        </div>  
       </Stack>
      ))}
    </Grid>
  );
};

export default DaysHeader;