import React from "react";
import { ExclamationCircleFilled, PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const Outlets = () => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#ffcce6" }}>
                <div style={{ backgroundColor: "#802000", padding: "2px 0px 2px 0px", textAlign: "center", color: "white" }}>
                    <p style={{ marginTop: "1%" }}>Become a Franchise  Partner <button style={{ color: "white", backgroundColor: "transparent", padding: "4px" }} type="button">Join Us</button></p>
                </div>
                <div className="transbox" style={{ backgroundColor: "#ffb3ff", opacity: " 0.7" }}>
                    <div className="row">
                        <div className="col-4">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/08/logo1.png"
                                style={{ height: "70px", width: "300px", fontWeight: "bold" }} />
                        </div>
                        <div className="col-8    ">
                            <button type="button" onClick={() => navigate('/home')} style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>Home</button>
                            <button type="button" onClick={() => navigate('/aboutus')} style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>About Us</button>
                            <button type="button" onClick={() => navigate('/franchise')} style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>Franchise</button>
                            <button type="button" onClick={() => navigate('/outlest')} style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>Our Outlets</button>
                            <button type="button" onClick={() => navigate('/gallery')} style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>Gallery</button>
                            <button type="button" onClick={() => navigate('/contact')} style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>Contact</button>
                            <button onClick={() => navigate('/dessertino')} type="button" style={{ color: "#802000", marginRight: "5%", border: "none", background: "transparent", fontWeight: "bold" }}>Dessertino</button>
                            <button type="button" onClick={() => navigate('/menu')} style={{ color: "#802000", borderRadius: "30px", border: "none", padding: "10px 25px 10px 25px", fontWeight: "bold" }}>Menu</button>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <h1 className="img3" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "100%" }}><b>our outlest</b></h1>
                        </div>
                        <div>
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: "10%" }}>
                    <div className="row">
                        <div className="col-4">
                            <h1 style={{ color: "#802000", fontFamily: "cursive" }}><b>Find in Store</b></h1>
                            <p>
                                Active Filter:  <c style={{ color: "white", backgroundColor: "green", padding: "0% 6% 0% 6%", borderRadius: "5px" }}> Santushti Shakes & More<br /> 25 km</c>
                            </p>
                            <div style={{ height: "70px", border: "2px solid gray", padding: "6% 0% 3% 16%" }}>
                                <p>
                                    Oops! Something Went Wrong
                                </p>
                            </div>
                            <p>
                                Get my Position Show all<br /> Stores
                            </p>
                            <button type="button" style={{ border: "none", backgroundColor: "white", borderRadius: "20px", padding: "5px 20px  5px 20px" }}>Find Nearest Store</button>
                            <div>
                                <h3 style={{ fontFamily: "Arial Black", color: "#802000" }}>Filter</h3>
                                <select style={{ width: "250px" }}>
                                    <option>Santushti Shakes & /More</option>
                                    <option>Select a Category</option>
                                </select><br /><br />
                                <h3>Radius</h3>
                                <select style={{ width: "250px" }}>
                                    <option>5 km</option>
                                    <option>10 km</option>
                                    <option>25 km</option>
                                    <option>50 km</option>
                                    <option>100 km</option>
                                </select><br /><br />
                                <h5 style={{ color: "#e62e00", fontFamily: "cursive", marginTop: "5%" }}>No Stores found ... try<br /> again!</h5>
                            </div>
                        </div>
                        <div className="col-8">
                            <div style={{ color: "gray", textAlign: "center", paddingTop: "25%", height: "550px", width: "auto", backgroundColor: "#cce6ff" }}>
                                <h1><ExclamationCircleFilled /></h1>
                                <h2>Oops! Something went wrong.</h2>
                                <p>
                                    This page didn't load Google Maps correctly. See the JavaScript console for technical details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "20%", backgroundColor: "#ff66b3" }}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <div style={{ color: "#660000", textAlign: "center", marginTop: "-90px", paddingTop: "10%", backgroundColor: "white", border: "2px solid gray", height: "300px", width: "300px", borderRadius: "20px" }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTyQEZVYYbxT6gBsPTHLyuc9Vrxsf3bDvGc3fj_D9K4wKPPV_"
                                    style={{ borderRadius: "50%", height: "60px" }} />
                                <h3><b>Quick Contact</b></h3>
                                <div style={{ display: "flex", paddingTop: "10%" }}>
                                    <PhoneFilled />
                                    <h5>+91 - 9924198933</h5>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <MailFilled />
                                    <h5>info@santushtishakes.com</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ color: "#660000", paddingTop: "10%", textAlign: "center", marginTop: "-90px", backgroundColor: "white", border: "2px solid gray", height: "300px", width: "300px", borderRadius: "20px" }}>
                                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSr30WRGdsyWnOsqJe_u6HlsaHByfxfYfy6Ax1MDv4KrS_Z1NUs"
                                    style={{ borderRadius: "50%", height: "60px" }} />
                                <h3><b>Corporate Office</b></h3>
                                <p style={{ paddingTop: "10%" }}>
                                    Santushti Shakes Private
                                    Limited (Headquarters),
                                    40, Forth Floor, Siddheshwar Plaza,
                                    New VIP Rd, near Sardar Eatate, Vadodara, Gujarat 390019
                                </p>
                            </div>
                        </div>
                        <div>
                            <div style={{ textAlign: "center", marginTop: "-90px", backgroundColor: "white", border: "2px solid gray", height: "300px", width: "300px", borderRadius: "20px" }}>
                                <h3 style={{ color: "#660000", paddingTop: "10%" }}><b>Follow Us</b></h3>
                                <hr style={{ color: "black", width: "220px", marginLeft: "15%" }} />
                                <div style={{ color: "#330000", display: "flex", marginLeft: "20%" }}>
                                    <h1><FacebookFilled /></h1>
                                    <h1><InstagramFilled /></h1>
                                    <h1><LinkedinFilled /></h1>
                                    <h1><YoutubeFilled /></h1>
                                    <h1><TwitterSquareFilled /></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "5%" }}>
                        <button  onClick={() => navigate('/outlest')} style={{ borderRadius: "30px", padding: "10px", backgroundColor: "#330000", color: "white" }} type="button">Find Nearest Outlet</button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "7%" }}>
                        <div>
                            <h3 style={{ color: "#330000", fontFamily: "Impact" }}>THICKEST, CREAMIEST, TASTIEST</h3>
                            <h3 style={{ color: "#330000", fontFamily: "Impact" }}>SHAKE IN THE WORLD.</h3>
                        </div>
                        <div>
                            <h3 style={{ color: "#330000", fontFamily: "Impact" }}>Checkout Our International Mark</h3>
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/dessertino.png"
                                style={{ height: "70px", width: "250px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p style={{ marginTop: "3%", textAlign: "center" }}>
                    Copyright © 2023 Santushti Shakes & More. All rights reserved. Developed by ClicksMedia
                </p>
            </div>
        </>
    )
}