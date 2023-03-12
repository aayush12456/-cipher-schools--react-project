import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './home.css';
export default function Home() {
    const navigate = useNavigate()
    function gotojeeta() {
        navigate("/jeeta")
    }
    function gotohumsafar() {
        navigate("/Humsafar")
    }
    function gotokuch() {
        navigate("/kuch")
    }
    function gotodil() {
        navigate("/dil")
    }
    function gotoumar() {
        navigate("/umar")
    }
    function gotomera() {
        navigate("/mera")
    }
    function gotopyar() {
        navigate("/pyar")
    }
    function gotobakhuda() {
        navigate("/bakhuda")
    }
    function gotoaate() {
        navigate("/aate")
    }


    return (

        <>



            <img id='img' onClick={gotojeeta} src="https://i.scdn.co/image/ab67616d0000b2733b1a73787cb4c73ddc92b302"></img>
            <p id="p1">Jo Jeeta Wo Hi Sikandar</p>
            <img id='img1' onClick={gotohumsafar} src="https://i.ytimg.com/vi/sWqjZpBtcxc/maxresdefault.jpg"></img>
            <p id="p2">Ae Mere Humsafar</p>
            <img id='img2' onClick={gotokuch} src="https://images.thequint.com/thequint/2015-10/ed746b6e-5357-4708-9c93-e5be01cc138e/Kuch-Kuch-Hota-Hai-44312_7714.jpg?%20%20%20%20%20%20%20%20%20%20%20%20%20%20auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0"></img>
            <p id="p3">Kuch Kuch Hota Hai</p>
            <img id='img3' onClick={gotodil} src="https://i.ytimg.com/vi/edjaGdZXKIg/maxresdefault.jpg"></img>
            <p id="p4">Dil Deewana(male)</p>
            <p id="p5">Best of 1970-1990</p>
            <img id='img4' onClick={gotoumar} src="https://s2.dmcdn.net/v/BW1nl1Mnr7zfzatWI/x1080"></img>
            <p id="p6">Mere Umar ke Naujavano</p>
            <img id='img5' onClick={gotomera} src="https://i.ytimg.com/vi/8sTPX0eQ_r8/maxresdefault.jpg"></img>
            <p id="p7">Aap ke aa jane se</p>
            <img id='img8' onClick={gotoaate} src="https://i.scdn.co/image/ab67616d0000b273c5b6d1e31576518212ee3805"></img>
            <p id="p11">Aate Jaate Haste Gaate</p>
            <p id="p8">Best after 2000</p>
            <img id='img6' onClick={gotopyar} src="https://i.ytimg.com/vi/B7SkAq_94J8/maxresdefault.jpg"></img>
            <p id="p9">Pehla Pehla Pyar Hai Mera</p>
            <img id='img7' onClick={gotobakhuda} src="https://i.ytimg.com/vi/drhvSZ1oRYI/maxresdefault.jpg"></img>
            <p id="p10">Bakhuda Tumhi ho</p>
        </>
    )
}