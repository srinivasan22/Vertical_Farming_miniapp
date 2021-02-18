import { r as registerInstance, h, e as getAssetPath } from './index-d45f6540.js';

const pageProfileCss = ".page-profile{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}div.plant{background-color:white;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);margin-bottom:25px}div.container{text-align:left;padding:10px 20px}.basil{float:left;width:45%;height:auto;padding:5px}.redmustard{float:left;width:45%;height:auto;padding:5px}.routehome{float:right}p{text-align:justify;text-justify:inter-word}";

const PageProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    if (this.match) {
      return (h("div", { class: "page-profile" }, h("div", { class: "routehome" }, h("stencil-route-link", { url: "/" }, h("button", null, "Home"))), h("br", null), h("div", { class: "plant" }, h("div", { class: "basil" }, h("h1", null, "BASIL"), h("p", null, " Basil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide. Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell. Please click on the image to adjust the light settings for Basil."), h("stencil-route-link", { url: `/plants/${0}` }, h("img", { src: getAssetPath(`../../assets/icon/basil.png`) })))), h("br", null), h("div", { class: "plant" }, h("div", { class: "redmustard" }, h("h1", null, "RED MUSTARD"), h("p", null, " Red mustard is a colourful plant measuring eighteen inches in height. The most common varieties that can be found in the United States have oval leaves with scalloped or frilled edges. The leaves of this lovely emerald coloured green have shades of red and burgundy. Please click on the image to adjust the light settings for Red Mustard."), h("stencil-route-link", { url: `/plants/${1}` }, h("img", { src: getAssetPath(`../../assets/icon/redmustard.png`) }))))));
    }
  }
};
PageProfile.style = pageProfileCss;

export { PageProfile as page_profile };
