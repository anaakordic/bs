import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/HomePage.vue";
import AuthPage from "../pages/AuthPage.vue";
import MyAppointments from "../pages/MyAppointments.vue";
import AboutUs from "../pages/AboutUs";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Homepage },
    { path: "/aboutuspage", name: "AboutUsPage", component: AboutUs},
    { path: "/auth", name: "Auth", component: AuthPage },
    { path: "/appointments", name: "Appointments", component: MyAppointments },
  ],
});

export default router;
