import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile7.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "He is a versatile programmer who is comfortable working with a variety of programming languages and frameworks. He is always eager to learn new technologies and is not afraid to take on new challenges.",
    },
    {
      img: profilePic2,
      review:
        "He is a creative and innovative programmer who consistently comes up with fresh ideas for solving complex problems. She is a valuable asset to any team.",
    },
    {
      img: profilePic3,
      review:
        "He is a highly skilled programmer with a deep understanding of software development principles. He is a reliable team player who always delivers high-quality work on time.",
    },
    {
      img: profilePic4,
      review:
        "He is a dedicated and hardworking programmer who is always willing to go the extra mile to ensure that projects are completed successfully. Her positive attitude and strong work ethic make her a pleasure to work with.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
