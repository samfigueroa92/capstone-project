import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

//Component Import

//CSS Import
import "./CalendarView.css"
import 'react-calendar/dist/Calendar.css';
const CalendarView = ({setDate, date}) => {
    const [value, onChange] = useState(new Date());
    setDate(value)


    return (
        <div className="calendar">
             <Calendar  id = "react-calendar"onChange={onChange} value={value} />
        </div>
    );
};

export default CalendarView;