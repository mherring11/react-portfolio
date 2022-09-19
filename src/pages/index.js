import React, { Fragment } from "react";

function index(){
    return(
        <React.Fragment>
            <nav>
      <div className="container">
      
            
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Get In Touch</a></li>
        </ul>
        <button  id="menu-btn"><span className="material-icons-sharp">menu</span></button>
        <button  id="close-btn"><span className="material-icons-sharp">close</span></button>
      </div>
    </nav>

   
    
    
    
    <section className="landing"/>
        <div className="container"/>
            <div className="socials">
            <a href="https://www.linkedin.com/in/michael-herring-aa602024/" target="_blank"><i className="uil uil-linkedin"></i></a>
            <a href="https://github.com/mherring11" target="_blank"><i className="uil uil-github"></i></a>
        </div>
        
        <div className="info">
            <h1>Full-Stack Web Developer</h1>
            <h3>HI, I'm Mike</h3>
            <p>I'm a Full-Stack Web Developer with a focus on creating clean and user-friendly experiences. Tackling problems and developing solutions is my calling in life.
              </p>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
        <div className="profile-area"/>
            <div className="outer-circle">
            <span className="material-icons-sharp">design_services</span>
            <span className="material-icons-sharp">dns</span>
            <span className="material-icons-sharp">code</span>
            <span className="material-icons-sharp">apps</span>
            </div>

            <div className="inner-circle">
                <img src="./assets/images/profile pic.jpg" alt="My profile pic"/>
            </div>
    


<section className="about" id="about">
  <h1>About me</h1>
  <div className="container">
    <div className="imgage">
      <img src="./assets/images/portfolio.jpg" alt="my about me pic"/>
    </div>
    <div className="info">
      <p>Web developer with an unlimited aspiration to create, design, and develop technical systems and applications. I recently earned a certificate in full-stack development from the University of Texas at San Antonio. During my time, I developed and utilized front-end technologies such as HTML, CSS, and JavaScript. I also gained back-end skills such as Nodejs, Mysql, and Express. I am committed to helping a company achieve top-tier productivity results by utilizing my newly acquired front and back-end programming skills. I am ambitious and will deliver unmatched resolve to any team. I believe my value to the organization will go beyond standard expectations. With my mental tenacity and determination, my goal is to provide services and expertise that become in demand and reputable. My motivation is the opportunity to face any technological problem head-on and implement solutions.
      </p>
                <a href="./assets/images/Michael_Herring_Resume (2).PDF" download className="btn btn-primary"><i className="uil uil-download-alt"></i> Download Resume</a>
    </div>
  </div>
</section>



<section className="skills" id="skills">
  <h1>Skills</h1>
  <div className="container">
      <div className="skill">

          

        <div className="skill">

          <div className="head">
            <div className="left">
              <span className="material-icons-sharp">code</span>
              <h4>Frontend Development</h4>
            </div>
          </div>

          <div className="items">
            <div className="item">
              <h5>HTML</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>80%</h5>
              </div>
            </div>
           

            <div className="item">
              <h5>CSS</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>73%</h5>
              </div>
            </div>
            
            <div className="item">
              <h5>Bootstrap</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>70%</h5>
              </div>
            </div>
         

            <div className="item">
              <h5>JavaScript</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>71%</h5>
              </div>
            </div>
            

            <div className="item">
              <h5>React</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>65%</h5>
              </div>
            </div>
            
          </div>
        </div>
       
        <div className="skill">
          <div className="head">
            <div className="left">
              <span className="material-icons-sharp">dns</span>
              <h4>Backend Development</h4>
            </div>
          </div>
          
        
            <div className="item">
              <h5>Node</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>73%</h5>
              </div>
            </div>
            

            <div className="item">
              <h5>Mongo DB</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>70%</h5>
              </div>
            </div>
            

            <div className="item">
              <h5>MyQSL</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>71%</h5>
              </div>
            </div>
            

            <div className="item">
              <h5>Express</h5>
              <div className="progress-area">
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <h5>65%</h5>
              </div>
            </div>
            
          </div>
        </div>
       
  </div>
</section>




<section className="services" id="services">
  <h1>Services</h1>
  <div className="container">
    <div className="service">
      <span className="material-icons-sharp">design_services</span>
      <h3>Development</h3>
      <p>I'm passionate about coding things from scratch, and enjoy bringing ideas to life in the browser.</p>
    </div>
    <div className="service">
      <span className="material-icons-sharp">language</span>
                <h3>Frontend Applications</h3>
      <p>Create client-side applications while maintaining semantic coding style among other best practices for application optimization. Proficient in HTML, CSS, and JavaScript.</p>
    </div>
    <div className="service">
      <span className="material-icons-sharp">devices</span>
                <h3>Backend Applications</h3>
      <p>Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB</p>
    </div>
  </div>
</section>


<section className="recent-work" id="portfolio">
  <div className="container">
    <h4>My Recent Work</h4>
    <h1>Here Are Some of My Most Recent Projects</h1>
    <div className="projects">
      <div className="project">
        <div className="thumbnail">
          <img src="./assets/images/stay tripn screenshot.png"/>
        <h2>Your one-stop-shop for all your travel information</h2>
        <p>
          Planning a perfect trip takes time and a lot of research. With so much to do and see, it's hard to know where to start. To make it easier on you, with a few clicks of your mouse, we provide points of interest within a 30-mile radius of the location you enter in the "City Search" input form.
        </p>
        <div className="action">
          <a href="https://github.com/mherring11/stay-tripn" target="_blank">Github</a>
          <a href="https://mherring11.github.io/stay-tripn" target="_blank">Live Demo</a>
        </div>
      </div>
      

      <div className="project">
        <div className="thumbnail">
          <img src="./assets/images/To-Market2.png" />
        </div>
        <h2>To-Market</h2>
        <p>
          We are a global marketplace for unique and creative goods. It’s home to special, extraordinary items, from handcrafted pieces to vehicles.</p>
          <p>It’s our mission to keep human connection at the heart of commerce. That’s why we built a place where creativity lives and thrives because it’s powered by people. We help our community of sellers turn their ideas into successful businesses. Our platform connects them with millions of buyers looking for an alternative way to buy.

        </p>
        <div className="action">
          <a href="https://github.com/mherring11/To-Market" target="_blank">Github</a>
          <a href="https://murmuring-retreat-47342.herokuapp.com/" target="_blank">Live Demo</a>
        </div>
      </div>
     

      <div className="project">
        <div className="thumbnail">
          <img src="./assets/images/PWA.png" />
        </div>
        <h2>J.A.T.E (Just Another Text Editor)</h2>
        <p>
          This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline.
        </p>
        <div className="action">
          <a href="https://github.com/mherring11/PWA" target="_blank">Github</a>
          <a href="https://pwa-texted-app.herokuapp.com/" target="_blank">Live Demo</a>
        </div>
      </div>
    

      <div className="project">
        <div className="thumbnail">
          <img src="./assets/images/Run Buddy.png" />
        </div>
        <h2>Run Buddy</h2>
        <p>
          A website that offers fitness training services.
        </p>
        <div className="action">
         
        </div>
      </div>
     
    </div>
    
  </div>
<section>


<section className="contact" id="contact">
  <div className="overlay">
    <div className="container">
      <h1>Get In Touch</h1>
      <p>Whether you have a question or a problem you need solved, contact me and let's talk. </p>
      <form action="https://formspree.io/f/mayvgyvl" method="POST">
        <input type="text" name="Name" placeholder="Name" required/>
        <input type="email" name="Email" placeholder="Email" required/>
        <input type="text" name="Subject" placeholder="Subject" required/>
        <textarea name="Message" placeholder="Message" required></textarea>
        <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
    </div>
  </div>
</section>


<footer>
  <div className="container"/>
    
    <ul>
      <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Let's Talk</a></li>
    </ul>
    <div className="socials">
      <a href="https://www.linkedin.com/in/michael-herring-aa602024/" target="_blank"><i className="uil uil-linkedin"></i></a>
      <a href="https://github.com/mherring11" target="_blank"><i className="uil uil-github"></i></a>
  </div>
  <div className="copyright">
    Copyright &copy; Michael Herring 2022
  </div>
</footer>
<script src="./assets/js/main.js"></script>
        </React.Fragment>
    );
}

export default index;