<template>
  <v-container>
    <v-layout align-center>
      <v-flex>
        <v-select
          :items="items"
          v-model="selected"
          label="Select User"
          return-object
        >
          <template slot="selection" slot-scope="data">
            <v-avatar>
              <img :src="data.item.avatar" />
            </v-avatar>
            <div>{{ data.item.text }}</div>
          </template>
          <template slot="item" slot-scope="data">
            <v-list-tile-avatar>
              <img :src="data.item.avatar" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title> {{ data.item.text }} </v-list-tile-title>
            </v-list-tile-content>
          </template>
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: null,
      items: [
        {
          text: "Laurindo",
          avatar: "https://github.com/flaviorodrigues1977/ptzdashboard/blob/master/src/assets/user_laurindo.png",
        },
        {
          text: "Yan Filipe",
          avatar: "https://github.com/flaviorodrigues1977/ptzdashboard/blob/master/src/assets/user_yan.png",
        },
        {
          text: "Danilo",
          avatar: "https://github.com/flaviorodrigues1977/ptzdashboard/blob/master/src/assets/user-danilo.png",
        },
        {
          text: "Rodrigues",
          avatar: "https://github.com/flaviorodrigues1977/ptzdashboard/blob/master/src/assets/user_flavio.png",
        },
      ],
    };
  },
};
</script>