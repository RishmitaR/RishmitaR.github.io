---
layout: article
---


<h1 style="text-align: center;"> Howdy! I’m <span class="name-highlight">Rishmita</span></h1>
<h3 style="text-align: center;" class="tag-line">A recent college grad looking to bring my multifaceted skills to the tech world</h3>


<section class="about-container">
  <div class="about-text">
    <h2 class="pop">About Me</h2>
    <p>
      I’m a recent Texas A&M alum (whoop!) with a B.S. in Astrophysics and minors in Computer Science and Mathematics. Throughout university I took every opportunity to explore the expansive universe of software development and scientific programming, and I fell in love with learning new technologies to push the limits of my passions. 
    </p>
  </div>
  <div class="about-image">
    <img src="git_profile.jpg" alt="Rishmita Rao">
  </div>
</section>

<section class="tech-section">
  <h2>Skills</h2>

  <div class="tech-grid">

  <div class="tech-card">
    <h3 class="tech-card-title">Programming Languages</h3>
    <p>Python · C/C++ · Javascript/Typescript · HTML/CSS · SQL</p>
  </div>
  <div class="tech-card">
    <h3 class="tech-card-title">Fullstack Frameworks</h3>
    <p>React.js · Express.js · FastAPI · Jekyll</p>
  </div>
  <div class="tech-card">
    <h3 class="tech-card-title">Data Science Frameworks</h3>
    <p>Pandas · Numpy · SciPy · Seaborn · Streamlit</p>
  </div>
  <div class="tech-card">
    <h3 class="tech-card-title">ML/AI Frameworks</h3>
    <p>TensorFlow · TF Recommenders · OpenCV · LangChain · CrewAI</p>
  </div>
  <div class="tech-card">
    <h3 class="tech-card-title">Tools & Databases</h3>
    <p>Git · Docker · Jupyter Notebook · Unix · PostgreSQL · REST APIs</p>
  </div>
  <div class="tech-card">
    <h3 class="tech-card-title">Platforms</h3>
    <p>AWS · Docker </p>
  </div>
  </div>
</section>

<section class="work-experience">
  <h2>Work Experience</h2>

  <button class="accordion">
    <img src="PLC logo.png" alt="PLC" class="card-img-left">
    <div class="accordion-text-right">
      <h3 class="tech-card-title">Laboratory Manager</h3>
      <h4 class="tech-card-text">TAMU Physics Lab Center</h4>
      <h5>June 2022 – Present</h5>
    </div>
  </button>
  <div class="panel">
    <ul>
      <li>Optimized a database of 200+ physics demos using SQL and Python</li>
      <li>Built a CrewAI multi-agent system using LangChain and RAG algorithms</li>
      <li>Developed Python workflows for automated text summarization and Streamlit dashboards</li>
    </ul>
  </div>


  <button class="accordion">
    <img src="aggiesat.webp" alt="AggieSat" class="card-img-left">    
    <div class="accordion-text-right">
      <h3 class="tech-card-title">Laboratory Member</h3>
      <h4 class="tech-card-text">AggieSat</h4>
      <h5>January 2022 – December 2025</h5>
    </div>
  </button>
  <div class="panel">
    <ul>
      <li>Developed autonomous rover navigation software in C++ and Python with OpenCV</li>
      <li>Maintained RVM matrices and subsystem documentation</li>
      <li>Managed $1,000 subsystem budget and coordinated hardware procurement</li>
    </ul>
  </div>

<button class="accordion">
  <img src="tamuphys.jpg" alt="JWST" class="card-img-left">    
  <div class="accordion-text-right">
    <h3 class="tech-card-title">Undergraduate Researcher</h3>
    <h4 class="tech-card-text">AggieSTAAR Research Experience</h4>
    <h5>May 2024 – August 2024</h5>
  </div>
</button>
<div class="panel">
  <ul>
    <li>Analyzed 1,000+ JWST observations using Python (NumPy, Pandas, SciPy)</li>
    <li>Applied MCMC fitting with emcee and Astropy to model stellar populations</li>
    <li>Containerized pipeline with Docker, reducing setup from 8 hours to 1 hour</li>
    <li>Presented methodology at the 245th American Astronomical Society Meeting</li>
  </ul>
</div>


<section class="projects">
  <h2 class="pop">Projects</h2>

  <button class="accordion project-accordion"><span class="tech-card-title">Album of the Week Website & Discord Bot</span><a href="https://www.tamuaotw.com">www.tamuaotw.com</a></button>
  <div class="panel">
    <ul>  
      <li>Developed JavaScript Discord bot with PostgreSQL integration for tracking posted song recommendations and updating weekly Spotify playlist</li>
      <li>Contributed to full-stack React.js + Express.js web app supporting album nominations, voting, and reviews</li>
      <li>Implemented asynchronous event handling and fail-safe scripts, applying AGILE sprints for iterative feature deployment</li>
    </ul>
  </div>

  <button class="accordion project-accordion"><span class="tech-card-title">Lifetime Albums Web Application</span><a href="https://github.com/RishmitaR/Album-Per-Year">github.com/RishmitaR/Album-Per-Year</a></button>
  <div class="panel">
    <ul>
      <li>Built full-stack web app using React.js, Express.js, and FastAPI for users to generate shareable album charts</li>
      <li>Created PostgreSQL database of 40,000+ ListenBrainz profiles for large-scale recommendations</li>
      <li>Trained a Two Tower Recommendation model with TensorFlow Recommenders to serve relevant albums to users; trained and deployed via AWS SageMaker</li>
      <li>Implemented OAuth login for Spotify and Last.fm and generated real-time feature vectors for model inference</li>
    </ul>
  </div>
</section>

<script>
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
}
</script>




