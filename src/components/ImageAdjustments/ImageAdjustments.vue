<template>
  <v-container class="ma-0 pa-0">
    <v-tabs v-model="tab" align-with-title class="ma-0 pa-0 imgAdjustments">
      <v-tabs-slider class="d-flex justify-start mb-0 pr-0" style="background:transparent;"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item" class="pr-0"  style="background:transparent;">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="ma-0 pa-0">
      <v-tab-item class="ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="4">
            <v-text-field v-text="luminance.label"></v-text-field>
            <v-text-field v-text="luminance.val"></v-text-field>
            <v-slider
              v-model="luminance.val"
              :thumb-color="luminance.color"
              thumb-label="always"
              vertical>
            </v-slider>
          </v-col>
          <v-col cols="4">
            <v-text-field v-text="contrast.label"></v-text-field>
            <v-text-field v-text="contrast.val"></v-text-field>
            <v-slider
              v-model="contrast.val"
              :thumb-color="contrast.color"
              thumb-label="always"
              vertical>
            </v-slider>
          </v-col>
          <v-col cols="4">
            <v-text-field v-text="hue.label"></v-text-field>
            <v-text-field v-text="hue.val"></v-text-field>
            <v-slider
              v-model="hue.val"
              :thumb-color="hue.color"
              thumb-label="always"
              vertical>
            </v-slider>
          </v-col>
        </v-row>
        
        
        
        
      </v-tab-item>
      <v-tab-item class="ma-0 pa-0">
        
        
        
        
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        tab: null,
        items: ["IMAGE ADJUSTMENTS","SPEED CONTROL"],
        luminance: { label: 'LUMINANCE', val: 50, color: 'red' },
        contrast: { label: 'CONTRAST', val: 50, color: 'red' },
        hue: { label: 'HUE', val: 50, color: 'red' },
      };
    },
  };

</script>

<style scoped>
.v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tab:first-child, .v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
  margin-left: 0 !important
}
.theme--dark.v-tabs-items {
    background-color: transparent;
}

.v-slide-group__wrapper, .v-slide-group__content {
    background: #171d27 !important;
}

.theme--dark.v-sheet {
  background-color: #171d27 !important;
    border-color: #171d27;
    color: #7f95b9;
}

.v-tab {
    font-size: 1.25rem;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 0em;
    line-height: normal;
    min-width: 90px;
    max-width: 360px;
}
.v-tabs-slider-wrapper {
    display: none;
}
    
</style>