import PropTypes from 'prop-types';
import styled from 'styled-components';

// Обгортка кожної картки
const EventCard = styled.div`
  background-color: #ffeec9;
  border: 1px solid #f0c27b;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

// Зона з текстовою інформацією
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #03476c;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
    display: flex;
    align-items: center;
    gap: 6px;

    &.time {
      font-style: italic;
      color: #555;
    }
  }
`;

// Іконка‑контейнер, щоб вирівняти за центром
const IconWrapper = styled.div`
  flex-shrink: 0;
  color: #03476c;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export default function Event({ name, start, end, location, speaker, icon }) {
  // формат дати-на-час
  const startDT = new Date(start).toLocaleString('uk-UA', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  const endDT = new Date(end).toLocaleTimeString('uk-UA', {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <EventCard>
      <IconWrapper>{icon}</IconWrapper>
      <Info>
        <h3>{name}</h3>
        <p><strong><span role="img" aria-label="pin">📍</span></strong> {location}</p>
        <p><strong><span role="img" aria-label="user">👤</span></strong> {speaker}</p>
        <p className="time">
          <span role="img" aria-label="clock">⏰</span> {startDT} – {endDT}
        </p>
      </Info>
    </EventCard>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};