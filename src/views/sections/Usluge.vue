<template>
  <base-section id="usluge" class="shade">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="3">
            <base-info-card align="center" v-bind="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
export default {
  name: 'SectionUsluge',

  data: () => ({
    cards: [
      {
        icon: 'mdi-hammer-screwdriver',
        color: 'accent',
        colortext: 'shadeDark',
        title: 'Adaptacije i Uređenja',
        text: 'Adaptacije stambenih i poslovnih prostora, uređenje lokala u gradnji',
      },
      {
        icon: 'mdi-account-hard-hat',
        color: 'accent',
        colortext: 'shadeDark',
        title: 'Završni radovi',
        text: 'Sve vrste građevinskih, instalaterskih i završnih radova',
      },
      {
        icon: 'mdi-account-cash-outline',
        color: 'accent',
        colortext: 'shadeDark',
        title: 'Računovodstvo',
        text: 'Računovodstva za mala društva.',
      },
      {
        icon: 'mdi-rv-truck',
        color: 'accent',
        colortext: 'shadeDark',
        title: 'Kamp oprema',
        text: 'Iznajmljivanje i prodaja kamp opreme, kamp prikolica i autokampera.',
      },
    ],
  }),
};
</script>
