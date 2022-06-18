import React, { Fragment } from "react";
import "./LossReport.css";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://media.discordapp.net/attachments/643501117095018506/987125062291320842/Untitled-3.png?width=1260&height=582",
  },
  {
    url: "https://media.discordapp.net/attachments/643501117095018506/987128186913554462/Untitled-6.png",
  },
  {
    url: "https://media.discordapp.net/attachments/643501117095018506/987128590275584120/Untitled-1.png",
  },
  {
    url: "https://media.discordapp.net/attachments/643501117095018506/987129025464008704/Untitled-2.png",
  },
  {
    url: "https://media.discordapp.net/attachments/643501117095018506/987129443539632198/Untitled-3.png",
  },
];

export default function LossReport() {
  return (
    <Fragment>
      <br />
      <br />
      <img
        className="imgstyle"
        src="https://www.upstate.edu/universitypolice/images/lost-found-banner.jpg"
        alt="lnf"
      />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <h1 className="fnt"> Required Documents</h1>
      <br />
      <br />
      <div className="imgslider">
        <SimpleImageSlider
          width={1100}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>

      <br></br>
      <br></br>
      <br></br>

      <hr />
      <br></br>
      <br></br>

      <h1 className="fnt">Processing Fee</h1>
      <img
        className="imgstyle1"
        src="https://pngimg.com/uploads/free/free_PNG90756.png"
        alt="free"
      />
    </Fragment>
  );
}
