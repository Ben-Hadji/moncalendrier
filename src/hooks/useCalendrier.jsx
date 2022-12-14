import React, {useState, useRef} from "react";

const daysShort = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
const monthNames = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']

const UseCalendrier = () => {
  const today = new Date();
  const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const [selectedDate, setSelectedDate] = useState(today);

  const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
  const daysInMonth = selectedMonthLastDate.getDate();
  const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  let prevMonthStartingPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  const rows = 6;
  const cols = 7;
  const calendarRows = {};

  for(let i = 1; i < rows + 1; i++) {
    for(let j = 1; j < cols + 1; j++) {
      if(!calendarRows[i]) {
        calendarRows[i] = [];
      }

      if(i === 1) {
        if(j < startingPoint) {
          calendarRows[i] = [...calendarRows[i], {
            date: `${prevMonthStartingPoint}-${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}-${selectedDate.getMonth() === 0 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear()}`,
            value: prevMonthStartingPoint
          }];
          prevMonthStartingPoint++;
        }else {
          calendarRows[i] = [...calendarRows[i], {
            date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
            value: currentMonthCounter
          }];
          currentMonthCounter++;
        }
      }else if( i > 1 && currentMonthCounter < daysInMonth + 1 ) {
        calendarRows[i] = [...calendarRows[i], {
          date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
          value: currentMonthCounter
        }];
        currentMonthCounter++;
      }else {
        calendarRows[i] = [...calendarRows[i], {
          date: `${nextMonthCounter}-${selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() + 2}-${selectedDate.getMonth() + 2 === 13 ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear()}`,
          value: nextMonthCounter
        }];
        nextMonthCounter++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
  }

  const reset = () => {
    setSelectedDate(prevValue => new Date(today.getFullYear(), today.getMonth(), 1));
  }

  const getNextMonth = () => {
    setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1));
  }

  const getNextYear = () => {
    setSelectedDate(prevValue => new Date(prevValue.getFullYear()+1, prevValue.getMonth() , 1));
  }
  const getPrevYear = () => {
    setSelectedDate(prevValue => new Date(prevValue.getFullYear()-1, prevValue.getMonth() , 1));
  }

  return {
    daysShort,
    monthNames,
    todayFormatted,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
    prevMonthLastDate,
    getNextYear,
    getPrevYear, 
    reset
  }
}
 
export default UseCalendrier;