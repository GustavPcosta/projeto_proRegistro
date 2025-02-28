
import StatusBadge from "../Status";
import "./styles.css";

function MeetingInfo({ meeting = {} }) {
  return (
    <div className="grid grid-cols-2 gap-4 participante-info">
      <div className="content-participante">
      <div className="mb-4 flex items-center">
        <strong className="text-gray-500 mb-1 mr-2">Status</strong>
        <StatusBadge status={meeting.status || "PENDENTE"} />
        </div>

        <div className="info-text">
          <div className="mb-4">
            <strong className="text-gray-600 mb-1">Plataforma</strong>
            <span  className="text-gray-500 mb-1">{meeting.platform || "GOOGLE MEET"}</span>
          </div>

       
          <div className="mb-4 flex items-center">
            <strong className="text-gray-600 mb-1 mr-2">Videochamada:</strong>
            {meeting.link ? (
              <a
                href={meeting.link}
                className="text-blue-500 underline text-sm flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                
              >
               🔗 {meeting.link}
              </a>
            ) : (
              <span className="text-gray-400 text-sm">Nenhum link disponível</span>
            )}
          </div>

          <div className="mb-4">
            <strong className="text-gray-600 mb-1">Data</strong>
            <span className="text-gray-500 mb-1">{meeting.date || "Data não informada"}</span>
          </div>

          <div className="mb-4">
            <strong className="text-gray-600 mb-1">Duração</strong>
            <span className="text-gray-500 mb-1">{meeting.duration || "55min"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingInfo;
