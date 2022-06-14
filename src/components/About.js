import React from "react";
import kwon from '../images/do-kwon.jpg'

export default function About() {
  return (
    <div>
    <div id="about"></div>
    <div className="about-main container">
      <div className="row">
        <div className="col-md-6">
          <h2>PROJECT &amp; ECOSYSTEM</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <a href="#" className="btn btn-warning">WHITEPAPER</a>
        </div>
        <div className="col-md-6 d-flex align-items-center py-5 py-md-0">
            <img src={kwon} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}
