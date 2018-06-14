export default {
  items: [
    {
      title: true,
      name: 'User Admin',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Dashboard',
      url: '/admin/dashboard',
      icon: 'icon-chart',
    },
    {
      name: 'Opciones',
      url: '/admin/settings',
      icon: 'icon-settings',
    },
    {
      name: 'Listas',
      url: '/admin/lists',
      icon: 'icon-list',
    },
    {
      name: 'Usuarios',
      url: '/admin/users',
      icon: 'icon-user',
    },
    {
      divider: true,
    }
  ],
};
