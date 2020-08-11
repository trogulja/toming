<template>
  <section id="hero">
    <v-img :min-height="minHeight" :height="minHeight" :src="require('@/assets2/floor-plan-on-table-834892.jpg')" class="white--text" gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)">
      <v-container class="fill-height px-4 py-12">
        <v-responsive class="d-flex align-center" height="100%" max-width="700" width="100%">
          <base-heading class="mb-8" title="KVALITETAN MAJSTOR PO VAŠOJ MJERI" />

          <base-body class="mb-12">
            Od 1992. godine organiziramo i izvodimo adaptacije stambenih i poslovnih prostora, uređujemo lokale u novogradnji, te radimo sve vrste građevinskih, instalaterskih i završnih radova.
          </base-body>

          <div :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'" class="d-flex flex-wrap">
            <base-btn>Kontaktirajte nas</base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',

  provide: {
    theme: { isDark: true },
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh';

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>
