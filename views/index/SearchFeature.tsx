import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchFeature: React.FC = (props) => {
  const [SearchTerm, setSearchTerm] = useState('');

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div>
      <Search
        placeholder='input search text'
        onChange={searchHandler}
        value={SearchTerm}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default SearchFeature;
