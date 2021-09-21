<template fluid :color="$vuetify.theme.light ? 'dark' : 'light'">
  <v-app fluid :color="$vuetify.theme.dark ? 'dark' : 'light'">
    <v-app-bar fluid app absolute :color="$vuetify.theme.dark ? 'dark' : 'light'">
      <NavigationBar />
    </v-app-bar>
    <v-divider></v-divider>
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/modoedit">Modo Edit</router-link>
      <router-link to="/helpcenter">Help Center</router-link>
    </!--div-->
    <v-main fluid>

      <v-container fluid style="min-height:84vh;">

        
          <router-view/>
      </v-container>
    </v-main>

    <v-footer padless :color="$vuetify.theme.dark ? 'dark' : 'light'">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>NEOiD PTZ USB DASHBOARD</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>


<style lang="scss" scoped>
  @import './../node_modules/ress/ress.css';
  @import './styles/fonts/dinfonts.css';
  @import './styles/styles-dashboard.sass';
</style>

<script>
  import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";

  export default {
    name: 'Dashboard',
    metaInfo: {
      title: 'NEOiD PTZ USB Dashboard',
      titleTemplate: '%s | PTZ USB Dashboard',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
      components: {
        NavigationBar,
    },
  }
  
</script>
