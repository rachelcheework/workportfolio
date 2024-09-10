import React from "react";
import '../App.css';
import { Container, Button} from "react-bootstrap";
import { ReactTyped } from "react-typed";

const Home = () => {
    
    return (
        <Container className="container-standard home-container">
      {/* NOTE TO SELF: className='text-center' makes all elements center horizontally only but button not aligned */}

        {/* name header */}
        <h1 className="intro-title text-center">Hello, my name is Rachel!</h1>

        {/* typing effect for subtitle */}
        <p className="intro-subtitle text-center">
            I'm a &lt;{" "}
                <ReactTyped
                strings={[
                    "Frontend Developer",
                    "QA Tester",
                    "Electrical Engineer"
                ]}
                typeSpeed={60}
                backDelay={1100}
                backSpeed={30}
                loop
                />
            /&gt; 
        </p>
        
        {/* button to download resume */}
            <Button className='resume-btn' variant="primary" href="/resume.pdf" download>
                Download My Resume
            </Button>
 
        </Container>
      
    );
};

export default Home;
