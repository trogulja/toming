<template>
  <v-navigation-drawer
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="white"
      shaped
    >
      <v-list-item
        v-for="item in items"
        :key="item.id"
        v-scroll-to="{ el: item.id, onStart: startScrolling, onDone: stopScrolling, onCancel: stopScrolling, offset: item.name === 'Toming' ? -120 : 0  }"
        color="primary"
        link
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },

    methods: {
      startScrolling() {
        this.$emit('moveStart', true);
      },
      stopScrolling() {
        this.$emit('moveEnd', true);
      },
    },
  }
</script>
