import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { Videos } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  const {id} = useParams()
  useEffect(()=>{
    const fetchData = async () => {
          const data = await fetchFromAPI(
            `videos?part=snippet,statistics&id=${id}`
          );
          const vid = await fetchFromAPI(
            `search?part=snippet&relatedToVideoId=${id}&type=video`
          );
          if (data?.items.length > 0) {
            setVideoDetail(data.items[0]);
          } else {
            console.error("No video data found");
          }
setVideos(vid);
console.log("vid",vid)
          if (vid?.items ){
            setVideos(vid.items);
          } else {
            console.error("No suggested video found");
          }
        };
        fetchData()

  },[id])
  if (!videoDetail?.snippet) return 'Loading ...'
  const {snippet: {title, channelId, channelTitle}, statistics: { viewCount, likeCount }} = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={2}>
          <Box sx={{ width: "100%", height:'100%', position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle2", md: "h4" }}
                  color="#fff"
                  fontSize="18px"
                >
                  {channelTitle}{" "}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box width='40%' px={2} py={{ md: 1, xs:5}} justifyContent='center' alignItems='center' >
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail
