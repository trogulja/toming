<template>
  <base-section id="kako-radimo">
    <base-section-heading title="Kako radimo">
      Ovo su samo neki od zahvata koje smo tokom godina odradili za naše zadovoljne klijente.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(image, i) in randomImages" :key="i" cols="6" sm="3" md="2" class="d-flex child-flex">
          <v-card flat tile class="d-flex">
            <v-img aspect-ratio="1" class="grey lighten-2" :src="image.src" @click="showSingle(image.i)">
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
    <vue-easy-lightbox move-disabled :visible="visible" :imgs="images" :index="index" @hide="handleHide" />
  </base-section>
</template>

<script>
export default {
  name: 'SectionKakoRadimo',

  data: () => ({
    imgs: [
      '01b.jpg',
      '02b.jpg',
      '03b.jpg',
      '04b.jpg',
      '05b.jpg',
      '06b.jpg',
      '07b.jpg',
      '08b.jpg',
      '09b.jpg',
      '102staklenaopeka1b.jpg',
      '104staklenaopeka3b.jpg',
      '10b.jpg',
      '11b.jpg',
      '125.jpg',
      '12b.jpg',
      '13b.jpg',
      '145izolacija-min.vunab.jpg',
      '14b.jpg',
      '156-radovi.jpg',
      '156zidkuhinjeb.jpg',
      '15b.jpg',
      '16b.jpg',
      '171-radovi.jpg',
      '17b.jpg',
      '184-radovi.jpg',
      '18b.jpg',
      '19b.jpg',
      '208-radovi.jpg',
      '20b.jpg',
      '212-radovi.jpg',
      '21b.jpg',
      '22b.jpg',
      '231-namjestaj.jpg',
      '236-namjestaj.jpg',
      '237-namjestaj.jpg',
      '23b.jpg',
      '241-namjestaj.jpg',
      '24b.jpg',
      '25b.jpg',
      '26b.jpg',
      '27b.jpg',
      '28b.jpg',
      '29b.jpg',
      '302travnjakkodulazab.jpg',
      '30b.jpg',
      '49b.jpg',
      '50b.jpg',
      '51b.jpg',
      '55b.jpg',
      'a-keram-uzorak03b.jpg',
      'asfalt01b.jpg',
      'chimera2b.jpg',
      'dimnjaksacijevima1b.jpg',
      'dscf0003b.jpg',
      'DSCF0356.jpg',
      'DSCF0496.jpg',
      'n10b.jpg',
      'n11b.jpg',
      'n12b.jpg',
      'n13b.jpg',
      'n1b.jpg',
      'n2b.jpg',
      'n3b.jpg',
      'n4b.jpg',
      'n5b.jpg',
      'n6b.jpg',
      'n7b.jpg',
      'n8b.jpg',
      'n9b.jpg',
      'wc-tuskadab.jpg',
    ],
    visible: false,
    index: 0,
  }),

  computed: {
    images() {
      const output = [];
      this.imgs.forEach((img) => {
        output.push({ title: img, src: require(`@/assets2/kakoradimo/${img}`) });
      });
      return output;
    },
    randomImages() {
      let maxSize = 6 * 3;
      if (this.$vuetify.breakpoint.smOnly) maxSize = 6 * 2;
      if (this.$vuetify.breakpoint.xsOnly) maxSize = 6;
      const output = [];
      const pool = new Set();

      while (pool.size < maxSize) {
        pool.add(Math.floor(Math.random() * this.imgs.length));
      }

      pool.forEach((el) => {
        output.push({ i: el, title: this.imgs[el], src: require(`@/assets2/kakoradimo/${this.imgs[el]}`) });
      });

      return output;
    },
  },

  methods: {
    showSingle(i) {
      this.index = i;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
