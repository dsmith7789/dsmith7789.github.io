import React from "react";
import './HomePage.css';

function About() {
    return <div className="home-section">
        <h1>About</h1>
        <h4 className="subheader">Software Engineer focused on cloud infrastructure, automation, and building reliable systems.</h4>
        <div className="about-copy">
        <p> Hi, I'm Dante!
        </p>
        <p> 
            I am a software engineer at Charter Communications (Spectrum), specializing in cloud infrastructure
            and developer tooling. Through my role, I have worked across software engineering, cloud, and DevOps
            teams, developing solutions involving Terraform, Kubernetes, CI/CD pipelines, and backend services.
        </p>
        
        <p>
            I hold a Master's degree in Computer Science from the University of Wisconsin–Madison, where I strengthened 
            my foundation in software development, distributed systems, and computer architecture. Earlier in my career, 
            I worked as a Technical Solutions Engineer at Epic Systems, supporting large healthcare systems and gaining 
            experience in troubleshooting complex systems, database analysis, customer collaboration, and technical mentorship.
        </p>

        <p>
            A consistent theme throughout my work has been building tools that improve reliability and efficiency while helping 
            others grow their technical skills. I have had opportunities to mentor new engineers, teach technical concepts, 
            and support teams as they adopt new technologies.
        </p>

        <p>
            My interests include building large-scale software systems, cloud platforms, automation, and developer 
            productivity tools. I enjoy solving complex technical problems, learning new technologies, and contributing 
            to engineering teams that value collaboration and continuous improvement.
        </p>

        <p> Feel free to connect if you'd like to know more about my experience or projects.
        </p>
        </div>
    </div>
}

export default About;
