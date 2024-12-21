import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useAppointment } from '../../../context/AppointmentContext';
import { format, addDays, setHours, setMinutes, parseISO } from 'date-fns';
import './Calendar.css';

const Calendar = () => {
  const { updateAppointment } = useAppointment();
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  const currentDate = new Date('2024-12-21T11:04:52+02:00');
  const maxDate = addDays(currentDate, 30);

  useEffect(() => {
    generateAvailableSlots();
  }, []);

  const generateAvailableSlots = () => {
    const slots = [];
    const workingHours = {
      start: 9,
      end: 17,
      interval: 60
    };

    // Generate slots for the next 30 days
    for (let day = 0; day < 30; day++) {
      const currentDay = addDays(currentDate, day);
      
      // Skip Sundays
      if (currentDay.getDay() === 0) continue;

      // Generate slots for each working hour
      for (let hour = workingHours.start; hour < workingHours.end; hour++) {
        const slotDate = setHours(currentDay, hour);
        slotDate.setMinutes(0);
        slotDate.setSeconds(0);

        slots.push({
          id: `${format(slotDate, 'yyyy-MM-dd-HH-mm')}`,
          title: 'Available',
          start: slotDate,
          end: setHours(slotDate, hour + 1),
          backgroundColor: '#4CAF50',
          extendedProps: {
            time: format(slotDate, 'h:mm a')
          }
        });
      }
    }

    setAvailableSlots(slots);
  };

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    
    // Check if the selected time is within available slots
    const selectedSlot = availableSlots.find(slot => 
      slot.start.getTime() === start.getTime() &&
      slot.end.getTime() === end.getTime()
    );

    if (selectedSlot) {
      // Clear previous selection
      if (selectedInfo) {
        selectedInfo.view.calendar.unselect();
      }

      setSelectedInfo(selectInfo);
      
      const formattedDate = format(start, 'MMMM dd, yyyy');
      const formattedTime = format(start, 'h:mm a');
      
      updateAppointment(formattedDate, formattedTime);
    }
  };

  const handleEventClick = (clickInfo) => {
    const { start, end, extendedProps } = clickInfo.event;
    
    // Clear previous selection
    if (selectedInfo) {
      selectedInfo.view.calendar.unselect();
    }

    const formattedDate = format(start, 'MMMM dd, yyyy');
    updateAppointment(formattedDate, extendedProps.time);
  };

  return (
    <div className="calendar-container bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        slotMinTime="09:00:00"
        slotMaxTime="17:00:00"
        allDaySlot={false}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={false}
        validRange={{
          start: currentDate,
          end: maxDate
        }}
        events={availableSlots}
        select={handleDateSelect}
        eventClick={handleEventClick}
        height="auto"
        slotDuration="01:00:00"
        expandRows={true}
        stickyHeaderDates={true}
        nowIndicator={true}
        selectConstraint={{
          startTime: '09:00',
          endTime: '17:00',
          dows: [1, 2, 3, 4, 5, 6] // Monday to Saturday
        }}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5, 6], // Monday to Saturday
          startTime: '09:00',
          endTime: '17:00',
        }}
        selectOverlap={false}
        eventOverlap={false}
        slotEventOverlap={false}
        className="fc-theme-standard"
      />
    </div>
  );
};

export default Calendar;
