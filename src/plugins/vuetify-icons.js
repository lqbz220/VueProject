// Default Vuetify icons:
// https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/icons/presets/fa.ts

import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";

export default {
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
};
