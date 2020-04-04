import React from "react";
import bell from "../images/bell.svg";
import pexels from "../images/pexels.png";
import magnifyingGlassTwo from "../images/magnifyingGlassTwo.svg";

function UserBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white container-fluid p-1 border">
        <div
          className=" d-flex container-fluid px-2 border"
          style={{
            height: "72px"
          }}
        >
          <div className=" text-center ">
            <img src={magnifyingGlassTwo} alt="" />
          </div>

          <div className="user-profile  d-flex ">
            <a className="" href="/">
              <img
                src={bell}
                alt="FG"
                style={{
                  padding: "9px 0"
                }}
              />
            </a>

            <img
              src={pexels}
              alt="FG"
              className=" "
              style={{
                fontSize: "1.5em",
                width: "55px"
              }}
            />

            <div className="user">
              <strong className="font-weight-bold">Marcus Lindsey</strong>
              <br />
              <span className="small">Recruiter</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserBar;
