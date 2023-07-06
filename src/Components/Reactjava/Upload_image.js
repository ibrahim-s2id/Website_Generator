import React from "react";
import '../css/style.css';

class Upload_image extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="btn_upload"><label className="choose_photo_label">
          <input type="file" className="choose_photo_input" name="image-upload" id="input" onChange={this.imageHandler} />
          <span className="choose_photo_text">Choose a Photo</span>
        </label></div>


      </div>
    );
  }
}

export default Upload_image;