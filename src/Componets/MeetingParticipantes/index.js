import homem1 from '../Assets/homem1.jpeg'
import mulher from '../Assets/mulher.jpeg'
import './styles.css'
const MeetingParticipants = ({ count }) => {
    return (
      <div className='participante-content'>
        <strong className="text-gray-600 mb-3 ">Participantes</strong>
        <div className="flex">
          {[...Array(count)].map((_, i) => (
            <div key={i} className="mr-3">
              <img 
                src={homem1} 
                alt={`Participant ${i+1}`} 
                className="w-12 h-12 rounded-full"
              />
               
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MeetingParticipants;