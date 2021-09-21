<template :color="$vuetify.theme.dark ? 'dark' : 'light'">
  <v-container class="home" >
    <v-row no-gutters style="flex-wrap: nowrap;height:84vh;">
      <v-col cols="4" class="flex-grow-0 flex-shrink-0 ma-0 pa-0">
        
        <ImageAdjustments />

      </v-col>
      <v-divider
        vertical
      ></v-divider>
      <v-col cols="4" class="flex-grow-0 flex-shrink-0 ma-0 pa-0">
        COLUNA 2
      </v-col>
      <v-divider
        vertical
      ></v-divider>
      <v-col cols="4" class="flex-grow-0 flex-shrink-0 ma-0 pa-0">
        COLUNA 3
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import ImageAdjustments from "@/components/ImageAdjustments/ImageAdjustments.vue";

export default {
  name: "Home",
  components: {
    ImageAdjustments,
  },
  data() {
    return {
      tab: null,
      items: ["IMAGE ADJUSTMENTS", "SPEED CONTROL"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
    display: none;
    visibility: hidden;
}
</style>