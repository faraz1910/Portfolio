import React from 'react'
import TopNav from './components/TopNav'
import { Outlet } from 'react-router-dom'
import SocialCorner from './components/SocialCorner'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
    <TopNav />
    <SocialCorner />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout