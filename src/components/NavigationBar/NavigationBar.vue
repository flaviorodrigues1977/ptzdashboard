<template :color="$vuetify.theme.light ? 'light' : 'dark'">
  <v-container class="ma-0 pa-0" :color="$vuetify.theme.dark ? 'dark' : 'light'">
    <v-row d-flex flex-row class="ma-0 pa-0" :color="$vuetify.theme.dark ? 'dark' : 'light'">
      <v-col
        cols="1"
        class="d-flex align-center ma-0 pa-0"
        >
        <a href="/" :class="$vuetify.theme.dark ? 'logodark' : 'logolight'" ></a>
      </v-col>
      <v-col
        cols="3"
        class="d-flex align-center ma-0 pa-0 "
      >
        <h1 class="titleH2">CONTROL CENTER</h1>
      </v-col>
      <v-col
        cols="2"
        class="d-flex align-center ma-0 pa-0"
      >
        <HeaderUser />
      </v-col> 
      <v-col
        cols="4"
        class="d-flex align-center ma-0 pa-0"
        >
        <v-sheet class="mx-auto" max-width="400"  style="background:transparent;">
          <v-slide-group multiple show-arrows  style="background:transparent;">
            <v-slide-item v-for="n in 12" :key="n" v-slot="{ active, toggle }">
              <v-btn
                class="ma-0 pa-0"
                :input-value="active"
                active-class="red white--text"
                depressed
                rounded
                @click="toggle"
              >
                Cam {{ n }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
      <v-col cols="1" style="ma-0 pa-0">
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="Change theme"
          inset
          persistent-hint
      ></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderUser from "@/components/HeaderUser/HeaderUser.vue";

export default {
  name: "NavigationBar",
  components: {
    HeaderUser,
  },
};
</script>

<style scoped>
.logolight {
  display:inline-block;
  width:79px;
  height:35px;
  background:url(../../assets/neoidLight.svg);
}

.logodark {
  display:inline-block;
  width:79px;
  height:35px; 
  background:url(../../assets/neoidDark.svg);

}
  
</style>
