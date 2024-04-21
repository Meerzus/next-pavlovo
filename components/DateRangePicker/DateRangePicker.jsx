'use client'

import React, {useEffect, useState} from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {format} from "date-fns";
import ru from 'date-fns/locale/ru'

registerLocale("ru", ru)

function DateRangePicker({startDate, setStartDate}) {
    return (
        <div className="item DatePicker">
            {
                <span id={'pickDate'}>Дата </span>
            }

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                        locale="ru" dateFormat="dd.MM.YYYY"
            />
        </div>
    );
}

export default DateRangePicker;