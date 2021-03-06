import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Volunteers from "./views/Volunteers.vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/volunteers",
      name: "volunteers",
      component: Volunteers
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
