const FilterButton = ({ label }) => {
    return (
      <button className="flex items-center bg-gray-200 px-2 py-1 rounded mr-2">
        {label} <span className="ml-2">▼</span>
      </button>
    );
  };



  export default FilterButton