<template>
    <div class="swiper-container"
         ref="slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="slide in slides">
                <img :src="slide.img_url"/>
            </div>
        </div>
        <div class="swiper-pagination"
             ref="pagination"></div>
    </div>
</template>
<style type="text/css">
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}
.swiper-wrapper {
  height: 200px;
}
.swiper-slide img {
  max-width: 100%;
}
.swiper-slide {
  text-align: center;
  background: #fff;
/* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
<script type="text/javascript">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import G1 from '@/assets/1.jpg'
import G2 from '@/assets/2.jpg'
import G3 from '@/assets/3.jpg'
export default{
  data () {
    return {
      G1,
      G2,
      G3,
      slides: [
        {id: 1, img_url: G1},
        {id: 2, img_url: G2},
        {id: 3, img_url: G3}
      ]
    }
  },
  mount () {
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  }
}
</script>
