import {AppProps} from 'next/app';
import localFont from 'next/font/local';
import { useEffect } from 'react';
import { Footer } from '../src/components/Footer';
import { Header } from '../src/components/Header';
import { axeAccessibilityReporter } from '../src/utils/axeAccessibilityReporter';
import '../styles/globals.css';

export const museoSans = localFont({
  src: [
    {
      path: '../public/MuseoSans/MuseoSans-100.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/MuseoSans/MuseoSans-500.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/MuseoSans/MuseoSans-700.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/MuseoSans/MuseoSans-900.ttf',
      weight: '900',
      style: 'normal'
    }
  ]
})

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    axeAccessibilityReporter();
  },[]);
  
  return (
    <div className={museoSans.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
