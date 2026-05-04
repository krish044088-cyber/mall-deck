'use client'
import { useState, useEffect } from 'react'

export default function MallOfAmericaDeck() {
  const [activeSection, setActiveSection] = useState('opening')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const sections = [
    { id: 'opening', label: 'OPENING' },
    { id: 'why', label: 'WHY MOA' },
    { id: 'retail', label: 'RETAIL' },
    { id: 'luxury', label: 'LUXURY' },
    { id: 'dining', label: 'DINING' },
    { id: 'attractions', label: 'ATTRACTIONS' },
    { id: 'events', label: 'EVENTS' },
  ]

  const styles = {
    main: {
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
    },
    nav: {
      position: 'fixed',
      top: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '20px',
      zIndex: 100,
      background: 'rgba(0,0,0,0.6)',
      padding: '15px 30px',
      borderRadius: '50px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(132,204,22,0.2)',
    },
    navBtn: (isActive) => ({
      background: 'none',
      border: 'none',
      color: isActive ? '#84cc16' : '#fff',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '2px',
      cursor: 'pointer',
      opacity: isActive ? 1 : 0.5,
      transition: 'all 0.3s',
    }),
    section: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 1,
      transition: 'opacity 0.8s ease-in-out',
      padding: '0 10%',
      textAlign: 'center',
      background: 'transparent',
    },
    videoBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,        // ← -1 se 0 kar diya
      opacity: 0.6,     // ← 0.4 se 0.6 kar diya
    },
    title: {
      fontSize: '90px',
      fontWeight: '900',
      color: '#84cc16',
      textShadow: '0 0 40px rgba(132,204,22,0.6)',
      margin: 0,
      lineHeight: 1,
      letterSpacing: '-2px',
      zIndex: 1,        // ← text video ke upar rahega
    },
    subtitle: {
      fontSize: '20px',
      fontWeight: '300',
      letterSpacing: '8px',
      marginTop: '20px',
      opacity: 0.8,
      zIndex: 1,        // ← text video ke upar rahega
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px',
      marginTop: '60px',
      maxWidth: '900px',
      zIndex: 1,
    },
    statCard: {
      background: 'rgba(132,204,22,0.05)',
      border: '1px solid rgba(132,204,22,0.2)',
      padding: '40px',
      borderRadius: '8px',
      backdropFilter: 'blur(20px)',
    },
    statNum: {
      fontSize: '56px',
      fontWeight: '900',
      color: '#84cc16',
      margin: 0,
    },
    statLabel: {
      fontSize: '14px',
      letterSpacing: '3px',
      opacity: 0.6,
      marginTop: '10px',
    },
    contentText: {
      fontSize: '24px',
      lineHeight: 1.6,
      maxWidth: '800px',
      opacity: 0.9,
      marginTop: '40px',
      zIndex: 1,
    },
  }

  const renderSection = () => {
    switch(activeSection) {
      case 'opening':
        return (
          <div style={styles.section}>
            <video
              style={styles.videoBg}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/mall.mp4" type="video/mp4" />
            </video>
            <h1 style={styles.title}>MALL OF AMERICA</h1>
            <p style={styles.subtitle}>NOT A MALL. A DESTINATION.</p>
          </div>
        )
      
      case 'why':
        return (
          <div style={styles.section}>
            <h2 style={{...styles.title, fontSize: '70px'}}>WHY MOA</h2>
            <div style={styles.statGrid}>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>40M+</h3>
                <p style={styles.statLabel}>ANNUAL VISITORS</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>5.6M</h3>
                <p style={styles.statLabel}>SQUARE FEET</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>520+</h3>
                <p style={styles.statLabel}>STORES</p>
              </div>
            </div>
            <p style={styles.contentText}>
              Located in Bloomington, Minnesota. More visitors than Disney World, 
              Grand Canyon, and Las Vegas combined. The #1 tourist destination in the Midwest.
            </p>
          </div>
        )

      case 'retail':
        return (
          <div style={styles.section}>
            <h2 style={{...styles.title, fontSize: '70px'}}>RETAIL</h2>
            <p style={styles.contentText}>
              From flagship experiences to emerging brands. Nike, Apple, LEGO, and 500+ more. 
              78% of visitors make a purchase. Average dwell time: 3+ hours.
            </p>
            <div style={styles.statGrid}>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>$2B+</h3>
                <p style={styles.statLabel}>ANNUAL SALES</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>78%</h3>
                <p style={styles.statLabel}>CONVERSION</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>4</h3>
                <p style={styles.statLabel}>FLOORS</p>
              </div>
            </div>
          </div>
        )

      case 'luxury':
        return (
          <div style={styles.section}>
            <h2 style={{...styles.title, fontSize: '70px'}}>LUXURY</h2>
            <p style={styles.contentText}>
              The Avenue: Minnesota's only luxury wing. Burberry, Louis Vuitton, Gucci, 
              Tiffany & Co. Tax-free shopping on apparel. Elevated architecture, concierge service.
            </p>
          </div>
        )

      case 'dining':
        return (
          <div style={styles.section}>
            <h2 style={{...styles.title, fontSize: '70px'}}>DINING & LIFESTYLE</h2>
            <p style={styles.contentText}>
              50+ restaurants. Celebrity chef concepts. Food as destination. 
              From Shake Shack to fine dining. Culinary experiences that drive traffic.
            </p>
            <div style={styles.statGrid}>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>50+</h3>
                <p style={styles.statLabel}>RESTAURANTS</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNum}>4</h3>
                <p style={styles.statLabel}>FOOD COURTS</p>
              </div>
            </div>
          </div>
        )

      case 'attractions':
        return (
          <div style={styles.section}>
            <h2 style={{...styles.title, fontSize: '70px'}}>ATTRACTIONS</h2>
            <p style={styles.contentText}>
              Nickelodeon Universe: 7 acres. SEA LIFE Aquarium. Crayola Experience. 
              FlyOver America. This is what separates MOA from every other mall on earth.
            </p>
          </div>
        )

      case 'events':
        return (
          <div style={styles.section}>
            <h2 style={{...styles.title, fontSize: '70px'}}>EVENTS PLATFORM</h2>
            <p style={styles.contentText}>
              Concerts. Product launches. Brand activations. Celebrity appearances. 
              400+ events per year. Not just a building — a global media platform.
            </p>
            <div style={{...styles.statCard, marginTop: '40px', padding: '30px 60px'}}>
              <h3 style={{...styles.statNum, fontSize: '32px'}}>BOOK YOUR ACTIVATION</h3>
              <p style={{...styles.statLabel, color: '#84cc16'}}>LEASING@MALL.COM</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow: hidden; }
      `}</style>
      <div style={styles.main}>
        <nav style={styles.nav}>
          {sections.map(s => (
            <button
              key={s.id}
              style={styles.navBtn(activeSection === s.id)}
              onClick={() => setActiveSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        {renderSection()}
      </div>
    </>
  )
}