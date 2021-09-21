<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-col cols="6">
          <a
            v-for="(link, i) in settingsMenu"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SettingsMenu',

    data: () => ({
      settingsMenu: [
        {
          text: 'Settings',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'Help Center',
          href: 'https://github.com/vuetifyjs/vuetify',
        }
      ],
    }),
  }
</script>
