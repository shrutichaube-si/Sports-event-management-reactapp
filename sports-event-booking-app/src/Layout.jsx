import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'
import img from './bg.png'

export default function Layout() {
  return (
    <div className='layout'>
    <Nav/>
    <Outlet/>
    </div>
  )
}
