import React from 'react'
import { Box, Stack } from "@mui/material";
import {ChannelCard, VideoCard} from './';

const Videos = ({videos, direction}) => {
  if (!videos?.length) return "Loading videos ..."
  
  return (
    <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item,idx) => (
        <>{console.log(item,idx)}
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
          </>
      )) }

    </Stack>
  )
}

export default Videos
