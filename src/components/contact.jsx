import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

class Contact extends React.Component{
    //sets up the initial state of your component
    constructor(props) {
        //calls the constructor 'React.Component' and passes props to it
        super(props);
        this.state = {
            contacts: [
                {id: "github", link:"https://github.com/rachelcheework", content: "Github"},
                {id: "linkedin", link:"https://www.linkedin.com/in/rachelcheework/", content: "LinkedIn"},
                // {id: "email", link:"", content: "Email"}
            ]
        }
    }

    render(){
            //email button function
        const handleEmailClick = () => {
            window.location.href = 'mailto:rachelcheework@gmail.com';
          };
        return(
            <Container className="container-standard text-center">
                    {/* Contact Me title */}
                    <div className="title-box">
                        <h1 className="page-title center-title">Contact Me</h1>
                    </div>

                <Row className="contact-content">
                    {/* left column */}
                    <Col className="contact-left-col" xs={12} md={6}>

                        {/* Contact desc */}
                        <div className="contact-desc">
                            <p className="contact-p"> I'd love to connect and chat about anything!</p>
                        </div>
                    </Col>

                    {/* right column */}
                    <Col className="contact-right-col" xs={12} md={6}>

                            {/* Contact links/buttons */}
                            <div className="contact-links">
                                {this.state.contacts.map(content=>{
                                    return(
                                        <a key={content.id} href={content.link} target="_blank" rel="noopener noreferrer">
                                        <Button className="contact-btn" size="lg">
                                            {content.content}
                                        </Button>
                                    </a>
                                    )
                                })}
                                <Button className="contact-btn" onClick={handleEmailClick} size="lg">
                                    Email Me
                                </Button>
                            </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;