

const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
      switch(status) {
        case 'PENDENTE ASSINATURA':
          return 'bg-yellow-100 text-yellow-800';
        case 'ATA PRELIMINAR':
          return 'bg-blue-100 text-blue-800';
        case 'ATA DEFINITIVA':
          return 'bg-green-100 text-green-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };
  
    return (
      <div className={`text-xs px-2 py-1 rounded ${getStatusStyles()}`}>
        {status}
      </div>
    );
  };
  
  export default StatusBadge;