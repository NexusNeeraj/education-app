import React from 'react';
import './Main.css';

const Main = () => {

      return (
            <section className='hero-section'>
                  <div className='content'>
                        <h2>Welcome to</h2>
                        <h1>Nebula Nexus <br/>Innovations</h1>
                        <p>"Welcome to our educational hub, where we believe in a hands-on approach to learning. Our program go beyond theory, focusing on practical knowledge that prepares students for real-world challenges. Immerse yourself in an educational experience that empowers you with the skills needed to thrive in today's dynmic industries."</p>
                        <br/>
                        <button href='/'>About Us</button>
                  </div>
                  <div className='student-img'>
                        <img src={require('../assets/student image.jpg')} alt='student' style={{ height: "400px" }}/>
                  </div>
            </section>
      );
};

export default Main;