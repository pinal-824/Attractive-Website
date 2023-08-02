import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
import { Button, Dropdown } from 'antd';
import './App.css';
import { RightOutlined } from "@ant-design/icons";
import { BsArrowUpRight } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { Carousel } from 'antd';
export const Dessertino = () => {
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const description = ' Direct sourcing of raw material from Europe not only ensures best quality natural products but also lower cost';
    const des = "The propitiatory milk thickening technology along with unique dispensing methodology ensures consistent taste bot for dine-in & delivery";
    const des2 = "use of Natural or Natural identical ingredients making it healthier and tastier";

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" href="https://dessertinoglobal.com/dubai-menu/">
                    Dubai Menu
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" href="https://dessertinoglobal.com/gujarat-menu/">
                    Gujarat Menu
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" href="https://dessertinoglobal.com/our-menu/">
                    South-India
                </a>
            ),
        },
    ];
    const contentStyle = {
        height: '70vh',
        width: "2000px",
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <img src="https://dessertinoglobal.com/wp-content/uploads/2021/11/dessertinologo.jpeg"
                        style={{ height: "auto", width: "200px", fontWeight: "bold" }} />
                </div>
                <div className="col-8" style={{ marginTop: "20px" }}>
                    <button type="button" style={{ marginLeft: "15%", marginRight: "5%", border: "none", background: "transparent", }}>Home</button>
                    <a href='https://dessertinoglobal.com/about-us/'><button type="button" style={{ marginRight: "5%", border: "none", background: "transparent", }}>Our Story</button></a>
                    {/* <a><button type="button" style={{ marginRight: "5%", border: "none", background: "transparent", }}>Menu</button></a> */}
                    <Dropdown menu={{ items }} placement="bottom" arrow>
                        <Button style={{ marginRight: "5%", border: "none", background: "transparent", }}>Menu</Button>
                    </Dropdown>
                    <a href='https://dessertinoglobal.com/franchise/'><button type="button" style={{ marginRight: "5%", border: "none", background: "transparent", }}>Franchise</button></a>
                    <a href='https://dessertinoglobal.com/stores/'><button type="button" style={{ marginRight: "5%", border: "none", background: "transparent", }}>stores</button></a>
                    <a href='https://dessertinoglobal.com/contact/'><button type="button" style={{ marginRight: "8%", border: "none", background: "transparent", }}>Contact</button></a>
                    <button type="button" style={{ color: "white", border: "none", padding: "10px 25px 10px 25px", backgroundColor: "#032A3E" }}>Order Now<BsArrowUpRight /></button>
                </div>
            </div>
            {/* <div style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWa2UszuGVi-ENL_K2hnzH_Cbv1lXUQA6xGw&usqp=CAU')`,
                height: '70vh',
                fontSize: '50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div>
                    <div style={{ color: "white", fontFamily: "mansalva-sans-serif", fontSize: "57px" }}>
                        <p>Celebrate your best momments</p>
                    </div>
                    <div style={{ color: "white", fontFamily: "mansalva-sans-serif", fontSize: "57px" }}>
                        <p>Delightful Twists</p>
                    </div>
                    <div style={{ color: "white", fontFamily: "mansalva-sans-serif", fontSize: "57px" }}>
                        <p>Exotic Indulgence</p>
                    </div>
                    <div style={{ color: "white", fontFamily: "mansalva-sans-serif", fontSize: "57px" }}>
                        <p>Yummy Treats to fall in love</p>
                    </div>
                </div>
            </div> */}
            <Carousel autoplay>
                <div >
                    <img style={contentStyle} src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5c10d812-e745-40cf-807e-65d51ac3ec9e.jpg' alt='image' />
                </div>
                <div>
                    <img style={contentStyle} src='https://rs-menus-api.roocdn.com/images/fd4abad7-0d59-46c6-843c-f035c021389a/image.jpeg' alt='image' />
                </div>
                <div>
                    <img style={contentStyle} src='https://images.deliveryhero.io/image/talabat/restaurants/cover_637486614748599353.jpg?width=750' alt='image' />
                </div>
                <div>
                    <img style={contentStyle} src='https://offerengine.theentertainerme.com/dessertino-shakes-and-more-x23902113/merchant_profile_%22hero%22_image_slide.1_%28retina%29202012301628.jpg' alt='image' />
                </div>
            </Carousel>
            <div className="row">
                <div className="col-5" >
                    <div className="row">
                        <div className="col-7">
                            <img className="img5" src="https://dessertinoglobal.com/wp-content/uploads/2022/08/homebg2.png" height="600px" width="600px" alt="image"
                                style={{ marginRight: "15%" }} />
                        </div>
                        <div className="col-5">
                            <hr style={{ border: "4px solid gray", borderRadius: "5px", width: "50px" }} />
                            <h1 data-text-rotator="true"> Why</h1>
                            <h1 className="gradient-word">Dessertino </h1>
                            <h1>Tasty?</h1>
                            <div className='img6' style={{ display: "flex", marginTop: "35%" }}>
                                <div>
                                    <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic1.png" alt="image" />
                                </div>
                                <div>
                                    <p>All Supplies from <br /> Central Kitchen</p>
                                </div>
                            </div>
                            <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                                <div>
                                    <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic9.png" alt="image" />
                                </div>
                                <div>
                                    <p>Customers turned as <br />Business Partners</p>
                                </div>
                            </div>
                            <div className='img6' style={{ display: "flex", marginTop: "20%" }}>
                                <div>
                                    <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic13.png" alt="image" />
                                </div>
                                <div>
                                    <p>Experience in supply chains over 25+ diverse locations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='img6' style={{ display: "flex", marginTop: "20%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic5.png" alt="image" />
                        </div>
                        <div>
                            <p><strong>Zero</strong> Ice Cream <br />
                                <strong>Zero</strong> Ice Crystals</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic2.png" alt="image" />
                        </div>
                        <div>
                            <p>Imported Technology Coupled with customized machines</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic3.png" alt="image" />
                        </div>
                        <div>
                            <p>R &amp; D Center at<br />Italy, Europe</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic4.png" alt="image" />
                        </div>
                        <div>
                            <p>Using our Own Concentrates, No Chemicals Only Naturals</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="	https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic12.png" alt="image" />
                        </div>
                        <div>
                            <p>12+ years of Franchise Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic6.png" alt="image" />
                        </div>
                        <div>
                            <p>Globally recognized Dispensing technology</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic10.png" alt="image" />
                        </div>
                        <div>
                            <p>One Shake is prepared <br />in just 25 Sec</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic11.png" alt="image" />
                        </div>
                        <div>
                            <p>85% Customer repetition</p>
                        </div>
                    </div>
                    <div className='img6' style={{ display: "flex", marginTop: "15%" }}>
                        <div>
                            <img src="https://dessertinoglobal.com/wp-content/uploads/2022/08/s2ic7.png" alt="image" />
                        </div>
                        <div>
                            <p>75% occupancy of Online Dessert market</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                </div>
            </div>
            <div style={{ marginTop: "4%", backgroundColor: "ButtonFace" }}>
                <p style={{ textAlign: "center", paddingTop: "4%" }}>We Covered all range of desserts for your food cravings </p>
                <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "4%", paddingRight: "10%", paddingLeft: "10%" }}>
                    <div>
                        <h1><b>19+</b></h1>
                        <p>Milk Shakes</p>
                    </div>
                    <div>
                        <h1><b>20+</b></h1>
                        <p>Ice Creams</p>
                    </div>
                    <div>
                        <h1><b>70+</b></h1>
                        <p>Thick Shakes</p>
                    </div>
                    <div>
                        <h1><b>10+</b></h1>
                        <p>Coffee</p>
                    </div>
                    <div>
                        <h1><b>10+</b></h1>
                        <p>Waffles</p>
                    </div>
                    <div>
                        <h1><b>7+</b></h1>
                        <p>Hot Latte</p>
                    </div>
                    <div>
                        <h1><b>30+</b></h1>
                        <p>Pizzas</p>
                    </div>
                    <div>
                        <h1><b>15+</b></h1>
                        <p>Starters</p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <img src="https://dessertinoglobal.com/wp-content/uploads/2022/09/homepic1.png" alt="image" className="img2" />
                </div>
                <div style={{ marginTop: "4%", width: "500px" }}>
                    <p style={{ fontSize: "20px" }}><AiTwotoneStar style={{ fontSize: "40px" }} /> <b>-4.5</b> Rated Customer Satisfaction</p>
                    <h1>Unique yet Tasty</h1>
                    <p><b>Lower food costs, unique recipes and natural consistent taste makes Dessertino the Natural choice for desserts</b></p>
                    <Divider />

                    <Steps
                        current={current}
                        onChange={onChange}
                        direction="vertical"
                        items={[
                            {
                                title: <h3>Lower Optimum Food Cost</h3>,
                                description,
                            },
                            {
                                title: <h3>Unique Recipes & preparation</h3>,
                                description: des,
                            },
                            {
                                title: <h3>Natural Ingredients</h3>,
                                description: des2,
                            },
                        ]}
                    />
                </div>
            </div>
            <div style={{ backgroundColor: "ButtonFace" }}>
                <div>
                    <h2 style={{ fontSize: "100px" }}><marquee><strong>Nut Shakes. Fruit Shakes</strong></marquee></h2>
                    <h2 className='info' style={{ fontSize: "100px", color: "black", fontBorder: "1px solid black" }}><marquee direction="right"><strong> Fresh Fruit Juices.&nbsp; Brownie. Special Indulgences</strong></marquee></h2>
                </div>
            </div>
            <div className='container'>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <img className="img3" src='https://foodsguy.com/wp-content/uploads/2022/02/aliona-gumeniuk-skWmLMN6vFY-unsplash-735x1017.jpg' alt='image'
                            style={{ height: "650px", width: "550px" }} />
                    </div>
                    <div style={{ marginTop: "8%" }}>
                        <h1>Thick Shakes</h1>
                        <p >Come home to the best Thickshakes in town.<br /> There are innumerable combinations when<br /> it comes to making the shake you love.<br /> Choose from our menu of tasty and fulfilling<br />
                            delights or customize it to your preference</p>
                        <h6 style={{ marginTop: "20%" }}>Explore Thickshakes in</h6>
                        <a href='https://dessertinoglobal.com/dubai-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>Dubai<RightOutlined /></button></a>
                        <a href='https://dessertinoglobal.com/gujarat-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white", marginLeft: "25px" }}>Gujarat<RightOutlined /></button></a><br /><br />
                        <a href='https://dessertinoglobal.com/our-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>South-India<RightOutlined /></button></a>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4%" }}>
                    <div>
                        <img className="img5" src='https://b.zmtcdn.com/data/pictures/chains/0/20388120/09ce973c618105800e8ffb32ec603bfe.jpg' alt='image'
                            style={{ height: "650px", width: "550px" }} />
                    </div>
                    <div style={{ marginTop: "8%" }}>
                        <h1>Swiss Waffles</h1>
                        <p >Our delizioso Belgian waffles are home-<br /> made using the freshest and best<br /> ingredients. Perfectly light and crispy on the<br />outside, and heavenly soft on the inside!<br />
                            Maple syrup is available on request. Have a<br />treat and enjoy them.</p>
                        <h6 style={{ marginTop: "20%" }}>Explore Waffles in</h6>
                        <a href='https://dessertinoglobal.com/dubai-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>Dubai<RightOutlined /></button></a>
                        <a href='https://dessertinoglobal.com/gujarat-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white", marginLeft: "25px" }}>Gujarat<RightOutlined /></button></a><br /><br />
                        <a href='https://dessertinoglobal.com/our-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>South-India<RightOutlined /></button></a>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4%" }}>
                    <div>
                        <img className="img3" src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_03/939696/black_tap_cotton_candy_milkshake_1.jpg' alt='image'
                            style={{ height: "650px", width: "550px" }} />
                    </div>
                    <div style={{ marginTop: "8%" }}>
                        <h1>Milkshakes &<br /> Ice Creams</h1>
                        <p >Shake it to the next level with hand-scooped<br /> premium ice cream, vanilla, real milk and<br /> whipped topping.</p>
                        <h6 style={{ marginTop: "20%" }}>Explore Milkshakes & Icecreams in</h6>
                        <a href='https://dessertinoglobal.com/dubai-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>Dubai<RightOutlined /></button></a>
                        <a href='https://dessertinoglobal.com/gujarat-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white", marginLeft: "25px" }}>Gujarat<RightOutlined /></button></a><br /><br />
                        <a href='https://dessertinoglobal.com/our-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>South-India<RightOutlined /></button></a>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4%" }}>
                    <div>
                        <img className="img5" src='https://www.eatingbirdfood.com/wp-content/uploads/2022/12/protein-pizza-hero.jpg' alt='image'
                            style={{ height: "650px", width: "550px" }} />
                    </div>
                    <div style={{ marginTop: "8%" }}>
                        <h1>Pizzas</h1>
                        <p >Perfect crust and tempting toppings are our<br /> speciality.</p>
                        <h6 style={{ marginTop: "20%" }}>Explore Pizzas in</h6>
                        <a href='https://dessertinoglobal.com/dubai-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>Dubai<RightOutlined /></button></a>
                        <a href='https://dessertinoglobal.com/gujarat-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white", marginLeft: "25px" }}>Gujarat<RightOutlined /></button></a><br /><br />
                        <a href='https://dessertinoglobal.com/our-menu/'>
                            <button className='btn' style={{ backgroundColor: "#D84E99", color: "white" }}>South-India<RightOutlined /></button></a>
                    </div>
                </div>
            </div >
            <div style={{
                backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/007/709/058/small/blur-of-chef-wearing-black-face-mask-while-preparing-food-in-the-japanese-restaurant-photo.jpg')"
                , height: '60vh',
                fontSize: '50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', marginTop: "5%",
            }}>
                <div className='container'>
                    <h1 style={{ color: "white", textAlign: "center" }}>Order Now</h1>
                    <div style={{ textAlign: "center" }}>
                        <button className='btn' style={{ backgroundColor: "#D84E99", color: "white", padding: "10px 40px 10px 40px", borderRadius: "25px" }}><b>India</b></button>
                        <button className='btn' style={{ marginLeft: "10px", backgroundColor: "white", color: "gray", padding: "10px 40px 10px 40px", borderRadius: "25px" }}><b>Dubai</b></button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2%" }}>
                        <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "25px" }}>
                            <img src='https://dessertinoglobal.com/wp-content/uploads/2022/07/zomato-1024x576.png' alt='image' height="190px" /><br />
                            <a href='https://www.zomato.com/'><button className='btn' style={{ marginLeft: "15%", backgroundColor: "#D84E99", color: "white", borderRadius: "25px", padding: "10px 40px 10px 40px" }}>Order on Zometo <RightOutlined /></button></a>
                        </div>
                        <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "25px" }}>
                            <img src='https://dessertinoglobal.com/wp-content/uploads/2022/07/swiggy.png' alt='image' height="140px" width="300px" style={{ marginTop: "10%" }} /><br />
                            <a href='https://www.swiggy.com/'><button className='btn' style={{ marginLeft: "15%", backgroundColor: "#D84E99", color: "white", borderRadius: "25px", padding: "10px 40px 10px 40px" }}>Order on Swiggy <RightOutlined /></button></a>
                        </div>
                        <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px 20px 10px 20px" }}>
                            <h1 style={{ fontSize: "40px" }}>Wanna<br />Dine in?</h1><br />
                            <a href='https://dessertinoglobal.com/stores/'><button className='btn' style={{ marginLeft: "8%", backgroundColor: "#D84E99", color: "white", borderRadius: "25px", padding: "10px 40px 10px 40px" }}>Find our store Nearby <RightOutlined /></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}