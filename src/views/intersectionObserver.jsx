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

  const section1 = useInView({
  })

  const section2 = useInView({
  })

  const section3 = useInView({
  })

  const section4 = useInView({
  })

  const section5 = useInView({

    delay: 200
  })

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
        # {breadcrumbs.map(el => el)}
      </div>
      <div className='observer-container' style={{ backgroundColor: background }}>
        <section className='observer__section'>
          <div ref={section1.ref} className={section1.inView ? 'opacity-on' : 'opacity-off'}>Intersection Obeserver Api</div>
        </section>
        <section className='observer__section'>
          <div ref={section2.ref} className={section2.inView ? 'opacity-on' : 'opacity-off'}>PINK</div>
        </section>
        <section className='observer__section'>
          <div ref={section3.ref} className={section3.inView ? 'opacity-on' : 'opacity-off'}>GREEN</div>
        </section>
        <section className='observer__section'>
          <div ref={section4.ref} className={section4.inView ? 'opacity-on' : 'opacity-off'}>RED</div>
        </section>
        <section className='observer__section'>
          <h3 ref={section5.ref} className={section5.inView ? 'observer__transition-title' : 'observer__transition-title-off'}>END</h3>
        </section>
      </div>
    </LayoutDashboard>
  )
}

export default IntersectionObserver
