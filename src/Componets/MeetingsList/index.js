import React from 'react';
import MeetingCard from '../MeetingsCards';
import SearchBar from '../SearchBar';
import FilterButton from '../Button';
import SupportButton from '../SupportButton';


function MeetingsList({ meetings, onViewMeeting }){

    return (
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-lg font-medium">46 RESULTADOS ENCONTRADOS</h2>
            <hr className="my-4" />
            <div className="flex justify-between mt-4 mb-6">
              <div className="flex space-x-4">
                <FilterButton label="PARTICIPANTES" />
                <FilterButton label="STATUS" />
                <FilterButton label="DATA" />
              </div>
              <div className="w-1/3">
                <SearchBar />
              </div>
            </div>
          </div>
          
          {meetings.map((meeting) => (
            <MeetingCard 
              key={meeting.id} 
              meeting={meeting} 
              onClick={() => onViewMeeting(meeting)} 
            />
          ))}
          
          <SupportButton />
        </div>
      );

}

  
  export default MeetingsList;
