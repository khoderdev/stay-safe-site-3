import React, { useContext } from 'react';
import { VisitContext } from '../hooks/VisitContext'; // Import VisitContext

const HomePage = () => {
  const { visitCount } = useContext(VisitContext);

  return (
    <div>
      <h1>About Page</h1>
      <p>You have visited this website {visitCount} times.</p>
    </div>
  );
};

export default HomePage;
