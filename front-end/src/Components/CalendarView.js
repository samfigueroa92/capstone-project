import React, { useState } from 'react';
import Calendar from 'react-calendar';

//Component Import

//CSS Import
import "./CalendarView.css"
import 'react-calendar/dist/Calendar.css';
const CalendarView = ({setDate}) => {
    const [value, onChange] = useState(new Date());
    setDate(value)
    // let newValue =((value.getUTCFullYear()+"/"+ (value.getUTCMonth() + 1)+"/"+ value.getDate()))
    // setDate(newValue)
    return (
        <div className="calendar">
             <Calendar  id = "react-calendar"onChange={onChange} value={value} />
        </div>
    );
};

export default CalendarView;