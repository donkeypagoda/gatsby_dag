import React from 'react';


function StuffList(props){
  console.log(props)
  return (
    <div>
    {props.stuffs.map(stuff => (
      <div key={stuff.id}>
        <div>{stuff.title}</div>
      </div>
      )
    )}
    </div>
  )
};

export default StuffList;
