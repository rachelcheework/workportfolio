import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends React.Component {
    //sets up the initial state of your component
    constructor(props) {
        //calls the constructor 'React.Component' and passes props to it
        super(props);
        this.state = {
            skills: [
                {id: "html", icon: "./skills-icons/icons8-html5-48.png", content: "HTML"},
                {id: "css", icon: "./skills-icons/icons8-css3-48.png", content: "CSS"},
                {id: "js", icon: "./skills-icons/icons8-javascript-46.png", content: "JavaScript"},
                {id: "react", icon: "./skills-icons/icons8-react-js-48.png", content: "ReactJS"},
                {id: "postgresql", icon: "./skills-icons/icons8-postgresql-48.png", content: "PostgreSQL"}
            ],
            description: [
                {id: "para-1", content: "I am an Electrical Engineering Graduate from NUS that tried coding one day. I started picking up Python on my own and discovered my interest in the Frontend stack."},
                {id: "para-2", content: "I began learning coding languages/frameworks in my free time for fun too." },
                {id: "para-3", content: "Other than that, my other interests lie in exploring different sports and hobbies. I picked up crotcheting and tennis. I might pick up bouldering also because someone said it was like solving a puzzle."}
            ]
        }
    }
    render (){
        return (
        <Container className="container-standard">
            <Row>
                {/* left column */}
                <Col xs={12} md={6}>

                    {/* About Me title */}
                    <div className="title-box">
                        <h1 className="page-title about-title">About Me</h1>
                    </div>

                    {/* list of desc */}
                    <div className="desc-list">
                        {this.state.description.map(content=>{
                            return(
                                <p className="desc" key={content.id}>
                                    {content.content}
                                </p>
                            )
                        })}
                    </div>
                </Col>

                {/* right column */}            
                <Col xs={12} md={6}>

                    {/* Skill title */}
                    <div className="title-box">
                        <p className="page-title about-title">Skills</p>
                    </div>

                    {/* list of skills */}
                    <div className="skills-list">
                        {this.state.skills.map(content=>{
                            return(
                                <p className="skills" key={content.id}>
                                    {content.content}
                                </p>
                                // <img className="skills-icon" key={content.id} src={content.icon}/>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container> 
        );
    };
};

export default About;
