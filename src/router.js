import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
// lazy-loaded
//const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/test/AdminBoard.vue")
const BoardModerator = () => import("./components/test/ModeratorBoard.vue")
const BoardUser = () => import("./components/test/TestBoard.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  /*
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },*/
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
