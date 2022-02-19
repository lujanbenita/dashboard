import { useState, useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import LayoutDashboard from '../layout/layoutDashboard'

const backgroundColor = {
  blue: '#2563eb',
  pink: '#db2777',
  green: '#16a34a',
  red: '#dc2626',
  transparent: 'transparent'
}

const IntersectionObserver = () => {
  const [background, setBackground] = useState()
  const [breadcrumbs, setBreadcrumbs] = useState([])

  const section1 = useInView({ delay: 300 })
  const section2 = useInView({ delay: 300 })
  const section3 = useInView({ delay: 300 })
  const section4 = useInView({ delay: 300 })
  const section5 = useInView({ delay: 300 })

  useEffect(() => {
    if (section1.inView) {
      setBackground(backgroundColor.blue)
      setBreadcrumbs(['Intersection Obeserver Api'])
    }
    if (section2.inView) {
      setBackground(backgroundColor.pink)
      setBreadcrumbs(['Intersection Obeserver Api > ', 'Pink'])
    }
    if (section3.inView) {
      setBackground(backgroundColor.green)
      setBreadcrumbs(['Intersection Obeserver Api > ', 'Pink > ', 'Green'])
    }
    if (section4.inView) {
      setBackground(backgroundColor.red)
      setBreadcrumbs(['Intersection Obeserver Api > ', 'Pink > ', 'Green > ', 'Red'])
    }
    if (section5.inView) {
      setBackground(backgroundColor.transparent)
      setBreadcrumbs(['Intersection Obeserver Api > ', 'Pink > ', 'Green > ', 'Red > ', 'END'])
    }
  }, [section1.inView, section2.inView, section3.inView, section4.inView, section5.inView])

  return (
    <LayoutDashboard className='observer'>
      <div className='observer__breadcrumbs'>
        # {breadcrumbs.map(el => <a key={el} href={`#${el.split(' ')[0]}`}>{el}</a>)}
      </div>
      <div className='observer-container' style={{ backgroundColor: background }}>
        <section id='Intersection' className='observer__section'>
          <div ref={section1.ref} className={section1.inView ? 'observer__transition-end' : 'opacity-off'}>Intersection Obeserver Api</div>
        </section>
        <section id='Pink' className='observer__section'>
          <div ref={section2.ref} className={section2.inView ? 'observer__transition-end' : 'observer__transition-pink'}>PINK</div>
        </section>
        <section id='Green' className='observer__section'>
          <div ref={section3.ref} className={section3.inView ? 'observer__transition-end' : 'observer__transition-green'}>GREEN</div>
        </section>
        <section id='Red' className='observer__section'>
          <div ref={section4.ref} className={section4.inView ? 'observer__transition-end' : 'observer__transition-red'}>RED</div>
        </section>
        <section id='END' className='observer__section'>
          <h3 ref={section5.ref} className={section5.inView ? 'observer__transition-end' : 'observer__transition-title'}>END</h3>
        </section>
      </div>
      <div className='observer__dots'>
        <a className='blue' href='#Intersection' />
        <a className='pink' href='#Pink' />
        <a className='green' href='#Green' />
        <a className='red' href='#Red' />
        <a className='transparent' href='#END' />
      </div>
    </LayoutDashboard>
  )
}

export default IntersectionObserver
