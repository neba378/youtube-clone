import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
        borderRadius: 20,
        boarder: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5}
    }}

    >
      <input className='search-bar' type='text' placeholder='search...' value="" onChange={() => {}} />
      <IconButton
        type='submit'
        sx={{ p: '10', color: 'red'}}
            
        >   
        <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar
