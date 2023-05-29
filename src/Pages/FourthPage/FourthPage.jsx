import React from "react";
import "./FourthPage.scss";
import { useRef, useState } from "react";
import "intersection-observer";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

function FourthPage() {
  const scrollRef = useRef(null);

  const listRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: scrollRef });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    listRef.current.style.transform = `translateX(${latest * -50}%)`;
  });

  //  Hover text
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const noneHoverImg =
    "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg";
  const hoverImg = "";

  const [image, setImage] = useState(noneHoverImg);

  return (
    <>
      <div ref={scrollRef} className="experiment_container">
        <div className="experiment_sticky">
          <h1 className="experiment_header">
            <span style={{ color: "rgba(0, 0, 0, 0.899)", fontWeight: 200 }}>
              OUR
            </span>{" "}
            <span style={{ color: "rgb(0, 0, 184)", fontWeight: 200 }}>
              EXPERIMENTS
            </span>{" "}
          </h1>

          <div ref={listRef} className="experiment_list">
            <div
              className="experiment_item"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="experiment_img"
                src="https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg"
                alt="photo"
              />
              <motion.div
                className="experiment_overlay"
                initial={{ y: "-30px" }}
                animate={{ y: "0" }}
                transition={{ duration: 0.5 }}
              >
                <a href="#" className="experiment_overlay--discover">
                  001
                </a>
                <a href="#" className="experiment_overlay--discover">
                  NAME
                </a>
                <div className="experiment_item--link">
                  <p>The description</p>
                </div>
              </motion.div>
            </div>

            <div
              className="experiment_item"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="experiment_img"
                src="https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg"
                alt="photo"
              />
              <motion.div
                className="experiment_overlay"
                initial={{ y: "-30px" }}
                animate={{ y: "0" }}
                transition={{ duration: 0.5 }}
              >
                <a href="#" className="experiment_overlay--discover">
                  001
                </a>
                <a href="#" className="experiment_overlay--discover">
                  NAME
                </a>
                <div className="experiment_item--link">
                  <p>The description</p>
                </div>
              </motion.div>
            </div>

            <div
              className="experiment_item"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="experiment_img"
                src="https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg"
                alt="photo"
              />

              <motion.div
                className="experiment_overlay"
                initial={{ y: "-30px" }}
                animate={{ y: "0" }}
                transition={{ duration: 0.5 }}
              >
                <a href="#" className="experiment_overlay--discover">
                  001
                </a>
                <a href="#" className="experiment_overlay--discover">
                  NAME
                </a>
                <div className="experiment_item--link">
                  <p>The description</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourthPage;

// <>
//   <div className="fourth-page" ref={currRef}>
//     <div className="experiments--container">
//       <div className="experiments--heading--container">
//         <div
//           className="experiments--heading"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <motion.h3 className="span">OUR EXPERIMENTS 🧪</motion.h3>
//         </div>
//       </div>

//       {isInView && (
//         <div className="card-section">
//           {/* <Fade left> */}
//           <motion.div
//             className="experiments--card card-1 card-back targetDiv"
//             onMouseEnter={() => {
//               setImgHover(true);
//               setImgIdHover("img1");
//             }}
//             onMouseLeave={() => {
//               setImgHover(false);
//               setImgIdHover(null);
//             }}
//             animate={{
//               y: 0,

//               //  5,
//             }}
//             initial={{
//               y: "200px",
//             }}
//             transition={{
//               duration: 1,
//             }}
//           >
//             {(!imgHover || imgId === "img2") && (
//               <img
//                 src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png.webp"
//                 alt=""
//                 className="hidden"
//               />
//             )}
//             {imgHover && imgId === "img1" && (
//               <img
//                 src="https://media.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"
//                 alt=""
//                 className="hidden"
//               />
//             )}
//             <div className="description--container">
//               <a href="/">
//                 <p>THE EVOLBITS</p>
//                 <p style={{ fontWeight: 200, fontSize: "15px" }}>
//                   A Rewind Story Of A LifeForm
//                   {/* <img src={goTO} alt="" /> */}
//                 </p>
//               </a>
//             </div>
//           </motion.div>
//           {/* </Fade> */}
//           {/* <Fade right> */}
//           <motion.div
//             className="experiments--card card-2 card-back targetDiv"
//             onMouseEnter={() => {
//               setImgHover(true);
//               setImgIdHover("img2");
//             }}
//             onMouseLeave={() => {
//               setImgHover(false);
//               setImgIdHover(null);
//             }}
//             animate={{
//               y: 0,

//               //  5,
//             }}
//             initial={{
//               y: "200px",
//             }}
//             transition={{
//               duration: 1,
//             }}
//           >
//             {(!imgHover || imgId === "img1") && (
//               <img
//                 src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png.webp"
//                 alt=""
//                 className="hidden"
//               />
//             )}
//             {imgHover && imgId === "img2" && (
//               <img
//                 src="https://openseauserdata.com/files/4f7f4845bbb2fe94a713fd5d2b00d4ae.gif"
//                 alt=""
//                 className="hidden"
//               />
//             )}
//             <div className="description--container">
//               <a href="/">
//                 <p>COMING SOON</p>
//                 {/* <p style={{ fontWeight: 200, fontSize: "15px" }}>
//                     <img src={goTO} alt="" />
//                   </p> */}
//               </a>
//             </div>
//           </motion.div>
//           {/* </Fade> */}
//           {/* <Fade top>
//             <div className="experiments--card card-3">
//               <img
//                 src="https://openseauserdata.com/files/4f7f4845bbb2fe94a713fd5d2b00d4ae.gif"
//                 alt=""
//                 className="hidden"
//               />
//             </div>
//           </Fade>
//           <Fade top>
//             <div className="experiments--card card-4">
//               <img
//                 src="https://d1mjtvp3d1g20r.cloudfront.net/2022/02/14115405/alien-ape.gif"
//                 alt=""
//                 className="hidden"
//               />
//             </div>
//           </Fade> */}
//         </div>
//       )}
//     </div>
//   </div>
// </>
