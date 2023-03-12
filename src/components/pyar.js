import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import './jeeta.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function Pyar() {
    const [show, setshow] = useState(false);
    const [hide, setHide] = useState(false)
    const [num, setNum] = useState(108)
    const [nums, setNums] = useState(19)
    const [msg, setMsg] = useState('')
    const [data, setData] = useState([]);
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()
    const [hides, setHides] = useState(false)
    const [shows, setShows] = useState(true)
    function gotobakhuda() {
        navigate("/bakhuda")
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
    const friend = () => {
        toast('Subscription added')
    }
    const friends = () => {
        toast('Subscription removed')
    }
    let submit = async (e) => {
        e.preventDefault()
        try {
            alert("submitted")
            await axios.post("http://localhost:8000/", {
                msg
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <ReactPlayer id="r1" url="https://www.youtube.com/watch?v=B7SkAq_94J8" controls={true} />
            <p id="a1">Pehla Pyaar | Kabir Singh | Shahid Kapoor, Kiara Advani | Armaan Malik <br />| Vishal Mishra</p>
            <p id="a2">74M views  3 years ago</p>
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
            <img id='a15' onClick={gotobakhuda} src="https://i.ytimg.com/vi/drhvSZ1oRYI/maxresdefault.jpg"></img>
            <p id="a16">Bakhuda Tumhi ho</p>
        </>
    )
}