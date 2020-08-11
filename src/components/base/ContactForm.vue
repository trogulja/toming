<template>
  <div>
    <base-info-card :title="title" :subtitle="subtitle" space="4" color="primary" />

    <base-text-field v-model="ime" label="Ime" />

    <base-text-field v-model="email" label="Email" />

    <base-text-field v-model="naslov" label="Naslov" />

    <base-textarea v-model="poruka" class="mb-6" label="Vaša poruka" />

    <base-btn :color="!theme.isDark ? 'accent' : 'white'" :href="sendmail()" outlined target="_blank">
      Pošalji
    </base-btn>
  </div>
</template>

<script>
export default {
  name: 'BaseContactForm',

  // Injected from the Vuetify Themeable mixin
  inject: ['theme'],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: 'MAIL US YOUR MESSAGE',
    },
  },

  data() {
    return {
      ime: null,
      email: null,
      naslov: null,
      poruka: null,
    };
  },

  methods: {
    sendmail() {
      if (!this.ime) return '';
      if (!this.email) return '';
      if (!this.naslov) return '';
      if (!this.poruka) return '';
      const newline = '%0D%0A';
      const subject = encodeURI(`Uput s web stranice (${this.naslov})`);
      const body = encodeURI(this.poruka) + newline + newline + encodeURI(`${this.ime} - ${this.email}`);
      const output = `mailto:toming@zg.t-com.hr?subject=${subject}&body=${body}`;
      return output;
    },
  },
};
</script>
