import React from "react";
import loc from "./Images/location.png";

const Info = () => {
  return (
    <div className="frame">
      <div className="row m-4 ">
        <div className="col-4 border-bottom">
          <img
            className="pic"
            src="https://source.unsplash.com/WLxQvbMyfas"
            alt="japan"
          />
        </div>

        <div className="col-8 border-bottom">
          <span>
            <img src={loc} alt="loc" />
            <p className="p1">JAPAN</p>
            <a className="p2" href="https://source.unsplash.com/WLxQvbMyfas">
              view on Google Maps
            </a>
          </span>
          <h4 className="head">Mount Fuji</h4>
          <p className="p">
            <b>12 Jan, 2021 - 24 Jan, 2021</b>
          </p>
          <p className="p">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <div className="row m-4">
        <div className="col-4 border-bottom pt-2">
          <img
            className="pic"
            src="https://source.unsplash.com/JmuyB_LibRo"
            alt="
            Australia"
          />
        </div>

        <div className="col-8 border-bottom mt-2">
          <span>
            <img src={loc} alt="loc" />
            <p className="p1">AUSTRALIA</p>
            <a className="p2" href="https://source.unsplash.com/JmuyB_LibRo">
              view on Google Maps
            </a>
          </span>
          <h4 className="head">Sydney Opera House</h4>
          <p className="p">
            <b>27 May, 2021 - 8 Jun, 2021</b>
          </p>
          <p className="p">
            The Sydney Opera House is a multi-venue performing arts centre in
            Sydney. Located on the banks of the Sydney Harbour, it is often
            regarded as one of the 20th century's most famous and distinctive
            buildings.
          </p>
        </div>
      </div>
      <div className="row m-4 ">
        <div className="col-4 border-bottom pt-3">
          <img
            className="pic"
            src="https://source.unsplash.com/3PeSjpLVtLg"
            alt="Norway"
          />
        </div>

        <div className="col-8 border-bottom mt-3">
          <span>
            <img src={loc} alt="loc" />
            <p className="p1">NORWAY</p>
            <a className="p2" href="https://source.unsplash.com/3PeSjpLVtLg">
              view on Google Maps
            </a>
          </span>
          <h4 className="head">Geirangerfjord</h4>
          <p className="p">
            <b>01 Oct, 2021 - 18 Nov, 2021</b>
          </p>
          <p className="p">
            The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og
            Romsdal county, Norway. It is located entirely in the Stranda
            Municipality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
