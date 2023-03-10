import React from "react";
import CenterContent from "../CenterContent/CenterContent";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span
                className="fs-5 d-none d-sm-inline mt-3"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                <i class="fas fa-home"></i> Home
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline text-white">
                    <i class="fas fa-layer-group"></i> &nbsp;Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span
                    className="ms-1 d-none d-sm-inline text-white"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    Summary
                  </span>{" "}
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-white">
                        <i class="fas fa-chart-line"></i> &nbsp;Statistics
                      </span>
                    </a>
                  </li>
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-white">
                        <i class="fas fa-map"></i> &nbsp;Countries
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-white">
                        <i class="fas fa-tag"></i> &nbsp;Topics
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-white">
                        <i class="fas fa-hotel"></i> &nbsp;Sectors
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline text-white">
                        <i class="fas fa-globe"></i> &nbsp;Regions
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr />
          </div>
        </div>

        <div className="col py-3">
          <CenterContent />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
