
const ActionButtons = ({ onBack }) => {
    return (
      <div className="mb-4">
        <button 
          className="w-full bg-blue-700 text-white p-3 rounded mb-3"
          onClick={onBack}
        >
          Visualizar Ata
        </button>
        
        <div className="text-lg font-medium mb-2">Opções</div>
        <button className="w-full bg-blue-500 text-white p-3 rounded mb-2">
          Assinatura
        </button>
        <button className="w-full bg-blue-500 text-white p-3 rounded mb-2">
          Editar
        </button>
        <button className="w-full bg-blue-500 text-white p-3 rounded mb-2">
          Deletar
        </button>
        <button className="w-full bg-blue-500 text-white p-3 rounded mb-4">
          Exportar PDF
        </button>
        
        <div className="text-lg font-medium mb-2">Anotações</div>
        <button className="w-full bg-blue-500 text-white p-3 rounded">
          Anotações
        </button>
      </div>
    );
  };
  
  export default ActionButtons;
  