// src/components/PageBoard.jsx
import PropTypes from 'prop-types';
import Event from './Event';
import styled from 'styled-components';

const BoardWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 16px;
`;

const Title = styled.h2`
  background-color: #cce5ff;
  color: #03476c;
  text-align: center;
  padding: 12px;
  border-radius: 4px;
  font-size: 1.25rem;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

export default function PageBoard({ events, icon }) {
  return (
    <BoardWrapper>
      <Title>24th Core Worlds Coalition Conference</Title>
      <Grid>
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
      </Grid>
    </BoardWrapper>
  );
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  icon: PropTypes.element.isRequired,
};
