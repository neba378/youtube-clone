import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchedTerm} = useParams()
  console.log(searchedTerm)
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(
        `search?q=${searchedTerm}&part=snippet,id&regionCode=US&order=date`
      );
      
        setVideos(data?.items);
    };
    fetchData();
  }, [searchedTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search result for <span style={{ color: "#F31503" }}>{searchedTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

