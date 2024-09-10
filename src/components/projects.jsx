import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Projects extends React.Component{
    //sets up the initial state of your component
    constructor(props) {
        //calls the constructor 'React.Component' and passes props to it
        super(props);
        this.state = {
            projDetails: [
                {id: "proj-1", pic: "pic-1", content:"content-1"},
                {id: "proj-2", pic: "pic-2", content:"content-2"},
                {id: "proj-3", pic: "pic-3", content:"content-3"}
            ]
        }
    }
    render(){
        //not sure if i should put const settings here
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        {/* Projects title */}
                        <div className="title-box">
                            <h2 className="title-left">Projects</h2>
                        </div>

                        {/* Project carousell */}
                        <Slider {...settings}>
                            <div className="carousell">
                                {this.state.projDetails.map((content)=>(
                                    <div className="card">
                                        <div className="pic">
                                            <img className="pic-indiv" src={content.pic} alt=""/>
                                        </div> 
                                        <div className="text-and-button flex">
                                            <p>{content.id}</p>
                                            <p>{content.content}</p>
                                            <button>Read More</button>
                                        </div>                                               
                                    </div>
                                ))}
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
}
}

export default Projects;
