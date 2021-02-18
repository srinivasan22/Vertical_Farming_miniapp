import { r as registerInstance, i as createEvent, h } from './index-d45f6540.js';

const sliderComponentCss = ":host{display:block}";

const SliderComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.value = Math.floor((this.min + this.max) / 2);
  }
  updateValue(event) {
    this.value = event.target.value;
  }
  render() {
    return (h("div", { class: "slider-container" }, h("input", { type: "range", min: this.min, max: this.max, value: this.value, class: "slider", onChange: (event) => this.updateValue(event) }), h("label", null, this.value)));
  }
};
SliderComponent.style = sliderComponentCss;

export { SliderComponent as slider_component };
