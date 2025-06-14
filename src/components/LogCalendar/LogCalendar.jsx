import { useEffect, useState, useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './LogCalendar.scss';
import { BabiesContext } from '../../context/Babies/BabiesContext';
import api from '../../api/axios';
import { entryTypes } from '../../helpers/constants';
import { Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);

export default function LogCalendar() {
  const { selectedBabyId } = useContext(BabiesContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLogEntries = async () => {
      if (!selectedBabyId) return;

      const token = localStorage.getItem('token');

      try {
        const res = await api.get(`/api/v1/babies/${selectedBabyId}/log_entries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const formatted = res.data.map((entry) => {
          console.log(entry);

          let start = moment(entry.logged_at).toDate();
          let end = moment(entry.logged_at).toDate();
          if (entry.start_time && entry.end_time) {
            start = moment(entry.start_time).toDate();
            end = moment(entry.end_time).toDate();
          }

          const title = `${type(entry).emoji} ${type(entry).label}${
            entry.entry_type === 'custom'
              ? ': ' + entry.title
              : entry.title
              ? ': ' + entry.notes.slice(0, 20)
              : ''
          }`;

          return {
            id: entry.id,
            title,
            start,
            end,
          };
        });

        setEvents(formatted);
      } catch (error) {
        console.error('Failed to load log entries:', error);
      }
    };

    fetchLogEntries();
  }, [selectedBabyId]);

  const type = (entry) => entryTypes.find((t) => t.value === entry.entry_type);

  const eventPropGetter = (event) => {
    let className = '';
    if (event.entry_type === 'medical') {
      className = 'rbc-event-medical';
    } else if (event.entry_type === 'custom') {
      className = 'rbc-event-custom';
    }
    return { className };
  };

  return (
    <>
      <h4>Baby Activity Calendar</h4>
      <Link to={`/add-log-entry`} className="btn btn-sm btn-accent mb-3">
        Add Log Entry
      </Link>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        popup
        onSelectEvent={() => {}}
        eventPropGetter={eventPropGetter}
      />
    </>
  );
}
