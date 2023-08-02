import React from "react";
import { PhoneFilled, MailFilled, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, TwitterSquareFilled } from "@ant-design/icons";
import './App.css';
import { useNavigate } from "react-router-dom";
export const Gallery = () => {
    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#ffcce6" }}>
                <div style={{ backgroundColor: "#802000", padding: "2px 0px 2px 0px", textAlign: "center", color: "white" }}>
                    <p style={{ marginTop: "1%" }}>Become a Franchise  Partner <button style={{ color: "white", backgroundColor: "transparent", padding: "4px" }} type="button">Join Us</button></p>
                </div>
                <div className="transbox" style={{ backgroundColor: "#ffb380", opacity: " 0.7" }}>
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
                            <h1 className="img3" style={{ color: "#613a17", fontFamily: "Helvetica Neue", fontSize: "75px", textAlign: "center", marginTop: "100%" }}><b>Gallery</b></h1>
                        </div>
                        <div>
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/nfranchise.png" height="450px" widht="450px" className="img3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "15%" }}>
                    <button type="button" style={{ border: "none", color: "#330000", background: "transparent" }}><b>All</b></button>
                    <button type="button" style={{ border: "none", color: "#330000", background: "transparent" }}><b>Press / Media Coverage</b></button>
                    <button type="button" style={{ border: "none", color: "#330000", background: "transparent" }}><b>Awards & Achievement</b></button>
                    <button type="button" style={{ border: "none", color: "#330000", background: "transparent" }}><b>Celebrity Moments</b></button>
                </div>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5%" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a2-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/66.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi4.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Shekar<br /> Shukla</h1>
                                    <p>"santushti is just awesome,<br /> love to have it again and<br /> again"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_6536-scaled-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Forbes-India-23rd-April-2021_Online-Issue_Low.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a4-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_6374-scaled-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/WhatsApp-Image-2019-02-16-at-3.33.41-PM.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Gujarati-Newspaper-Akila-Dessertino.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Gujarat-Samachar-FSSAi.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards19.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/AHT2-new.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards25.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards4.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_7130-scaled-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/16-5-2020_striking-the-right-notes_post-event.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a6-1.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards22.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Home-main.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a8-1.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards7.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi1.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h2>Siddharth<br />Randeria</h2>
                                    <p>"It's lip smacking divine"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi8.png"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Harpal<br />Singh<br />Solanki</h1>
                                    <p>"the best desserts in the<br />city as at santushti"</p>
                                    <p>"santushti is just awesome,<br /> love to have it again and<br /> again"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a7-1.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards3.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_6533-scaled-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi9.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Santirani<br />Chakrabort</h1>
                                    <p>"i am amazed to see all the<br />Varities of shakes "</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/Bhavesh-Chelani-The-Most-Admired-Global-Indian-2020-02.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a16.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/WhatsApp-Image-2021-04-21-at-3.09.17-PM-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi10.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Bhakti <br />Sharma</h1>
                                    <p>"it is indeed food for God.<br />M a happy soul having it."</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi12.png"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h2>Mahi Vij</h2>
                                    <p>"Fabulous Shakes in the<br />World are here at<br />Santushti."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a5-1.webp"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a20.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards1921.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a10.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a3-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/13-scaled.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi11.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Kiran Rao</h1>
                                    <p>"it's a perfect 'santushti' m<br />a fan of it!"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards24.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a9.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/awards6.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi2.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Apara<br />Maheta</h1>
                                    <p>"santushti is just awesome,<br /> love to have it again and<br /> again"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi3.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_7148-scaled-2.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a15.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/66-1536x1152-1.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Shekar<br /> Shukla</h1>
                                    <p>"santushti is just awesome,<br /> love to have it again and<br /> again"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_6536-scaled-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/a2-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/66.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/09/testi4.png" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text" style={{ textAlign: "center" }}>
                                    <h1>Shekar<br /> Shukla</h1>
                                    <p>"santushti is just awesome,<br /> love to have it again and<br /> again"</p>
                                </div>
                            </div>
                        </div>
                        <div class="imgdata">
                            <img src="https://santushtishakes.com/wp-content/uploads/2022/11/IMG_6536-scaled-1.webp" alt="Avatar" class="image"
                                style={{ height: "180px", width: "250px" }} />
                            <div class="overlay">
                                <div class="text"></div>
                            </div>
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
                    <button onClick={() => navigate('/outlest')} style={{ borderRadius: "30px", padding: "10px", backgroundColor: "#330000", color: "white" }} type="button">Find Nearest Outlet</button>
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