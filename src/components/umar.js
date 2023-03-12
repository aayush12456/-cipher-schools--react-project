import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import './jeeta.css';
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function Umar() {
    const [show, setshow] = useState(false);
    const [hide, setHide] = useState(false)
    const [num, setNum] = useState(7)
    const [nums, setNums] = useState(1)
    const [msg, setMsg] = useState('')
    const [data, setData] = useState([]);
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()
    const [hides, setHides] = useState(false)
    const [shows, setShows] = useState(true)
    function gotomera() {
        navigate("/mera")
    }
    function gotoaate() {
        navigate("/aate")
    }
    const friend = () => {
        toast('Subscription added')
    }
    const friends = () => {
        toast('Subscription removed')
    }
    useEffect(() => {
        fetch("http://localhost:8000/", {
            method: "GET"
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "allData")
                setData(data.data)
            })
    }, [])

    const incNum = () => {
        setNum(num + 1);
    }

    const decNum = () => {
        setNums(nums + 1);
        toast('Feedback shared with creator')
    }
    let submit = async (e) => {
        e.preventDefault()
        try {
            alert("submitted")
            await axios.post("http://localhost:8000/umar/", {
                msg
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <ReactPlayer id="r1" url="https://www.youtube.com/watch?v=cBqq_3d_tO0" controls={true} />
            <p id="a1">Meri Umar Ke Naujawano Om Shanti Om | Karz | Rishi Kapoor |<br /> Kishore Kumar | 80's Song</p>
            <p id="a2">5000 views* Mar 20 2009</p>
            {
                shows && <button type="button" class="btn btn-danger" onClick={() => { setHides(!hides); setShows(!shows); friend() }} id="a3">Subscribe</button>
            }
            {
                hides && <button type="button" class="btn btn-secondary" onClick={() => { setShows(!shows); setHides(!hides); friends() }} id="a3" >Unsubsctibe</button>
            }
            <img id="a5" onClick={incNum} src="https://www.freepnglogos.com/uploads/like-png/like-thumbs-thumbs-vote-icon-29.png" />
            <p id="a6">{num}k</p>
            <img id="a7" onClick={decNum} src="https://www.freepnglogos.com/uploads/like-png/youtube-dislike-facebook-thumbs-down-not-like-png-36.png" />
            <p id="a8">{nums}k</p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '76ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form action="POST" >
                    <TextField onClick={() => setHide(!hide)} className="a9" id="standard-basic" label="Add Comment" variant="standard" onChange={(e) => { setMsg(e.target.value) }} />
                </form>
            </Box>
            {

                hide && <button type="submit" value="Submit" onClick={submit} class="btn btn-secondary" id="a10">Comment</button>
            }
            {
                hide && <button type="button" class="btn btn-light" id="a11">Cancel</button>
            }

            <ToastContainer />
            {data.map(i => {
                return (
                    <p onClick={() => setCheck(!check)} id="a12">{i.msg}</p>

                )
            })}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '76ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form action="POST" >
                    {
                        check && <TextField className="a9" id="standard-basic" label="Add reply" variant="standard" onChange={(e) => { setMsg(e.target.value) }} />
                    }
                    {
                        check && <button type="submit" value="Submit" onClick={submit} class="btn btn-secondary" id="a13">reply</button>
                    }

                </form>
            </Box>
            <img id='a15' onClick={gotomera} src="https://i.ytimg.com/vi/8sTPX0eQ_r8/maxresdefault.jpg"></img>
            <p id="a16">Aap ke aa jane se</p>
            <img id='a17' onClick={gotoaate} src="https://i.scdn.co/image/ab67616d0000b273c5b6d1e31576518212ee3805"></img>
            <p id="a18">Aate Jaate Haste Gaate</p>
        </>
    )
}