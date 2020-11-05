
import React, { useState, useEffect } from 'react';
import { getServices } from './apiCore';
import Card from './Card';
import Search from './Search';
import Menu from './Menu'
import '../App.css'
import { Link } from 'react-router-dom';
// import Footer from './Footer';


const Home = () => {

    const [servicesByArrival, setServicesByArrival] = useState([]);

    const [error, setError] = useState(false);



    const loadServicesByArrival = () => {
        getServices().then(data => {
            // console.log(data);

            {
                setServicesByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadServicesByArrival();
    }, []);

    return (
        <div>
            <Menu />

            <br />
            {/* <br /> */}
            
            <div className="row back112">
            <div className="col-lg-8 col-md-8 col-sm-12 ">
            <div className="jumbotron jj1 mt-4">
                <h1 className="cll1 text-center mt-5">CleanLife</h1>
                <h3 className="text-center ">A Stepping To Keep Environment Clean</h3>
            </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12 back1234 act1">
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> */}
                <div>
                    <h1 className="scl123 back123">A Better Feature starts with you</h1>
                </div>
                <p className="back123">Idea to change our environment clean. Who are going to step this idea to build a giant process. Start from now!..</p>
            <br></br>
            <p className="back123"><strong>Through this send your wastage details to us we can collect these in your doorstep....</strong></p>

            {/* <br></br> */}
            {/* <br></br> */}

                <div className="text-center back123 btt12 mt-5">
                <Link to="/create/detail">
                <button className="scl1 jcol22  h5 btn btn-block" style={{background:"#59ab44", color:"white"}}><h4>Step with us</h4></button>
                </Link>
                </div>
            </div>
            </div>
            <div className="container col-md-12 col-sm-12 col-lg-9 ">

                <Search />
                {/* <h2 className="container mb-4">New Arrivals</h2> */}
                <div className="row">

                    {servicesByArrival.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <Card service={service} />
                        </div>
                    ))}


                </div>

            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;