<template>
  <base-section id="kontakt" space="56">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="12" md="5">
          <base-business-info title="KONTAKT PODACI">
            Trgovačko društvo Toming d.o.o. osnovano je 10. prosinca 1992 godine, upisano u registru Trgovačkog suda Zagreb Mat. br. subjekta upisa (080026577), MB: 0180971, OIB: 44990644803
          </base-business-info>
        </v-col>

        <v-col cols="12" md="6">
          <base-contact-form title="POŠALJITE NAM PORUKU" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionKontakt',
};
</script>
