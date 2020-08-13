<template>
  <base-section id="kamping" class="shade">
    <base-section-heading title="Kamping">
      Surađujemo sa brojnim proizvođačima kamp opreme, kamp prikolica i autokampera.
    </base-section-heading>

    <v-container>
      <v-container fluid>
        <v-row class="mb-10">
          <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
            <v-card flat tile class="d-flex">
              <v-img :src="require(`@/assets2/kamp${n}.jpg`)" aspect-ratio="1.5" class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col>
          <div v-swiper="swiperOptions">
            <div class="swiper-wrapper">
              <div v-for="(kamp, i) in kamping" :key="i" class="swiper-slide grey lighten-1 pa-4" align="center">
                <a :href="kamp.url" target="_blank" rel="noopener noreferrer"><base-img :src="require(`@/assets2/kamping/${kamp.logo}`)" contain height="100" width="100" /></a>
              </div>
            </div>
            <div class="swiper-pagination" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionKamping',

  data: () => ({
    features: [
      {
        title: 'Pixel Perfect Design',
        icon: 'mdi-fountain-pen-tip',
      },
      {
        title: 'Retina Ready',
        icon: 'mdi-cellphone',
      },
      {
        color: 'primary',
        dark: true,
        title: 'Easily Customizable',
        icon: 'mdi-pencil-box-outline',
      },
      {
        title: 'Image Parallax',
        icon: 'mdi-image-size-select-actual',
      },
      {
        title: 'Seo Optimized',
        icon: 'mdi-ice-pop',
      },
      {
        title: '24/7 Support',
        icon: 'mdi-help-circle-outline',
      },
    ],
    kamping: [
      { logo: 'rmi_logo.png', url: 'https://www.reisemobil-international.de/' },
      { logo: 'ccc_logo.jpg', url: 'https://www.camping-cars-caravans.de/' },
      { logo: 'gante-logo-vollweiss.png', url: 'http://www.uwegante.de/' },
      { logo: 'mobile.de.svg', url: 'https://www.mobile.de/' },
      { logo: 'womo-logo-frei.png', url: 'https://www.womo.de/' },
      { logo: 'WIGO-3D-neu.png', url: 'https://www.wigo-zelte.de/' },
      { logo: 'nb.svg', url: 'https://www.niesmann-bischoff.com/en/' },
      { logo: 'dchvlogobanner.gif', url: 'https://www.dchv.de/' },
      { logo: 'truckscout24.svg', url: 'https://www.truckscout24.de/' },
      { logo: 'LCP-LOGO-Esecutivo-WEB-NEG-60x49.svg', url: 'https://www.rimor.it/int/en' },
      { logo: 'F001068_logo-hd.jpg', url: 'https://www.jollycaravan.it/' },
      { logo: 'adria-mobil.png', url: 'https://www.adria-mobil.com/' },
    ],
    imgs: ['https://via.placeholder.com/450.png/', 'https://via.placeholder.com/300.png/', 'https://via.placeholder.com/150.png/'],
    visible: false,
    index: 0,
    swiperOptions: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 10,
      initialSlide: 2,
      loop: true,
      loopedSlides: 10,
      loopFillGroupWithBlank: true,
      speed: 1500,
      freeMode: true,
      grabCursor: true,
      mousewheel: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),

  mounted() {
    console.log('Current Swiper instance object', this.$swiper);
    this.$swiper.autoplay.start();
    this.$swiper.pagination.render();
  },

  methods: {
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
