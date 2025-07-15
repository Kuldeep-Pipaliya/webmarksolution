import React from 'react';

const Aboutpart3 = () => {
  return (
    <div className="numbers-section">
      <h2>HubSpot By the Numbers</h2>

      <div className="stats-cards">
        <div className="stat-card">
          <img src="./img/about3-1.svg" alt="Global Offices" />
          <h3>15 Global Offices</h3>
          <a href="#">Learn more</a>
        </div>
        <div className="stat-card">
          <img src="./img/about3-2.svg" alt="Employees" />
          <h3>8,500+ Employees</h3>
          <a href="#">Learn more</a>
        </div>
        <div className="stat-card">
          <img src="./img/about3-3.svg" alt="Customers" />
          <h3>258,000 Customers</h3>
          <a href="#">Learn more</a>
        </div>
      </div>

      <div className="awards-section">
        <img src="./img/about3-4.png" alt="Awards" />
        <div className="awards-text">
          <h3>Voted #1 in 571 Reports</h3>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Aboutpart3;
