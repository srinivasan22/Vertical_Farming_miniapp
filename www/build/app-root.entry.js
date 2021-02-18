import { r as registerInstance, h } from './index-d45f6540.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", null, h("h1", null, "Agrilution")), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "page-home", exact: true }), h("stencil-route", { url: "/plants", component: "page-profile", exact: true }), h("stencil-route", { url: "/plants/:id", component: "plant-component", exact: true }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
