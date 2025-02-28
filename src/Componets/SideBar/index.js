import NavItem from "../NavItem";
import './styles.css'
function SideBar() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <div className="text-blue-600 text-2xl font-bold">
            <span className="text-blue-500">Pro</span>registro<sup>®</sup>
          </div>
        </div>

        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded w-full mb-6">
          <span className="mr-2 bg-white text-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
            +
          </span>
          Nova Reunião Com Ata
        </button>

        <nav>
          <NavItem label="Home" active={false} className="text-gray-800" />
          <NavItem label="Registro de Atas" active={true} />
          <NavItem label="Assinatura" active={false} icon="🔴" className="text-gray-800" />
          <NavItem label="Calendário" active={false} className="text-gray-800" />
          <NavItem label="Histórico" active={false} className="text-gray-800" />
          <div className="pt-32"></div>
          <NavItem label="Configurações" active={false} />
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
