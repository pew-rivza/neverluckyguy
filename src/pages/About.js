import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from 'react-progressive-image';
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import {declOfNum} from "../utils/functions";


function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [teamCompetence, setTeamCompetence] = useState([]);
  const [eventParticipation, setEventParticipation] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: !toggler,
    });
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/achievements").then((response) => {
      setAchievements(response.data);
    });
    axios.get("/api/teamCompetence").then((response) => {
      setTeamCompetence(response.data);
    });
    axios.get("/api/eventParticipation").then((response) => {
      setEventParticipation(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Обо мне" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <ProgressiveImage
                  src={information.aboutImage}
                  placeholder="/images/about-image-placeholder.png"
                >
                  {src => <img src={src} alt="aboutimage" onClick={() => handleToggler(!toggler)} />}
                </ProgressiveImage>
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Пять лет работаю в сфере разработки электроники. Совместно с командой специализируюсь на полном цикле
                  разработки и производства электрических узлов низковольтного оборудования и различных роботизированных
                  систем.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>ФИО</b> {information.fullname}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Возраст</b> {information.age} {declOfNum(information.age, ['год', 'года', 'лет'])}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Гражданство</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Языки</b> {information.language}
                    </li>
                  )}
                  {!information.software ? null : (
                      <li>
                        <b>ПО</b> {information.software}
                      </li>
                  )}
                  {!information.stack ? null : (
                      <li>
                        <b>Стек</b> {information.stack}
                      </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b> {information.freelanceStatus}
                    </li>
                  )}
                </ul>
                <a rel="noopener noreferrer" target="_blank" href={information.cvfile} className="mi-button">
                  Посмотреть резюме
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Предоставляемые услуги" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {achievements.map((achievement) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={achievement.title}
                >
                  <Service content={achievement} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Компетенции команды" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {teamCompetence.map((competence) => (
                  <div
                      className="col-lg-4 col-md-6 col-12 mt-30"
                      key={competence.title}
                  >
                    <Service content={competence} />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Участие в мероприятиях" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {eventParticipation.map((event) => (
                  <div
                      className="col-lg-4 col-md-6 col-12 mt-30"
                      key={event.title}
                  >
                    <Service content={event} />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*<div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">*/}
      {/*  <div className="container">*/}
      {/*    <Sectiontitle title="Участие в мероприятиях" />*/}
      {/*    <div className="row justify-content-center">*/}
      {/*      <div className="col-12">*/}
      {/*        <Slider className="mi-testimonial-slider" {...sliderSettings}>*/}
      {/*          {reviews.map((review) => (*/}
      {/*            <Testimonial key={review.id} content={review} />*/}
      {/*          ))}*/}
      {/*        </Slider>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Layout>
  );
}

export default About;
