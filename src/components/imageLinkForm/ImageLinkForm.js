import React from "react";

const ImageLinkForm = () => {
  return(
    <div>
      <p className="f3">
        {'This Magic Brain will detect faces in your photos. Give it a try!'}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5">
          <input className="f4 pa2 w-60 center" type="text" />
          <button className="w-30 grow f4 link ph3 pv dib white bg-light-red">Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;