import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://www.makeuseof.com/public/build/images/muo-logo-full-colored-light.3d3f051f.svg"
          alt=""
        />
        <div className="widget__contentTitle">
          <a target="_blank" rel="noreferrer" href="https://www.makeuseof.com/">MakeUseOf</a>
          <p>Best tech related blog for technerds.</p>
        </div>
      </div>
			<div className="widget__content">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <a target="_blank" rel="noreferrer" href="https://dev.to/">DEV.to</a>
          <p>Biggest and best forum for web developers.</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
