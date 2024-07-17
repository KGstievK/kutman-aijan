import Image from 'next/image'
import scss from './Dad.module.scss'
import img from '../../../../public/assets/img_our_love.jpg'

const Dad = () => {
  return (
    <section className={scss.Dad}>
      <div className="container">
        <div className={scss.content}>
          <h1>OUR LOVE STORY</h1>
          <h2>Кутман Айжан</h2>
          <Image className={scss.img} src={img} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Dad