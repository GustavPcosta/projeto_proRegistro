import './styles.css'

const MeetingAgenda = ({ topic }) => {
    return (
      <div className="content-pauta">
        <strong className="text-gray-600 mb-3">Pauta</strong>
        <div  className="font-medium   text-gray-500 mb-1">{topic}</div>
      </div>
    );
  };
  
  export default MeetingAgenda;