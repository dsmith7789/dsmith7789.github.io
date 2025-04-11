import React from "react";
import './HomePage.css';

function Interests() {
    return <div className="home-section">
        <h1>Interests</h1>
        <ul>
            <li>I like to learn as much as I can about programming and software engineering on the side as I can. For instance, 
                I began "grinding Leetcode" in preparation for interviews, and now I try to solve the daily question as a fun brainteaser
                (results pending on if this is an effective interview prep strategy though). You can find me on Leetcode here: 
                <a href="https://leetcode.com/u/dsmith7789/">Leetcode: dsmith7789 </a>
                I'm also always interested in taking courses to learn more, whether official university courses, or through Coursera/Udemy, or 
                anywhere else.
            </li>
            <li>Physical fitness. Right now, this is mostly running, supplemented with some weight lifting and resistance training, but my main 
                focus is building my endurance for longer races. I hope to qualify for (or at least run a qualifying time for) one of the 6 World
                Marathon Majors.
            </li>
            <li>I like to keep up with sports generally (mostly American sports). Huge American football fan, despite not having played the sport myself.
            </li>
        </ul>
    </div>
}

export default Interests;