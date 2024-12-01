import React, { useState, useEffect } from 'react';

const DataFilterComponent = () => {
 
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialData = [
        { id: 1, name: 'Aikan' },
        { id: 2, name: 'Bektur' },
        { id: 3, name: 'Asema' },
        { id: 4, name: 'Dilnaz' },
        { id: 5, name: 'Aleksandra' },
        { id: 6, name: 'Roza' },
        { id: 7, name: 'Anjelika' },
        { id: 8, name: 'Bermet' },
        { id: 9, name: 'Jarkynai' },
        { id: 10, name: 'Aizhan' },
      ];
      setData(initialData); 
      setFilteredData(initialData); 
    };

    fetchData();
  }, []);


  useEffect(() => {
    const filtered = data.filter(item =>
      item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Введите имя для поиска"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
