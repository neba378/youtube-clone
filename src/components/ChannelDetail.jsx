import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)
        setchannelDetail(data?.items[0])
        const vid = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
        setvideos(vid?.items);
    }  
   fetchData()
   console.log("here",channelDetail)
   console.log(videos)

  },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1), rgba(0,212,255,1) 100%",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"}/>
      </Box>
      <Box display='flex' p='2' >
          <Box
          sx={{mr: {sm: '100px'}}}
          />
            <Videos videos={videos}/>
          
      </Box>
    </Box>
  );
}

export default ChannelDetail
