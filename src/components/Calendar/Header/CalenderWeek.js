import React, {  useEffect, useState } from "react";
import {  isMonday, previousMonday , previousSunday , isSunday, nextSunday ,nextMonday   } from "date-fns";
import "./header.css";
import "./CalenderWeek.css"


const CalenderWeek = ({currentDate, setCurrentDate}) => {
    let today = new Date(); 
    const debutSemaine = () => {
    
    if(isMonday(today)) {
   
      setCurrentDate({
         day: today.getDate(),
         month: today.getMonth(),
         year: today.getFullYear()
      })
   } else {


   const prevMonday = previousMonday(today)
   
   
   setCurrentDate({
      day: prevMonday.getDate(),
      month: prevMonday.getMonth(),
      year: prevMonday.getFullYear()
   })
      

         }
   }
   
   //  const [currentDate, setCurrentDate] = useState({}) 
       
   const monthes = ['Janvier', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October','November','December']
     

      
   
      const finSemaine = () => {
    
         if(isSunday(today)) {
        
           setCurrentSun({
              day: today.getDate(),
              month: today.getMonth(),
              year: today.getFullYear()
              
           })
        } else {
     
     
        const nextSun = nextSunday(today)
        console.log(nextSun.getDate())
        
        setCurrentSun({
           day: nextSun.getDate(),
           month: nextSun.getMonth(),
           year: today.getFullYear()
           
        })
           
     
              }
        }
        
        const next = () => {
         const getNextMonday = nextMonday(new Date(currentDate?.year, currentDate?.month, currentDate?.day));
         const getNextSunday = nextSunday(new Date(currentSun?.year, currentSun?.month, currentSun?.day));

         console.log({currentDate})
         console.log(getNextMonday)
        
          setCurrentDate({
            day: getNextMonday.getDate(),
            month:   getNextMonday.getMonth(),
            year: getNextMonday.getFullYear()
          })

         
         
            console.log({currentSun})
            console.log(getNextSunday)
           
         setCurrentSun({
            day: getNextSunday.getDate(),
            month:   getNextSunday.getMonth(),
            year: getNextSunday.getFullYear()
          });
         

         // setCurrentSun( (currentSun.getDate()+7));
      };
     
        const [currentSun, setCurrentSun] = useState({}) 
       
         useEffect(() => {
            debutSemaine()
            finSemaine()
              
           },[])

          

           const prev = () => {
            const getPrevMonday = previousMonday(new Date(currentDate?.year, currentDate?.month, currentDate?.day));
            const getPrevSunday = previousSunday(new Date(currentSun?.year, currentSun?.month, currentSun?.day));
              setCurrentDate( {
               day: getPrevMonday.getDate(),
               month: getPrevMonday.getMonth(),
               year: getPrevMonday.getFullYear()
              });


              setCurrentSun( {
               day: getPrevSunday.getDate(),
               month: getPrevSunday.getMonth(),
               year:getPrevSunday.getFullYear()
              });
          };


         useEffect(() => {
           
         console.log('val changed', {currentSun, currentDate})
          
         }, [currentDate, currentSun])
         

  return (
   <div className="header row flex-middle">
      <div className="column col-start">
         <div className="icon" onClick={prev}>
            chevron_left
         </div>
      </div>
      <div className="column col-center">
         <spam>
            {currentDate.day} {monthes[currentDate.month]}
         </spam>
         <spam> - </spam>
         <spam>
            {currentSun.day} {monthes[currentSun.month]} {currentSun.year}
         </spam>

      </div>
      <div className="column col-end">
         <div className="icon" onClick={next}>
            chevron_right
         </div>
      </div>
   </div>
   );
};
  


export default CalenderWeek;