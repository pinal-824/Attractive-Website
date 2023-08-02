import React from "react";
import './App.css'
import { ExclamationCircleFilled, PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export function Franchise() {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#802000", padding: "2px 0px 2px 0px", textAlign: "center", color: "white" }}>
                <p style={{ marginTop: "1%" }}>Become a Franchise  Partner <button style={{ color: "white", backgroundColor: "transparent", padding: "4px" }} type="button">Join Us</button></p>
            </div>
            <div className="transbox" style={{ backgroundColor: "#ccffff", opacity: " 0.7" }}>
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
                        <h1 className="img3" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "100%" }}>Franchise</h1>
                    </div>
                    <div>
                        <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 class="w3-center w3-animate-top" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "45px", textAlign: "center" }}>Want to become</h3>
                <h1 class="w3-center w3-animate-right" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center" }}><b>our Franchise partner?</b></h1>
                <div className="row">
                    <div className="col-sm-6">
                        <img src="https://santushtishakes.com/wp-content/uploads/2022/09/franche.png" height="350px" widht="350px" className="img2" />
                        < h3 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "50px", textAlign: "center", marginTop: "6%" }}><b>Successfully running</b></h3>
                        <h6 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "20px", textAlign: "center" }}>35+ Outlets across India, Dubai and Canada</h6>
                    </div>
                    <div className="col-sm-6">
                        <p style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "25px", marginTop: "15%", marginLeft: "15%" }}>santushtishakes India’s leading successful sustainable franchise based model. Providing 10+ dessert categories at one place in every corner of the world. We deliver best thickest, creamiest, and tastiest Thickshakes & Milkshakes and more. Scooping the best technology from International R&D in Europe, Desserts made with unique recipes and premium ingredients with zero ice crystals and ice cream.</p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(255,245,203)", padding: "5%" }}>
                <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "65px", textAlign: "center" }}><b>Reason to invest in our franchise</b></h1>
                <div className="row">
                    <div className="col-sm-6" style={{ marginTop: "5%" }}>
                        <div style={{ marginLeft: "15%" }}>
                            <h3 class="  w3-animate-left" style={{ fontSize: "35px" }}><b>12+</b></h3>
                            <p class="  w3-animate-left" style={{ fontSize: "20px" }}><b>Years of Franchise Experience</b></p><br />
                            <h3 class=" w3-animate-right" style={{ fontSize: "35px" }}><b>15+</b></h3>
                            <p class=" w3-animate-right" style={{ fontSize: "20px" }}><b>Million Customers Served So Far</b></p><br />
                            <h3 class="  w3-animate-left" style={{ fontSize: "35px" }}><b>+75%</b></h3>
                            < p class="  w3-animate-left" style={{ fontSize: "20px" }}><b>Occupancy of Online Dessert Market</b></p><br />
                            <h3 class=" w3-animate-right" style={{ fontSize: "35px" }}><b>+85%</b></h3>
                            <p class=" w3-animate-right" style={{ fontSize: "20px" }}><b>Customer’s Repetitions</b></p><br />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src="https://santushtishakes.com/wp-content/uploads/2022/09/franch3.png" className="img2" height="550px" widht="550px" />
                    </div>
                </div>
                <h3 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "45px", textAlign: "center" }}><b>Know Our USPs</b></h3>
                <div style={{ display: "flex", justifyContent: "space-between" }} className="img1">
                    <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "#ffe0cc" }}><img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicon2.png" /><br />Competitive food cost with 60 to 62% Gross Margin</button>
                    <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "#8ed1fc" }}><img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicon4.png" /><br />No chemicals only natural</button>
                    <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "rgb(237, 173, 142)" }}><img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicon5.png" /><br />Using our own created flavors</button>
                    <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "rgb(255,206,236)" }} ><img src="	https://santushtishakes.com/wp-content/uploads/2022/11/nicon3.png" /><br />Globally recognized dispensing technology</button>
                    <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "#8ed1fc" }}><img src=" https://santushtishakes.com/wp-content/uploads/2022/11/nicon1.png" /><br />Zero Ice Cream Zero Ice Crystals</button>
                </div>
            </div>
            <div className="container">
                <h3 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "45px", textAlign: "center" }}><b>Quick Inquiry</b></h3>
                <div style={{ padding: "2%" }}>
                    <input style={{ width: "40%", marginRight: "10%", height: "55px" }} type="text" name="name" id="name" placeholder="Name*" />
                    <input style={{ width: "40%", height: "55px" }} type="email" name="email" id="email" placeholder="Email*" /><br /><br />
                    <input style={{ width: "40%", marginRight: "10%", height: "55px" }} type="tel" name="phone" id="phone" placeholder="Phone Number*" />
                    <input style={{ width: "40%", height: "55px" }} type="text" name="subject" id="subject" placeholder="Subject*" /><br /><br />
                    <input style={{ width: "90%", height: "103px" }} type="text" name="msg" id="msg" placeholder="Comment or Meassage*" /><br /><br />
                    <button className="btn btn" style={{ backgroundColor: "#613a17", width: "150px", height: "50px", color: "white" }}>Submit</button>
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
       
            <div>
                <p style={{ marginTop: "3%", textAlign: "center" }}>
                    Copyright © 2023 Santushti Shakes & More. All rights reserved. Developed by ClicksMedia
                </p>
            </div>
        </>
    )
}

