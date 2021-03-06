import Head from 'next/head'
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import LandingHome from '../components/landinghome';

export default function Home() {
  // const router = useRouter()

  // useEffect(() => {
  //     router.push('/home')
  // }, [])
  
  return (
    <div className="mx-auto">
        <div className='mx-auto'>
          <Header />
          <LandingHome />
          <Footer />
      </div>
    </div>
  )
}
