import React from "react";
import { Container } from "react-bootstrap";
import cocktailImg from'../img/cocktail.jpg';
import { Button } from "react-bootstrap";

const Dashboard = (props) => {
    return(
        <Container>
            <div className="row">
                <div className="mt-5 col-md-6 text-center">
                    <h4>Developed By: <b style={{ fontFamily: "Permanent Marker"}}>Ryan Hardy</b></h4>
                    <h4 className="mt-3">
                        Portfolio: <b style={{ fontFamily: "Permanent Marker"}}>
                            <Button className="btn btn-info">
                                <a href="https://www.rh-web-design.co.uk/" target="_blank" className="text-light">
                                    Porfolio
                                </a>
                            </Button>
                        </b>
                    </h4>
                    <h4 className="mt-3">
                        GitHub: <b style={{ fontFamily: "Permanent Marker"}}>
                            <Button className="btn btn-info">
                                <a href="https://github.com/Ryan-Hardy-Dev" target="_blank" className="text-light">
                                    GitHub
                                </a>
                            </Button>
                        </b>
                    </h4>
                    <h5 className="mt-3">An application developed for Cocktail Lovers 🍹</h5>
                    <h5 className="mt-3">Find out...</h5>
                    <ul className="list-group w-75 mx-auto mt-3">
                        <li className="list-group-item">Cocktail Names</li>
                        <li className="list-group-item">How they should look</li>
                        <li className="list-group-item">Ingredients</li>
                        <li className="list-group-item">Instructions on how to make</li>
                        <li className="list-group-item">The correct glass to serve in</li>
                    </ul>
                    <Button className="btn btn-info mt-3">
                        <a href="/cocktails" className="text-light" style={{ fontFamily: "Permanent Marker"}}>
                            View Cocktails🍸
                        </a>
                    </Button>
                </div>
                <div className="mt-5 col-md-6">
                    <img 
                        src={cocktailImg} 
                        alt="cocktail image"
                        className="col-md-12 "
                    />
                    <h6 className="text-center"><span>Photo by <a href="https://unsplash.com/@seitamaaphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sandra Seitamaa</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></h6>
                </div>
            </div>
        </Container>
    );
}

export default Dashboard;