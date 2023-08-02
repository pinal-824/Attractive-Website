import React from "react";
import './App.css'
import { PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import { BsFillBookFill, BsFillAwardFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { Carousel } from 'antd';
import { Rate } from 'antd';
import { useNavigate } from "react-router-dom";
const contentStyle = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'center',
};
{/* <div className="row">
    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{ backgroundColor: 'green' }}>
        <h1>bca</h1>
    </div>
    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{ backgroundColor: 'blue' }}>
        <h1>bca</h1>
    </div>
    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{ backgroundColor: 'red' }}>
        <h1>bca</h1>
    </div>
    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3" style={{ backgroundColor: 'purple' }}>
        <h1>bca</h1>
    </div>
</div> */}
export function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#802000", padding: "2px 0px 2px 0px", textAlign: "center", color: "white" }}>
                <p style={{ marginTop: "1%" }}>Become a Franchise  Partner <button style={{ color: "white", backgroundColor: "transparent", padding: "4px" }} type="button">Join Us</button></p>
            </div>
            <div>
                <div className="row">
                    <div className="col-4 ">
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
                <Carousel autoplay>
                    <div style={contentStyle} >
                        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#e6b3b3" }}>
                            <div>
                                <h1 className="img3" style={{ color: " #c65353", fontFamily: "Helvetica Neue", fontSize: "65px", textAlign: "center", marginTop: "30%", marginLeft: "15%" }}><b>THICKEST<br />CREAMIEST<br />TASTIEST</b></h1>
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                            </div>
                        </div>
                    </div>
                    <div style={contentStyle} >
                        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#ccf5ff" }}>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/main2.png" height="450px" widht="450px" className="img3" style={{ marginLeft: "15%" }} />
                            </div>
                            <div>
                                <h1 className="img3" style={{ color: "#4ddbff", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "30%" }}><b>THICKEST<br />THICKSHAKES</b></h1>
                            </div>
                        </div>
                    </div>
                    <div style={contentStyle} >
                        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#ffb3b3" }}>
                            <div>
                                <h1 className="img3" style={{ color: "#ff6666", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "30%", marginLeft: "25%" }}><b>TASTIEST<br />MILKSHAKES</b></h1>
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/NEWMILkshake.png" height="450px" widht="450px" className="img3" style={{ marginRight: "20%" }} />
                            </div>
                        </div>
                    </div>
                    <div style={contentStyle} >
                        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#ffccff" }}>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicceram.png" height="450px" widht="450px" className="img3" style={{ marginLeft: "25%" }} />
                            </div>
                            <div>
                                <h1 className="img3" style={{ color: "#ff66ff", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "30%", marginRight: "5%" }}><b>CREAMIEST<br />ICE CREAM</b></h1>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div class=" w3-animate-right">
                <div className="container">
                    <h1 className="w3-container w3-center w3-animate-right" style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue" }}>Welcome to</h1>
                    <h1 className="w3-container w3-center w3-animate-top" style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "45px" }}>Santushti Shakes & More</h1>
                    <div className="row">
                        <div className="col-sm-6 ">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/10/homee.webp" height="550px" width="600px" className="img2" />
                        </div>
                        <div className="col-sm-6  ">
                            <h3 class=" w3-animate-top" style={{ marginTop: "15%" }}>Sunil Chelani – 32 Years,  having experience in relevant field since past 18 Years.</h3>
                            <p class=" w3-animate-top" style={{ color: "#907e82", marginTop: "5%" }}>Heading Operations and R & D Arm with an expertise in Ice cream Flavours, developed self made combinations of shakes and Ice Creams matching the taste buds of Customers at large Won hearts of Rajkot just within six months of establishments and won Bright Barodians in just one year of establishment Self initiator, multitasking, innovative, think out of Box with an ability to place an extra mile.</p>
                            <button onClick={() => navigate('/gallery')}  class="button-2" style={{ width: "200px", padding: "15px" }}><BsFillAwardFill style={{ fontSize: "35px" }} /><br />Achievements</button>
                            <button onClick={() => navigate('/outlest')} class="button-1" style={{ width: "200px", padding: "25px" }}><BsFillBookFill style={{ fontSize: "35px" }} /><br />Our story</button>
                            <button onClick={() => navigate('/gallery')}  class="button-3" style={{ width: "200px", padding: "15px" }}><BsFillAwardFill style={{ fontSize: "35px" }} /><br />Awards</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://content.jdmagicbox.com/comp/vadodara/d3/0265px265.x265.151219091912.i4d3/catalogue/santushti-shakes-and-more-manjalpur-vadodara-fast-food-restaurants-rv3iuzggig.jpg" style={{ height: "300px", width: "100%", marginTop: "5%" }} />
                    <div style={{ backgroundColor: "#FFF1DE" }}>
                        <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>100% NATURAL</h3>
                        <h1 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "45px" }}><b>PRODUCTS</b></h1>
                        <div style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/10/otspecial.png" height="350px" width="350px" className="img3" />
                                <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>Hot Special</h3>
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/nmilkshake-1.png" height="350px" width="350px" className="img3" />
                                <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>Milk shakes</h3>
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/12/shake.png" height="350px" width="350px" className="img3" />
                                <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>Premium Shakes</h3>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/nwaffles.png" height="350px" width="350px" className="img5" />
                                <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>Waffles</h3>
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/naloodaa.png" height="350px" width="350px" className="img5" />
                                <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>Falooda</h3>
                            </div>
                            <div>
                                <img src="https://santushtishakes.com/wp-content/uploads/2022/11/ncoldcoco.png" height="350px" width="350px" className="img5" />
                                <h3 style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "25px" }}>Coco</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className=" w3-animate-top" style={{ color: "#613a17", textAlign: "center", fontSize: "40px", fontFamily: "Helvetica Neue" }}><b>Want to Become a part <br />of Successful Dessert Brand?</b></h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Handshake.png" height="550px" width="600px" className="img2" style={{ marginTop: "-5px" }} />
                        </div>
                        <div className="col-sm-6">
                            <h1 className=" w3-animate-right" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "45px", marginTop: "20%" }}><b>Successfully running</b></h1>
                            <h3 className=" w3-animate-top" style={{ color: "#613a17" }}>35+ Outlets across India, Dubai and Canada</h3>
                            < p style={{ color: "#907e82", marginTop: "5%" }}>Santushtishakes India’s leading successful sustainable franchise based model. Providing 10+ dessert categories at one place in every corner of the world. We deliver best thickest, creamiest, and tastiest Thickshakes & Milkshakes and more. Scooping the best technology from International R&D in Europe, Desserts made with unique recipes and premium ingredients with zero ice crystals and ice cream.</p>
                            <button class="button-28" style={{ width: "200px" }}>Learn More <FiArrowRight style={{ fontSize: "22px" }} /></button>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5%" }}>
                        <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "#ffe0cc" }}><img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicon2.png" /><br />Competitive food cost with 60 to 62% Gross Margin</button>
                        <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "#8ed1fc" }}><img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicon4.png" /><br />No chemicals only natural</button>
                        <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "rgb(237, 173, 142)" }}><img src="https://santushtishakes.com/wp-content/uploads/2022/11/nicon5.png" /><br />Using our own created flavors</button>
                        <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "rgb(255,206,236)" }} ><img src="	https://santushtishakes.com/wp-content/uploads/2022/11/nicon3.png" /><br />Globally recognized dispensing technology</button>
                        <button class="button-1" style={{ width: "200px", padding: "15px", height: "280px", backgroundColor: "#8ed1fc" }}><img src=" https://santushtishakes.com/wp-content/uploads/2022/11/nicon1.png" /><br />Zero Ice Cream Zero Ice Crystals</button>
                    </div>
                </div >
                <div style={{ backgroundColor: "#ffccff", padding: "6%", marginTop: "5%" }}>
                    <h1 className=" w3-animate-right" style={{ color: "#613a17", textAlign: "center", fontSize: "50px", fontFamily: "Helvetica Neue" }}><b>What People Say</b></h1>
                    <div className="container">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", marginLeft: "5%" }}>
                                <div>
                                    <img src="https://lh6.googleusercontent.com/-eTgK-iPsT-0/AAAAAAAAAAI/AAAAAAAAAAA/AfuDElpnGsQ/s160-c-k-mo/photo.jpg" height="100px" width="100px" />
                                </div>
                                <div style={{ marginLeft: "5%" }}>
                                    <h6><b>Santushti Shakes & More</b></h6>
                                    <p style={{ marginTop: "-10px" }}><Rate allowHalf defaultValue={4.5} />;</p>
                                    <p style={{ marginTop: "-10px" }}><b>2035 Google reviews</b></p>
                                </div>
                            </div>

                            <div>
                                <marquee behaviour="scrool" direction="left" style={{ color: "black" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "3%", width: "380px", height: "180px", marginRight: "2%" }}>
                                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                <div >
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl7exhQDGU4U81cgDocF9-8SB-v0cp0IkaA&usqp=CAU" height="70px" width="70px" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div>
                                                    <h6>Yash Barar</h6>
                                                    <p>08. October, 2022..</p>
                                                </div>
                                                <div style={{ marginLeft: "12%" }}>
                                                    <h1 ><AiFillGooglePlusCircle /></h1>
                                                </div>
                                            </div>
                                            <p style={{ marginTop: "8px" }}><Rate allowHalf defaultValue={5} />;</p>
                                        </div>
                                        <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "3%", width: "350px", marginRight: "2%" }}>
                                            <div style={{ display: "flex" }}>
                                                <div>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdwqbBdNaMRr5xN_WORPHtp4uR1n1ji6WbA&usqp=CAU" height="70px" width="70px" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div>
                                                    <h6>Ajay vora</h6>
                                                    <p>14. October, 2022..</p>
                                                </div>
                                                <div style={{ marginLeft: "10%" }}>
                                                    <h1 ><AiFillGooglePlusCircle /></h1>
                                                </div>
                                            </div>
                                            <p style={{ marginTop: "8px" }}><Rate allowHalf defaultValue={5} />;</p>
                                        </div>
                                        <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "3%", width: "350px", marginRight: "2%" }}>
                                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                <div >
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl7exhQDGU4U81cgDocF9-8SB-v0cp0IkaA&usqp=CAU" height="70px" width="70px" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div>
                                                    <h6>Gaurav Srivastava</h6>
                                                    <p>01. October, 2002.</p>
                                                </div>
                                                <div style={{ marginLeft: "12%" }}>
                                                    <h1 ><AiFillGooglePlusCircle /></h1>
                                                </div>
                                            </div>
                                            <p style={{ marginTop: "8px" }}><Rate allowHalf defaultValue={5} />;</p>
                                        </div>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "4%" }}>
                    <h1 className=" w3-animate-right" style={{ color: "#613a17", textAlign: "center", fontFamily: "Helvetica Neue", fontSize: "55px" }}><b>CELEBRITY MOMENT</b></h1>
                    <img src="	https://santushtishakes.com/wp-content/uploads/2022/08/bgggg.png" height="500px" width="100%" className="img2" style={{ marginTop: "2%" }} />
                </div>
                <div className="container" >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "5%" }}>
                            <h4 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", marginTop: "20%" }}><b>Online Delivery</b></h4>
                            <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "65px" }}><b>Your favorite <br />dessert’s delivery<br /> partner</b></h1>
                            <p style={{ color: "#907e82", marginTop: "5%" }}>Order your favorite dessert of Santushti Shakes & More <br />on Zomato and Swiggy.</p>
                            <button class="button-18" style={{ marginRight: "2%", padding: "15px" }}>Order On Zomato<FiArrowRight style={{ fontSize: "22px" }} /></button>
                            <button class="button-18" style={{ padding: "15px" }} >Order On Swiggy<FiArrowRight style={{ fontSize: "22px" }} /></button>
                        </div>
                        <div >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREh1BEFG-8n_GaQeShrutQm2btOmWjWs8Yuw&usqp=CAU" height="400px" width="500px" className="img3" />
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