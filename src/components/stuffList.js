import React from 'react';

// {
//   stuffs.map(stuff =>
//   <div key={stuff.id}>
//     <div>{stuff.title}</div>
//   </div>)
// }

const StuffList = ({stuffs}) => (
  <div>
    {stuffs.entities}
  </div>
);

export default StuffList;
