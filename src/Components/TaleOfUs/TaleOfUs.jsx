import React, { useRef } from "react";
import "./TaleOfUs.scss";
import { useSelector } from "react-redux";
import FifthPage from "../../Pages/FifthPage/FifthPage";

function TaleOfUs(props) {
  const id = useSelector((state) => state.bgColor.id);
  const isClick = useSelector((state) => state.bgColor.isClicked);

  return (
    <>
      {id === "about" && isClick && (
        <div className="aboutus--container">
          <h1>ABOUT US</h1>
          <div className="body--container">
            <div className="img--container">
              <img
                src="https://images.unsplash.com/photo-1612805232759-791e417dab4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyY2hpY3R1cmV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="test"
              />
            </div>
            <div className="p--container">
              <div className="quote--container">
                <p>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, enim recusandae, quaerat voluptatem totam corrupti.
                  "
                </p>
              </div>
              <div className="para--container">
                <p>
                  Epoch is a multidisciplinary digital creative studio based in
                  Amsterdam. We create immersive digital spaces that are
                  challenging the ways people interact with brands. Our team is
                  comprised of designers, developers and creatives driven by the
                  desire to create work that moves people and differentiates
                  brands.
                </p>
                <p>
                  With more than a decade of experience in the digital space, we
                  are a trusted partner for leading brands across industries. We
                  are collaborative by nature. Our process centers on clear
                  communication with one another and our partners so projects
                  are organized, challenges are identified, and goals are
                  realized.
                </p>
                <p>
                  We strive to meet and exceed our partners' needs and create
                  the best possible experiences across the board.
                </p>
              </div>
            </div>

            <div className="detail-card_container">
              <div className="detail-card_item detail-card_one">
                <div className="detail-card_header">1</div>
                <div className="detail-card_description">
                  <p>
                    Design: <br /> Art direction, creative direction, brand
                    design, design system, wireframes & prototyping, app &
                    e–commerce, social content, motion design, CGI.
                  </p>
                </div>
              </div>

              <div className="detail-card_item detail-card_two">
                <div className="detail-card_header">2</div>
                <div className="detail-card_description">
                  <p>
                    Technology: <br /> Front–end, back–end, headless shopify
                    e–commerce, experimental & creative development, hybrid
                    native apps, web3, webgl.
                  </p>
                </div>
              </div>

              <div className="detail-card_item detail-card_three">
                <div className="detail-card_header">3</div>
                <div className="detail-card_description">
                  <p>
                    Brand: <br />
                    Insights, strategy, naming, positioning, tone of voice,
                    social strategy, content strategy, copywriting.
                  </p>
                </div>
              </div>

              <div className="detail-card_item detail-card_img">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaleOfUs;
