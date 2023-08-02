import React from "react";
import { PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const Contact = () => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#ffcce6" }}>
                <div style={{ backgroundColor: "#802000", padding: "2px 0px 2px 0px", textAlign: "center", color: "white" }}>
                    <p style={{ marginTop: "1%" }}>Become a Franchise  Partner <button style={{ color: "white", backgroundColor: "transparent", padding: "4px" }} type="button">Join Us</button></p>
                </div>
                <div className="transbox" style={{ backgroundColor: " #ccf2ff", opacity: " 0.7" }}>
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
                            <h1 className="img3" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "100%" }}><b>Contact</b></h1>
                        </div>
                        <div>
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                        </div>
                    </div>
                </div>
                <div className="container" style={{ display: "flex", justifyContent: "space-around", marginTop: "10%" }}>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wn5oejgcanjMFSg9zVsyDzB9WbaFSSl-UdPfVFGod3sHY29I"
                            style={{ height: "650px", width: "550px" }} />
                    </div>
                    <div>
                        <h1 style={{ color: "#330000" }}><b>Let's have cup of <br />Dessert</b></h1>
                        <div style={{ marginTop: "15%" }}>
                            <input type="text" placeholder="name*" />
                            <input type="email" placeholder="Email*" /><br /><br />
                            <input type="tel" placeholder="phone*" />
                            <input type="text" placeholder="Subject" /><br /><br />
                            <textarea style={{ width: "380px" }} rows="3" type="text" placeholder="comment or message" /><br /><br />
                            <input type="checkbox" />i'm not robot
                        </div>
                        <button type="button" style={{ backgroundColor: "#330000", color: "white", marginTop: "15%", padding: "4%   " }}>SUBMIT</button>
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