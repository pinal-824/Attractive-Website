import React from "react";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { ExclamationCircleFilled, PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import { Carousel } from 'antd';
import { useNavigate } from "react-router-dom";
const contentStyle = {
    height: '80%',
    widht: '550%',
    lineHeight: '160px',
};
export function Aboutus() {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#802000", padding: "2px 0px 2px 0px", textAlign: "center", color: "white" }}>
                <p style={{ marginTop: "1%" }}>Become a Franchise  Partner <button style={{ color: "white", backgroundColor: "transparent", padding: "4px" }} type="button">Join Us</button></p>
            </div>
            <div className="transbox" style={{ backgroundColor: "#ffcccc", opacity: " 0.7" }}>
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
                        <h1 className="img3" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "100%" }}><b>About us</b></h1>
                    </div>
                    <div>
                        <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" style={{ marginTop: "02%" }}>
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "65px" }}><b>Our Story</b></h1>
                        <p style={{ color: "#613a17", fontSize: "20px" }}>Life is full of flavors and excitement that bring out your inner child to lick, slide and gulp dessert in a messy way. Some may call it an addiction but at Dessertino, we call it true love. Sneaking from lectures, riding for the first date, celebrating the first job, and cherishing the ‘Happy Days’, we, a decade y/o brand have found you the best place to smile, shake, scream and celebrate every new chapter of your lives.</p><br />
                        <p style={{ color: "#613a17", fontSize: "20px" }}>Exploring the young-some flavors and buzzing with old-to-new ‘Ice-free’ Thick shakes, we came up with the idea of launching Santushti to freeze your special moments with a tub full of scoops and sips. Blended with hard work and thickening passion, we make every dessert in just 25 seconds.</p><br />
                        <p style={{ color: "#613a17", fontSize: "20px" }}>All this has been possible by whipping and brainstorming ideas, conducting International R&D in Europe, and scooping the best technology so you celebrate delightful experiences. We are a believer of Sky is the Limit and with an international cheer from ‘Santushti to Dessertino’, we made it happen with eyes open! From 1-4-30-500- we have reached beyond the boundaries to find a place in your heart. Because your happy curves are our success!</p><br />
                    </div>
                    <div className="col-sm-6">
                        <Carousel autoplay>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/08/ab6.png" height="450px" widht="550px" style={contentStyle} />
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/08/ab2.png" height="450px" widht="550px" style={contentStyle} />
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/08/ab6.png" height="450px" widht="550px" style={contentStyle} />
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/08/ab2.png" height="450px" widht="550px" style={contentStyle} />
                            </div>
                        </Carousel>
                    </div>
                </div>
                {/* <h3 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "40px", textAlign: "center" }}>Our Achievements</h3> */}
            </div>
            <div style={{ backgroundColor: "rgb(255,245,203)", padding: "5%" }}>
                <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "65px", textAlign: "center" }}><b>Vision & Mission</b></h1>
                <div style={{ display: "flex", gap: "35px" }}>
                    <div style={{ backgroundColor: "#8ed1fc", borderRadius: "15px", height: "280px", padding: "2%", margin: "2%" }}>
                        <img src="https://santushtishakes.com/wp-content/uploads/elementor/thumbs/nvisionn-pzjtq20ud56qnqaxe8vbzqdd9weemhirunudiaxdk8.png" height="120px" widht="120px" style={{ marginTop: "-100px", marginLeft: "38%" }} />
                        <h3 style={{ color: " #ccf2ff", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Vision</b></h3>
                        <p style={{ color: " #ccf2ff", fontFamily: "Helvetica Neue", fontSize: "20px", textAlign: "center" }}>The vision to empower dessert industry by branching out to the entrepreneurs with Franchise Partnerships for a sweet expansion and thereby redefining the way dessert industry works</p>
                    </div>
                    <div style={{ backgroundColor: "#ff6666", borderRadius: "15px", height: "280px", padding: "2%", margin: "2%" }}>
                        <img src="https://santushtishakes.com/wp-content/uploads/elementor/thumbs/missionnnn-pzjtpwdt84z0q2j4b6fkkrslpl67cawdtvxgmn5qlk.png" height="120px" widht="120px" style={{ marginTop: "-100px", marginLeft: "38%" }} />
                        <h3 style={{ color: "#ffb3b3", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Mission</b></h3>
                        <p style={{ color: " #ffb3b3", fontFamily: "Helvetica Neue", fontSize: "20px", textAlign: "center" }}>Sunil Chelani & Bhavesh Chelani, a duo who laid a wonderful example to the world by displaying the complimenting teamwork, taking Santhusti to an international level in merely a decade’s time.</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "2%" }}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Home-main-1.webp" height="650px" widht="550px" />
                    </div>
                    <div className="col-sm-6">
                        <h3 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px" }}>The Kings of Dessert Industry</h3>
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "55px" }}><b>Chelani Brothers</b></h1>
                        <p style={{ color: "#613a17", fontSize: "25px" }}><b>A Midas Blend of Business Acumen & Recipe Creation</b></p>
                        <p style={{ color: "#613a17", fontSize: "20px" }}>From rags to riches, the visionary creator of Santushti- Sunil Chelani, ‘Mr. Shake’ put in all hands to discover the finest brand of Naturally-Blended Desserts. At 13, he worked at ice-cream parlour, giving all his 10 years to Dairy Industry getting engrossed with the rich flavors and organic process of blending. On Nov 2, 2008, the concept of Santushti was launched that inaugurated the first outlet in 2009 from Rajkot. From giving birth to an idea and bringing the whole world to your innovation, maps the real journey. Bhavesh Chelani, CA by profession holds a rich multi-corporate experience who headed Santushti and endeavor to leap it to the international frontiers. With a from-the-scratch innovation, together, they blended a secret recipe with an intrigued process that gives them a bold stand out from the crowd.</p>
                        <p style={{ color: "#613a17", fontSize: "20px" }}>“Yes, our bitter trials gave us the best flavors and this is how we converted a successful Dessert Concept into a sustainable Franchise Model.” Winning hearts of millions wasn’t challenging for Chelani Brothers.</p>
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

            <div>
                <p style={{ marginTop: "3%", textAlign: "center" }}>
                    Copyright © 2023 Santushti Shakes & More. All rights reserved. Developed by ClicksMedia
                </p>
            </div>

        </>
    )
}