import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: start;
  gap: 16px;
  background-color: #f8f9fa;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default function Event({ name, start, end, location, speaker, icon }) {
  return (
    <EventCard>
      {icon}
      <Info>
        <h3>{name}</h3>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Speaker:</strong> {speaker}</p>
        <p><strong>Start:</strong> {new Date(start).toLocaleString()}</p>
        <p><strong>End:</strong> {new Date(end).toLocaleString()}</p>
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