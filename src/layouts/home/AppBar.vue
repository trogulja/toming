<template>
  <div>
    <v-app-bar id="home-app-bar" app color="shade" elevation="8" height="120" hide-on-scroll scroll-threshold="80" prominent>
      <div id="logo_wrapper" class="wrapper">
        <svg id="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 285.333 97.334" enable-background="new 0 0 285.333 97.334" xml:space="preserve">
          <path id="logo_t" fill="#979797" stroke="#979797" stroke-miterlimit="10" d="M44.8,53c-2.862,0-4.966-2.416-4.966-5.475V10.334H24.667
            v38.934c0,13.129,6.313,20.066,17.17,20.066l0,0h5.58V58.209v-3.162V53H44.8z" class="svg-elem-1" />
          <path id="logo_o" fill="#979797" stroke="#979797" stroke-miterlimit="10" d="M71.99,25.595c-12.081,0-21.875,9.794-21.875,21.875
            s9.794,21.874,21.875,21.874c12.081,0,21.875-9.793,21.875-21.874S84.071,25.595,71.99,25.595z M71.99,54.053
            c-3.636,0-6.583-2.947-6.583-6.583c0-3.636,2.948-6.583,6.583-6.583c3.635,0,6.583,2.947,6.583,6.583
            C78.573,51.105,75.625,54.053,71.99,54.053z" class="svg-elem-2" />
          <path id="logo_m" fill="#979797" stroke="#979797" stroke-miterlimit="10" d="M142.531,25.584c-6.347,0-11.798,3.047-14.244,7.417
            c-2.446-4.37-7.897-7.417-14.244-7.417c-8.629,0-15.625,5.625-15.625,12.563v31.188h14v-5.42V50.641v-4.91
            c0-2.532,1.985-4.584,4.435-4.584c2.45,0,4.435,2.052,4.435,4.584v3.541v14.643v5.42h14v-5.317V49.271v-3.521
            c0-2.543,1.986-4.604,4.435-4.604c2.449,0,4.435,2.061,4.435,4.604v4.89v13.376v5.317h14V38.146
            C158.156,31.208,151.16,25.584,142.531,25.584z" class="svg-elem-3" />
          <rect id="logo_i" x="165.579" y="25.595" fill="#979797" stroke="#979797" stroke-miterlimit="10" width="16.833" height="43.749" class="svg-elem-4" />
          <path id="logo_n" fill="#979797" stroke="#979797" stroke-miterlimit="10" d="M209.095,25.595c-10.638,0-19.261,8.992-19.261,19.629
            v2.235v21.875h15.834V56.542v-9.083v-2.235c0-1.892,1.534-3.426,3.427-3.426c1.892,0,3.426,1.534,3.426,3.426v2.235v9.083v12.792
            h15.834V47.459v-2.235C228.355,34.587,219.732,25.595,209.095,25.595z" class="svg-elem-5" />
          <path id="logo_g" fill="#979797" stroke="#979797" stroke-miterlimit="10" d="M261.209,68.344c0.095-5.219,0-20.879,0-20.879
            c0-3.452-2.798-6.25-6.25-6.25s-6.25,2.798-6.25,6.25c0,3.451,2.798,6.25,6.25,6.25c0.938,0,1.826-0.213,2.625-0.584v16
            c-0.948,0.126-1.912,0.203-2.895,0.203c-12.079,0-21.87-9.791-21.87-21.869c0-12.079,9.791-21.87,21.87-21.87
            c12.078,0,21.869,9.792,21.869,21.87v19.833c0,12.078-9.791,21.869-21.869,21.869h-0.001H24.667v-15c0,0,169.254,0,225.672,0
            C258.855,74.167,261.136,72.396,261.209,68.344z" class="svg-elem-6" />
          <circle id="logo_krug" fill="#BE5434" stroke="#FFFFFF" stroke-miterlimit="10" cx="173.996" cy="30.396" r="20.063" class="svg-elem-7" />
          <path id="logo_strelica" fill="#BE5434" stroke="#FFFFFF" stroke-miterlimit="10" d="M9.917,6.959l36,20.375l-36,20.375
            c0,0,13.625-7.667,13.625-20.375C23.542,14.817,9.917,6.959,9.917,6.959z" class="svg-elem-8" />
        </svg>
      </div>

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" background-color="transparent" optional>
          <v-tab v-for="(name, i) in items" :key="i" :to="{ name }" :exact="name === 'Home'" active-class="text--primary" class="font-weight-bold" min-width="96" text>{{
            name
          }}</v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <home-drawer v-model="drawer" :items="items" />
  </div>
</template>

<script>
export default {
  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
  },

  data: () => ({
    drawer: null,
    items: ['Home', 'About', 'Contact', 'Pro'],
  }),

  mounted() {
    this.animateLogo(true);
    // setTimeout(() => {
    //   const wrapper = document.querySelector('#logo_wrapper svg')
    //   wrapper.classList.add('active')
    // }, 1000);

    this.observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        const newValue = m.target.getAttribute(m.attributeName);
        this.$nextTick(() => {
          this.onClassChange(newValue, m.oldValue);
        })
      }
    });

    this.observer.observe(document.querySelector('#home-app-bar'), {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
    });
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    onClassChange(classAttrValue) {
      const classList = classAttrValue.split(' ');
      const wrapper = document.querySelector('#logo_wrapper svg');
      if (classList.includes('v-app-bar--hide-shadow')) {
        if (wrapper.classList.contains('active')) wrapper.classList.remove('active');
      } else {
        this.animateLogo(true);
      }
    },
    animateLogo(state) {
      if (state) {
        setTimeout(() => {
          const wrapper = document.querySelector('#logo_wrapper svg');
          if (!wrapper.classList.contains('active')) wrapper.classList.add('active')
        }, 300);
      } else {
        setTimeout(() => {
          const wrapper = document.querySelector('#logo_wrapper svg');
          if (wrapper.classList.contains('active')) wrapper.classList.remove('active')
        }, 300);
      }
    },
  },
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

    .v-tab
      &::before
        display: none
</style>

<style lang="css">
#logo_wrapper {
  height: 100px;
  width: 282px;
}

svg .svg-elem-1 {
  stroke-dashoffset: 156.11715698242188px;
  stroke-dasharray: 156.11715698242188px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
                        fill 1.5s ease-in-out 1s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
                fill 1.5s ease-in-out 1s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
  fill: rgb(151, 151, 151);
}

svg .svg-elem-2 {
  stroke-dashoffset: 180.83016967773438px;
  stroke-dasharray: 180.83016967773438px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
                        fill 1.5s ease-in-out 1.1s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
                fill 1.5s ease-in-out 1.1s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 0;
  fill: rgb(151, 151, 151);
}

svg .svg-elem-3 {
  stroke-dashoffset: 307.1596374511719px;
  stroke-dasharray: 307.1596374511719px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
                        fill 1.5s ease-in-out 1.2s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
                fill 1.5s ease-in-out 1.2s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 0;
  fill: rgb(151, 151, 151);
}

svg .svg-elem-4 {
  stroke-dashoffset: 123.16398620605469px;
  stroke-dasharray: 123.16398620605469px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
                        fill 1.5s ease-in-out 1.3s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
                fill 1.5s ease-in-out 1.3s;
}

svg.active .svg-elem-4 {
  stroke-dashoffset: 0;
  fill: rgb(151, 151, 151);
}

svg .svg-elem-5 {
  stroke-dashoffset: 201.8839111328125px;
  stroke-dasharray: 201.8839111328125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
                        fill 1.5s ease-in-out 1.4s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
                fill 1.5s ease-in-out 1.4s;
}

svg.active .svg-elem-5 {
  stroke-dashoffset: 0;
  fill: rgb(151, 151, 151);
}

svg .svg-elem-6 {
  stroke-dashoffset: 715.9498291015625px;
  stroke-dasharray: 715.9498291015625px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
                        fill 1.5s ease-in-out 1.5s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
                fill 1.5s ease-in-out 1.5s;
}

svg.active .svg-elem-6 {
  stroke-dashoffset: 0;
  fill: rgb(151, 151, 151);
}

svg .svg-elem-7 {
  stroke-dashoffset: 128.059546817944px;
  stroke-dasharray: 128.059546817944px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
                        fill 1.5s ease-in-out 1.6s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
                fill 1.5s ease-in-out 1.6s;
}

svg.active .svg-elem-7 {
  stroke-dashoffset: 0;
  fill: rgb(190, 84, 52);
}

svg .svg-elem-8 {
  stroke-dashoffset: 135.8778533935547px;
  stroke-dasharray: 135.8778533935547px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
                        fill 1.5s ease-in-out 1.7000000000000002s;
          transition: stroke-dashoffset 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
                fill 1.5s ease-in-out 1.7000000000000002s;
}

svg.active .svg-elem-8 {
  stroke-dashoffset: 0;
  fill: rgb(190, 84, 52);
}

</style>
