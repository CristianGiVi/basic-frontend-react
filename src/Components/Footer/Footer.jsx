import React from "react";
import "./FooterStyles.css";

import { FollowUs } from "./Components/FollowUs";

import { ClientService } from "./Components/ClientService";

import { WhoWeAre } from "./Components/WhoWeAre";

import { Subscribe } from "./Components/Subscribe";

export const Footer = () => {
  return (
    <div className="container-fluid" id="footer-container">
      <div className="row">
        <FollowUs />

        <ClientService />

        <WhoWeAre />

        <Subscribe />
      </div>

      <div className="row">

        <hr />

        <div className="col-3">
        <p>| Politica de tratamiento de datos</p>
        </div>

        <div className="col-3">
        <p>| Terminos y condiciones</p>
        </div>

        <div className="col-4">
        <p>| SIC</p>
        </div>

        <div className="col-2">
        <p>SIC © 2024, MALVA ONLINE</p>
        </div>

      </div>
    </div>
  );
};
