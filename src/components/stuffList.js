import React from 'react';

const StuffList = ({stuffs}) => (
  <div>
    {
      stuffs.map(stuff =>
      <div key={stuff.id}>
        <div>{stuff.title}</div>
      </div>)
    }
  </div>
);

export default StuffList;
