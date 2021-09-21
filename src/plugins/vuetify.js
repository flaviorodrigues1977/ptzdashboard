import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);


const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            options: { customProperties: true },
            dark: {
                primary: colors.red.base,
                secondary: colors.pink.base,
                accent: colors.lightBlue.base,
                error: colors.amber.base,
                warning: colors.indigo.base,
                info: colors.lime.base,
                success: colors.lightGreen.base
            },
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
})

export default vuetify

