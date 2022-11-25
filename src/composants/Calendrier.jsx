import React, {Fragment,} from "react";
import UseCalendrier from "../hooks/useCalendrier";
import '../App.css'

const Calendrier = () => {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth, getNextYear, getPrevYear, reset} = UseCalendrier();
    const dateClickHandler = date => {
        return("bg-warning")
      }
    return(
        <Fragment>
            {/* <p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p> */}
            <div className=" calendrier">
                <div class="container align-items-center">
                    <div class="text-center ">
                        <div class="row text-center ">
                            <div class="col  text-dark  " onClick={getPrevMonth} >{'<<'}</div>
                            <div class="col bg-dark">{`${monthNames[selectedDate.getMonth()]}`}</div>
                            <div class="col  text-dark " onClick={getNextMonth} >{'>>'} 
                            </div>
                        </div>
                        <div class="row text-center ">
                            <div class="col text-dark " onClick={getPrevYear}>{'<<'}</div>
                            <div class="col bg-dark">{`${selectedDate.getFullYear()}`}</div>
                            <div class="col text-dark  " onClick={getNextYear} >{'>>'}
                        </div>
                    </div>
                        
                        
                        <table className="table  border border-dark" >
                        
                            <thead>
                            <tr >
                                {daysShort.map(day => (
                                <th key={day} className="border border-dark">{day}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.values(calendarRows).map(cols => {
                                return <tr key={cols[0].date} >
                                    {cols.map(col => (
                                        col.date === todayFormatted  
                                        ? <td key={col.date} className=" bg-primary text-white" onClick={() => dateClickHandler(col.date)}>
                                        {col.value}
                                        </td>
                                        : <td key={col.date} className="border border-dark" onClick={() => dateClickHandler(col.date)}>{col.value} </td>

                                    ))}
                                </tr>
                                })
                            }
                            </tbody>
                            
                        </table>
                        <button type="button" class="btn btn-outline-primary btn-lg " data-toggle="tooltip" title="Aller à aujourd'hui" onClick={reset} >Today</button>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Calendrier;