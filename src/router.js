import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './home'
import { Aboutus } from "./aboutus";
import { Franchise } from './franchise'
import { Dessertino } from './dessertino'
import { Menu } from './menu'
import { Outlets } from "./outlets";
import { Gallery } from "./gallery";
import { Contact } from "./contact";
export function ReactRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/franchise" element={<Franchise />} />
                    <Route path="/outlest" element={<Outlets />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dessertino" element={<Dessertino />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}