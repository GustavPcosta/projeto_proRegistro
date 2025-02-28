
import Header from '../../Componets/Header';
import SideBar from '../../Componets/SideBar';
import {useState} from 'react'
import MeetingsList from '../../Componets/MeetingsList';
import MeetingDetails from '../../Componets/MeetingDetails';
import meetingsData from '../../Componets/Lista';
import './styles.css';

function Home() {
  const [currentPage, setCurrentPage] = useState('list');
  const [meetings] = useState(meetingsData);
  const [selectedMeeting, setSelectedMeeting] = useState(meetings[0]);

  const viewMeetingDetails = (meeting) => {
    setSelectedMeeting(meeting);
    setCurrentPage('details');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <SideBar />
      
      
      <div className="flex-1">
       
        <Header />
        
        
        {currentPage === 'list' ? (
          <MeetingsList 
            meetings={meetings} 
            onViewMeeting={viewMeetingDetails} 
          />
        ) : (
          <MeetingDetails 
            meeting={selectedMeeting} 
            onBack={() => setCurrentPage('list')} 
          />
        )}
      </div>
    </div>
  );
};



export default Home;

