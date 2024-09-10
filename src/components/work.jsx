import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Work extends React.Component {
    //sets up the initial state of your component
    constructor(props) {
        //calls the constructor 'React.Component' and passes props to it
        super(props);
        this.state = {
            job: [
                {id: "job1", role: "Software Development Analyst", company: "Standard Chartered Bank", date: "Sept 2023 - Present",
                content:
                 <ul>
                    <li>Contributed to front-end development projects for digital channels, enhancing user interfaces for websites and mobile apps using HTML, CSS (Bootstrap), JavaScript (React).</li>
                    <li>Utilized React Testing Library for comprehensive test coverage analysis, improving code quality and reliability.</li>
                    <li>Collaborated in a bootcamp environment, leveraging Java, PostgreSQL, Spring Boot, and front-end technologies to build a robust application.</li>
                    <li>Assisted in maintaining software quality through rigorous testing and troubleshooting, supporting continuous improvement initiatives.</li>      
                </ul>},

                {id: "job2", role: "Process Integration Engineer", company: "Micron Technology", date: "Aug 2022 - Feb 2023",
                content:
                 <ul>
                    <li>Collaborated with Process Engineers to optimize production flow and implement software-driven process improvements.</li>
                    <li>Analyzed daily performance graphs to identify and debug production issues, coordinating with relevant engineers for resolution.</li>
                    <li>Contributed to continuous improvement initiatives, driving process efficiency and operational excellence.</li>    
                </ul>},

                {id: "job3", role: "Talent Development Intern", company: "ByteDance Pte Ltd", date: "Sep 2021 - Nov 2021",
                content:
                <ul>
                   <li>Assisted in designing and implementing innovative programs for performance management, leadership development, and succession planning, contributing to enhanced team capabilities.</li>
                   <li>Worked closely with senior leadership to develop strategic solutions for skill development, supporting a culture of continuous growth.</li>
                   <li>Analyzed and reported on training data and statistics, providing actionable insights for program refinement and alignment with organizational goals.</li>    
               </ul>},

                {id: "job4", role: "Electrical Engineering Intern", company: "Hitachi T&D Systems Asia Pte Ltd", date: "Jan 2021 – Jun 2021",
                content:
                <ul>
                <li>Enhanced project efficiency by preparing and streamlining critical documentation for project, field service, and sales teams.</li>
                <li>Fostered strong client and vendor relationships, ensuring product satisfaction through effective communication and problem resolution.</li>
                <li>Developed precise control schematics and interface drawings for power substations using AutoCAD Electrical, delivering high-quality technical solutions to meet client needs.</li>    
                </ul>}
            ]
        }
    }
    render (){
        return (
        <Container className="container-standard">

            {/* Work title */}
            <div className="title-box">
                        <h1 className="page-title center-title">Work Experience</h1>
            </div>

            {/* Work Details*/}
            <div className="work-list">
                {this.state.job.map(content=>{
                    return(
                        <Row>
                            <Col md={12}>
                                <div className="job-card">
                                    <h3 className="job-role" key={content.id}>{content.role}</h3>
                                    <h5 className="job-details" key={content.id}>{content.company}, {content.date}</h5>
                                    <p className="job-desc" key={content.id}>{content.content}</p>
                                </div>
                            </Col>
                        </Row>
                    )
                })}
            </div>
        </Container> 
        );
    };
};

export default Work;
