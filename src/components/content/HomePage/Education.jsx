import React from "react";
import './HomePage.css';
import Section from "./Section";

function Education() {
    return <div className="home-section">
        <h1>Education</h1>
        <Section 
            title="University of Wisconsin-Madison"
            location="Madison, Wisconsin"
            description="M.S., Computer Science"
            imageUrl="/images/w_crest.jpg"
            imageAlt="UW-Madison"
            highlights={
                <>
                Relevant Courses: 
                Object Oriented Programming, 
                Data Structures and Algorithms, 
                Database Management Systems, 
                Operating Systems, 
                Computer Networks, 
                Artificial Intelligence, 
                Information Security, 
                Big Data Systems, 
                Building User Interfaces
                </>
            }
            tech={[
                "Python", 
                "Java",
                "C",
                "C++",
                "React.js",
                "Docker",
                "Pytorch",
                "Spark",
                "Cassandra",
                "Kafka"
            ]}
        />
        <Section 
            title="University of Cincinnati"
            location="Cincinnati, Ohio"
            description="B.S., Chemical Engineering"
            imageUrl="/images/uc_crest.png"
            imageAlt="Cincinnati"
            highlights={
                <>
                Relevant Experience: 
                Teaching Assistant for Engineering Foundations and Engineering Models classes
                </>
            }
            tech={[
                "MATLAB"
            ]}
        />
    </div>
}

export default Education;