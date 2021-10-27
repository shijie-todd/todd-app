import React from 'react';
import DesktopRoutes from './desktop_routes';

function Root() {
  // todo: mobile routes
  
  return (
    <div className="app">
      <DesktopRoutes />
    </div>
  );
}

export default Root;
