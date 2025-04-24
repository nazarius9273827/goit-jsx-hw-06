import eventsData from './data/upcoming-events.json';
import PageBoard from './components/PageBoard';
import GlobalStyle from './styles/GlobalStyle';
import { FaCalendarAlt } from 'react-icons/fa';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <PageBoard events={eventsData} icon={<FaCalendarAlt size={24} />} />
      </div>
    </>
  );
}

export default App;
