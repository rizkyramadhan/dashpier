import React from 'react';

export default (p: any) => {
  return (
    <div
      style={{
        background: '#f2f2f2'
      }}
    >
      {p.children}
    </div>
  );
};
