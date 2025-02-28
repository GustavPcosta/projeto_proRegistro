
import StatusBadge from "../Status"
function MeetingCard({ meeting, onClick }){
        return (
            <div 
              className="bg-white rounded shadow-sm mb-4 p-4 cursor-pointer"
              onClick={onClick}
            >
              <div className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{meeting.title}</h3>
                    <StatusBadge status={meeting.status} />
                  </div>
                  <div className="mt-2 text-gray-600">
                    {meeting.topic}
                  </div>
                  <div className="mt-2 text-gray-500 text-sm">
                    {meeting.date} | {meeting.time}
                  </div>
                </div>
              </div>
            </div>
          )
    
}

export default MeetingCard