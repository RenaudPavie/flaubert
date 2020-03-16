z<template>
  <div>
    <b-carousel id="homeCarousel" style="text-shadow: 0px 0px 2px #000" fade>
      <b-carousel-slide :key="index" v-for="(img, index) in carouselImg">
        <b-img :src="img.url"></b-img>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      carouselImg: [
        {
          url: require('@/assets/images/slider/slide-bg-1.png')
        },
        {
          url: require('@/assets/images/slider/slide-bg-2.png')
        }
      ]
    }
  }
}
</script>
<style lang="scss">
// #homeCarousel {
//     width: 90%;
//     height:600px;
//     // float: left;
//     position: absolute;
//     display: block;
//     left: 0;
//     top: 200px;
//     z-index: 1;
//     .carousel-inner,.carousel-item,.carousel-caption, .carousel-item img {
//         height: 100%;
//         width: 100%;
//         border-bottom-right-radius: 200px;
//     }
//     .carousel-caption {
//         position: unset;
//         padding: 0;
//     }
//     img {
//         object-fit: cover;
//     }
// }
</style>
