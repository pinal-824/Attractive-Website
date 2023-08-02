import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsFillArrowRightCircleFill } from "react-icons/bs";
import { ExclamationCircleFilled, PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import './App.css'

export function Menu() {
    const navigate = useNavigate()
    return (
        <>
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
                        <h1 className="img3" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "150%" }}>Menu</h1>
                    </div>
                    <div>
                        <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "5%" }}>
                <div className=" w3-animate-top img6" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img4" src="https://santushtishakes.com/wp-content/uploads/2022/11/Nmilkshake.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Milk Shake</b></h1>
                        <a href="https://santushtishakes.com/milk-shakes/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top img6" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img4" src="https://santushtishakes.com/wp-content/uploads/2022/11/Nthickshakes.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Thick Shake</b></h1>
                        <a href="https://santushtishakes.com/thick-shakes/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top img6" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img4 " src="https://santushtishakes.com/wp-content/uploads/2022/11/premiumshake.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Premium Shake</b></h1>
                        <a href="https://santushtishakes.com/premium-shakes/"> <h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
            </div>
            <div class=" w3-animate-top " style={{ display: "flex", justifyContent: "space-evenly", marginTop: "8%" }}>
                <div style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img5" src="https://santushtishakes.com/wp-content/uploads/2022/11/Nicecream.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>ice-cream-scoops</b></h1>
                        <a href="https://santushtishakes.com/ice-cream-scoops/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top " style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img5" src="https://santushtishakes.com/wp-content/uploads/2022/09/rajbhog-1.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>ice-ceam(800ml)</b></h1>
                        <a href="https://santushtishakes.com/ice-cream-800-ml/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img5" src="https://santushtishakes.com/wp-content/uploads/2022/11/Nice.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>ice-cream-partypacks</b></h1>
                        <a href="https://santushtishakes.com/ice-creams-party-packs/"> <h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "8%" }}>
                <div class=" w3-animate-top img6" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img4" src="https://santushtishakes.com/wp-content/uploads/2022/09/crunchychocolate.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Waffles</b></h1>
                        <a href="https://santushtishakes.com/waffles/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top img6" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img4" src="https://santushtishakes.com/wp-content/uploads/2022/11/nutthickshakes.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Nuts-Thick-Shakes</b></h1>
                        <a href="https://santushtishakes.com/nut-thick-shakes/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top img6" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img4" src="https://santushtishakes.com/wp-content/uploads/2022/11/Ncoldcocoa.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Coco</b></h1>
                        <a href="https://santushtishakes.com/coco/"> <h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "8%" }}>
                <div class=" w3-animate-top" style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img5" src="https://santushtishakes.com/wp-content/uploads/2022/09/faloooda.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Royal faloooda</b></h1>
                        <a href="https://santushtishakes.com/royal-falooda300-ml/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top " style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img5" src="https://santushtishakes.com/wp-content/uploads/2022/11/freshjuice.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Fresh-Fruit-juice</b></h1>
                        <a href="https://santushtishakes.com/fresh-fruit-juice-300-ml/"><h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
                    </div>
                </div>
                <div class=" w3-animate-top " style={{ backgroundColor: "#ffe6ee", borderRadius: "15px", width: "350px" }}>
                    <div>
                        <img className="img5" src="https://santushtishakes.com/wp-content/uploads/2022/11/hot-special.png" height="250px" width="250px" style={{ marginTop: "-20%", marginLeft: "14%" }} />
                        <h1 style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "35px", textAlign: "center" }}><b>Hot special</b></h1>
                        <a href="https://santushtishakes.com/hot-special/"> <h1><BsFillArrowRightCircleFill style={{ backgroundColor: "#613a17", color: "white", borderRadius: "10%", marginLeft: "45%" }} /></h1></a>
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
