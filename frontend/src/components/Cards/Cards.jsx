import React from "react";

const Cards = ({ sector, region, country }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div className="col">
        <div className="card h-100 bg-info">
          <div className="card-body">
            <h5 className="card-title">Sectors</h5>
            <p className="card-text" style={{ fontSize: "4rem" }}>
              {sector.length}
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 bg-warning">
          <div className="card-body">
            <h5 className="card-title">Regions</h5>
            <p className="card-text" style={{ fontSize: "4rem" }}>
              {region.length}
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 bg-success text-white">
          <div className="card-body">
            <h5 className="card-title">Countries</h5>
            <p className="card-text" style={{ fontSize: "4rem" }}>
              {country.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
