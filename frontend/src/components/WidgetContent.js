import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
			<a target="_blank" rel="noreferrer" href="https://www.makeuseof.com/">
        <img
          src="https://www.makeuseof.com/public/build/images/muo-logo-full-colored-light.3d3f051f.svg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h2>MakeUseOf</h2>
          <p>Best tech related blog for technerds.</p>
        </div>
				</a>
      </div>

			<div className="widget__content">
				<a target="_blank" rel="noreferrer" href="https://www.medium.com/">
					<img
						src="https://miro.medium.com/max/8976/1*Ra88BZ-CSTovFS2ZSURBgg.png"
						alt=""
					/>
					<div className="widget__contentTitle">
						<h2>Medium</h2>
						<p>Every idea needs a - Medium</p>
					</div>
				</a>
      </div>
			
			<div className="widget__content">
				<a target="_blank" rel="noreferrer" href="https://www.dataquest.io/">
					<img
						src="https://www.dataquest.io/wp-content/uploads/2022/02/dq-logo.svg"
						alt=""
					/>
					<div className="widget__contentTitle">
						<h2>Dataquest</h2>
						<p>Biggest slack community for data professionals</p>
					</div>
				</a>
      </div>

			<div className="widget__content">
				<a target="_blank" rel="noreferrer" href="https://dev.to/">
					<img
						src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
						alt=""
					/>
					<div className="widget__contentTitle">
						<h2>DEV.to</h2>
						<p>Biggest and best forum for web developers.</p>
					</div>
				</a>
      </div>
    </div>
  );
}

export default WidgetContent;
