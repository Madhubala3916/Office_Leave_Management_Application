import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

function Calendar() {
    const [leaveEvents, setLeaveEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/calendar/leave-calendar')
            .then(response => {
                const events = response.data.map(entry => ({
                    title: `On Leave: ${getRandomName()}`, // Display status and a random name
                    start: new Date(entry.date),
                    end: new Date(entry.date),
                }));
                setLeaveEvents(events);
            })
            .catch(error => {
                console.error('Error fetching leave calendar data:', error);
            });
    }, []);

    // Generate a random name for placeholder
    const getRandomName = () => {
        const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Williams'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        // Customize event style here (if needed)
        return {
            style: {
                backgroundColor: 'blue', // Customize background color
            },
        };
    };

    return (
        <div className="container mt-4">
            <h1>Leave Calendar</h1>
            <div style={{ height: '500px' }}>
                <BigCalendar
                    localizer={localizer}
                    events={leaveEvents}
                    startAccessor="start"
                    endAccessor="end"
                    eventPropGetter={eventStyleGetter} // Apply custom styling
                    style={{ margin: '20px', padding: '10px' }}
                    components={{
                        event: EventDisplay, // Customize event display
                    }}
                />
            </div>
        </div>
    );
}

// Custom event display component to show status and a random name
const EventDisplay = ({ event }) => (
    <div>
        <strong>{event.title}</strong>
    </div>
);

export default Calendar;
