import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PersistentDrawerLeft from '../components/Drawer';
import './All.css';
export default function CustomMonthLayout() {
  return (
    <>

      <PersistentDrawerLeft/>
    <div id="cal">
    <h2>Schedule Your Plans</h2>
 <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
    </LocalizationProvider>
    </div>
    <div>
        <p><h2>"The backbone of success is hard work, determination, good planning, and perseverance." </h2> 
        <img src="https://w0.peakpx.com/wallpaper/194/924/HD-wallpaper-stay-focused-10-focused-forest-motivation-nature-graphy-quote-saying-sky-stay-trees.jpg" alt="see" width={'390'} height={'330'}></img>
</p>
    </div>
    </>
  );
}