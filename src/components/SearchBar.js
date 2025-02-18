import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'

const SearchBar = () => {

  const [searchTerm, setsearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (searchTerm){
      navigate(`/search/${searchTerm}`)

      setsearchTerm('')
    }
  }
  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        boarder: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5}
    }}

    >
      <input className='search-bar' type='text' placeholder='search...' value={searchTerm} onChange={(e) => {setsearchTerm(e.target.value)}} />
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
