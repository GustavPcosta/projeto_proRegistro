



function NavItem ({ label, active, icon}){
    return (
              <div className={`p-3 mb-1 ${active ? 'bg-blue-50' : ''}`}>
                <div className="flex items-center">
                  <span>{label}</span>
                  {icon && <span className="ml-2">{icon}</span>}
                </div>
              </div>
            );
}


export default NavItem