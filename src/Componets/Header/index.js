import './styles.css'
import Homem from '../Assets/homem.jpeg'


function Header(){
    return (
        <div className="flex items-center p-4 bg-gray-200">
          <div className="flex items-center">
            <img src={Homem} alt="Profile" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <div className="font-medium">Daniel Cascata</div>
              <div className="text-sm text-gray-600">Prefeitura de Florianópolis</div>
            </div>
          </div>
        </div>
      );
}


export default Header