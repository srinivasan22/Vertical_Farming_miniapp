import { r as registerInstance, h, e as getAssetPath } from './index-d45f6540.js';

const pageHomeCss = ".page-home{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}.plantcube{float:left;width:40%;height:auto;padding:5px}";

const PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "page-home" }, h("h1", null, "Welcome to Agrilution: An emerging startup in Vertical Farming."), h("h2", null, "Smart Lighting "), h("p", null, "The Osram LED Plant Light supplies the plants with the most important wavelengths of the sun - 16 hours a day. Please click below to see the plants available for our plantcubes and the light requirements of each plant."), h("img", { class: "plantcube", src: getAssetPath(`../../assets/icon/plantcube.png`) }), h("stencil-route-link", { url: "/plants" }, h("button", null, "List of Plants"))));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };
