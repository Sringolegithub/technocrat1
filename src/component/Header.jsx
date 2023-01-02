import React from "react";
const Header=()=>{
    return(
        <>
         {/* <!-- ---------------header contain--------------- --> */}
        <div className="header">
            <div className="conatiner">
                <nav>
                    <a to="index.html">
                        <img src="images/logo.jpg" width="70px" height="70px" to="/index.html"/>
                    </a>
                    <h1> TECHNOCRAT</h1>
                    <ul id="sidemenu">
                        <i className="fa fa-times" onclick="closemenu()"></i>

                        <li><a to="About.html">ABOUT US </a><span><b>+</b></span></li>
                        <li><a to="Eepertise.html">EXPERTISE</a><span><b>+</b></span></li>
                        <li><a to="Solutions.html">SOLUTIONS</a><span><b>+</b></span></li>
                        <li><a to="Thought-Center.html">THOUGHT CENTER</a><span><b>+</b></span></li>
                        <li><a to="ContactUs.html">CONTACT US</a><span><b>+</b></span></li>
                        <li><a to="JoinUs.html">JOIN US</a><span><b>+</b></span></li>
                    </ul>
                    <i className="fa fa-bars" onclick="openmenu()"></i>
                </nav>
            </div>
            <div className="container-2">
                <div className="container-col-2">
                    <p>We make dreams career happen</p>
                    <p>We make great team happen</p>
                    <h1>We Make it happen</h1>

                </div>

            </div>
        </div>

        </>
    );
};
export default Header;