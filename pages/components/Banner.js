import {Carousel} from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel
          autoPlay
          infiniteLoop
          showStatus
          showIndicators={false}
          showThumbs={false}
          interval={5000}
      >
        <div>
          <img loading="lazy" src="" />
        </div>

        <div>

        </div>

        <div>

        </div>

      </Carousel>
    </div>
  )
}

export default Banner