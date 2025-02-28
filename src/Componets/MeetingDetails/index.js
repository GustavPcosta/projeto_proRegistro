
import React from 'react';
import MeetingInfo from '../MeetingInfo';
import MeetingAgenda from '../MeetingAgenda';
import MeetingParticipants from '../MeetingParticipantes';
import ActionButtons from '../AcctionsButtons';
import SupportButton from '../SupportButton';
import './styles.css'

function MeetingDetails({ meeting, onBack }){
    return (
        <div className="p-4 flex">
          <div className="flex-1">
            <div className="bg-white rounded shadow p-4 mb-4">
              <div className="flex items-start mb-4">
                <div className="h-5 w-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                <h2 className="text-lg font-medium">{meeting.title}</h2>
              </div>
              
              <hr className="my-4" />
              
              <MeetingInfo meeting={meeting} />
              
              <hr className="my-4" />
              
              <MeetingAgenda topic={meeting.topic} />
              
              <hr className="my-4" />
              
              <MeetingParticipants count={meeting.participants || 4} />
            </div>
          </div>
          
          <div className="w-64 ml-4">
            <ActionButtons onBack={onBack} />
          </div>
          
          <SupportButton />
        </div>
      );
}


export default MeetingDetails