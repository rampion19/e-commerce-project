import './Ticket.css';
import React from 'react';

const Ticket = (props) => {
    return (
        <li id="lis" className="list-group-item">
            <span id='date'>{props.date}</span>
            <span className='font'>{props.title}</span>
            <span className='font'>{props.hall}</span>
            <button className='but'>Buy tickets</button>
        </li>
    );
}

export default Ticket;