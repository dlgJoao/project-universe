export class Router {

  routes = {};

  add(routeName, link) {
    this.routes[routeName] = link;
  }

  route(event) {
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname];

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector(".app").innerHTML = html;
      this.updateActiveLink(pathname);
    })
  }

  updateActiveLink(currentPath) {
    // Primeiro, remova a classe 'active' de todos os links.
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('secondary');
    });

    // Então, adicione a classe 'active' ao link correspondente.
    const activeLink = document.querySelector(`nav a[href='${currentPath}']`);
    if (activeLink) {
        activeLink.classList.add('secondary');
    }
}
}