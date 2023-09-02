import { Router } from "./router.js";

const router = new Router();

router.add('/', '/pages/home.html');
router.add('/explore', '/pages/explore.html');
router.add('/universe', '/pages/universe.html');

router.handle();

window.addEventListener('popstate', () => router.handle());
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
      router.route(event);
  });
});