<template>
  <base-info-card title="Usluge">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-2 grey--text body-1 d-block text-none"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeaturesAlt',

    data: () => ({
      features: [
        'Adaptacije stambenih prostora',
        'Adaptacije poslovnih prostora',
        'Uređenje lokala u novogradnji',
        'Građevinski radovi',
        'Instalaterski radovi',
        'Završni radovi',
        'Računovodstva za mala društva',
        'Iznajmljivanje kamp opreme',
        'Iznajmljivanje kamp prikolica i autokampera',
        'Prodaja novih i rabljenih dijelova za kamp prikolice i autokampere',
      ],
    }),
  }
</script>
