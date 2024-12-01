import React, { useState, useEffect } from 'react';


const DataFilterComponent = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name && typeof item.name === 'string' && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="data-filter-container">
      <input
        type="text"
        placeholder="Введите имя для поиска"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input-search"
      />

      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilterComponent;
