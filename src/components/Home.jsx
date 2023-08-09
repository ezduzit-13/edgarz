import React,{useContext, useState} from 'react'
import Navbar from './Navbar'
import './main.css'
import { useNavigate } from 'react-router-dom'
import { NavContext, useNavOptions } from '../context/NavContext'
import me from '../images/me.JPG'
import TableRow from './TableRow'
import Spacing from './Spacing'


const Home = () => {
  const navigate = useNavigate()
  const navOptions = useNavOptions()

  return (
    <>
    <Spacing />
    <div className='center-here'>
      <h3>
        A Peak Into My Life.
      </h3>
    </div>
    {/* The Poetry Table */}
    <Spacing />
    <div className='center-here'>
    <table >
      <th style=
      {
        {backgroundColor:'black',color:'white'}
      }
      >
        <h1>Poems</h1>
      </th>
      <TableRow>
        <h2
        onClick={()=>navigate('aimless-reading')}
        >Aimless Reading</h2>
      </TableRow>
      <TableRow>
        <h2>Poem 2</h2>
      </TableRow>
      <TableRow>
        <h2>Poem 3</h2>
      </TableRow>
    </table>
    </div>
    {/* The Photography Table */}
    <br /><br /><br /><br />
    <div className='center-here'>
    <table >
      <th style=
      {
        {backgroundColor:'black',color:'white'}
      }
      >
        <h1>Photography</h1>
      </th>
      <TableRow>
        <h2
        onClick={()=> navigate('florida-nights-photos')}
        >A Night in Florida</h2>
      </TableRow>
      <TableRow>
        <h2
        onClick={()=> navigate('new-mexico-photos')}
        >Santa Fe With Some Buddies</h2>
      </TableRow>
    </table>
    </div>
    <Spacing />
    </>
  )
}

export default Home