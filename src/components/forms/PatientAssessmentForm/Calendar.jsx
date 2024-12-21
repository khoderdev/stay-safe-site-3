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

    // Predefined booked slots (you can replace these with your actual booked slots)
    const bookedSlots = [
      { date: '2024-12-22', hours: [10, 14] },
      { date: '2024-12-23', hours: [9, 13, 15] },
      { date: '2024-12-24', hours: [11, 16] },
    ];

    // Generate slots for the next 30 days
    for (let day = 0; day < 30; day++) {
      const currentDay = addDays(currentDate, day);
      
      // Skip Sundays
      if (currentDay.getDay() === 0) continue;

      const currentDateStr = format(currentDay, 'yyyy-MM-dd');
      const bookedHoursForDay = bookedSlots.find(slot => slot.date === currentDateStr)?.hours || [];

      // Generate slots for each working hour
      for (let hour = workingHours.start; hour < workingHours.end; hour++) {
        const slotDate = setHours(currentDay, hour);
        slotDate.setMinutes(0);
        slotDate.setSeconds(0);

        const isBooked = bookedHoursForDay.includes(hour);

        slots.push({
          id: `${format(slotDate, 'yyyy-MM-dd-HH-mm')}`,
          title: isBooked ? 'Booked' : 'Available',
          start: slotDate,
          end: setHours(slotDate, hour + 1),
          backgroundColor: isBooked ? '#E53E3E' : '#4CAF50',
          classNames: isBooked ? ['booked-slot'] : ['available-slot'],
          extendedProps: {
            time: format(slotDate, 'h:mm a'),
            isBooked
          }
        });
      }
    }

    setAvailableSlots(slots);
  };

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    
    // Check if the selected time is within available slots and not booked
    const selectedSlot = availableSlots.find(slot => 
      slot.start.getTime() === start.getTime() &&
      slot.end.getTime() === end.getTime() &&
      !slot.extendedProps.isBooked
    );

    if (selectedSlot) {
      // Clear previous selection
      if (selectedInfo) {
        selectedInfo.view.calendar.unselect();
      }

      setSelectedInfo(selectInfo);
      
      const formattedDate = format(start, 'MMMM dd, yyyy');
      const formattedTime = format(start, 'h:mm a');
      
      // Update the selected slot's appearance
      const updatedSlots = availableSlots.map(slot => {
        if (slot.id === selectedSlot.id) {
          return {
            ...slot,
            backgroundColor: '#2196F3', // Change to blue when selected
            borderColor: '#1976D2'
          };
        }
        return slot;
      });
      setAvailableSlots(updatedSlots);
      
      updateAppointment(formattedDate, formattedTime);
    }
  };

  const handleEventClick = (clickInfo) => {
    const { start, end, extendedProps } = clickInfo.event;
    
    if (extendedProps.isBooked) {
      return; // Don't allow selection of booked slots
    }
    
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
          right: 'prev,next',
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
          dows: [1, 2, 3, 4, 5, 6]
        }}
        selectOverlap={function(event) {
          return !event.extendedProps?.isBooked;
        }}
        eventOverlap={false}
        slotEventOverlap={false}
        className="fc-theme-standard"
      />
    </div>
  );
};

export default Calendar;
