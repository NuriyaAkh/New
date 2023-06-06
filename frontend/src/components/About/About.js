import React from 'react';
import './About.css';
import me from '../../images/me.png';

const About = () => {
  return (
    <section className="profile">
      <img src={me} alt="author" className="profile__img" />

      <div className="profile__text">
        <p className="profile__title">About the author</p>
        <p className="profile__info">
          This block describes the project author. Here you should indicate your name, what you do,
          and which development technologies you know. You can also talk about your experience with
          Practicum, what you learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
};
export default About;
