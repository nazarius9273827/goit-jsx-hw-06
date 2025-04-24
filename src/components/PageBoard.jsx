import PropTypes from 'prop-types';
import Event from './Event';
import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function PageBoard({ events, icon }) {
  return (
    <Board>
      {events.map((ev, idx) => (
        <Event
          key={idx}
          name={ev.name}
          start={ev.time.start}
          end={ev.time.end}
          location={ev.location}
          speaker={ev.speaker}
          icon={icon}
        />
      ))}
    </Board>
  );
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  icon: PropTypes.element.isRequired,
};