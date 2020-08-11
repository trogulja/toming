<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.226705912786!2d15.971623451671439!3d45.806717918440604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6fa3cbc40fb%3A0xed872e0ec71dcb90!2sTrg%20Petra%20Sva%C4%8Di%C4%87a%2011%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1597148537095!5m2!1sen!2sus"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
