

// import Button from "../../Componets/ButtonInfo";
// // import { Card, CardContent } from "@/components/ui/card";]
// import Card from "../../Componets/CardInfo";



// import Avatar from "../../Componets/Avatarinfo";
// import { FaVideo, FaFilePdf, FaEdit, FaTrash, FaPen } from "react-icons/fa";
// import SideBar from "../../Componets/SideBar";

// <SideBar/>

// const MeetingDetails = () => (
//   <Card className="w-full max-w-3xl p-6">
//     <h3 className="text-lg font-bold">[Reunião COMCAP e Pref. Florianópolis]</h3>
//     <div className="mt-4">
//       <p><strong>Status:</strong> <span className="bg-yellow-300 px-2 py-1 rounded">Pendente Assinatura</span></p>
//       <p><strong>Plataforma:</strong> Google Meet</p>
//       <p><strong>Vídeochamada:</strong> <a href="#" className="text-blue-500">Link</a></p>
//       <p><strong>Data:</strong> 06 de janeiro</p>
//       <p><strong>Duração:</strong> 55min</p>
//     </div>
//     <div className="mt-4">
//       <h4 className="font-semibold">Pauta</h4>
//       <p className="text-gray-600">Discussão de reajuste anual de taxa de coleta</p>
//     </div>
//   </Card>
// );

// const Participants = () => (
//   <div className="mt-4">
//     <h4 className="font-semibold">Participantes</h4>
//     <div className="flex mt-2 space-x-2">
//       {[1, 2, 3, 4].map((_, i) => (
//         <Avatar key={i} className="w-10 h-10" />
//       ))}
//     </div>
//   </div>
// );

// const ActionButtons = () => (
//   <div className="flex flex-col space-y-2">
//     <Button className="bg-blue-600 text-white flex items-center"><FaPen className="mr-2" /> Assinatura</Button>
//     <Button className="bg-gray-500 text-white flex items-center"><FaEdit className="mr-2" /> Editar</Button>
//     <Button className="bg-red-500 text-white flex items-center"><FaTrash className="mr-2" /> Deletar</Button>
//     <Button className="bg-blue-500 text-white flex items-center"><FaFilePdf className="mr-2" /> Exportar PDF</Button>
//   </div>
// );

// export default function MeetingPage() {
//   return (
//     <div className="flex">
//       <SideBar />
//       <main className="flex-1 p-6 bg-gray-50">
//         <MeetingDetails />
//         <Participants />
//       </main>
//       <aside className="w-64 p-6">
//         <ActionButtons />
//       </aside>
//     </div>
//   );
// }

import SideBar from "../../Componets/SideBar";
import StatusBadge from "../../Componets/Status";
import MeetingAgenda from "../../Componets/MeetingAgenda";

function MeetingInfo({ meeting = {} }) { // Define um valor padrão para evitar undefined
  return (
    <>
      <SideBar />

      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <div className="mb-4">
            <div className="text-gray-600 mb-1">Status</div>
            <StatusBadge status={meeting?.status || "PENDENTE"} />
          </div>

          <div className="mb-4">
            <div className="text-gray-600 mb-1">Plataforma</div>
            <div>{meeting?.platform || "GOOGLE MEET"}</div>
          </div>

          <div className="mb-4">
            <div className="text-gray-600 mb-1">Videochamada</div>
            {meeting?.link ? (
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">🔗</span>
                <a href={meeting.link} className="text-blue-500 underline text-sm" target="_blank" rel="noopener noreferrer">
                  {meeting.link}
                </a>
              </div>
            ) : (
              <div className="text-gray-400 text-sm">Nenhum link disponível</div>
            )}
          </div>

          <div className="mb-4">
            <div className="text-gray-600 mb-1">Data</div>
            <div>{meeting?.date || "Data não informada"}</div>
          </div>

          <div className="mb-4">
            <div className="text-gray-600 mb-1">Duração</div>
            <div>{meeting?.duration || "55min"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetingInfo;
