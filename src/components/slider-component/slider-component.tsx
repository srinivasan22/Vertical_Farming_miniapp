import { Component, h, Prop,Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.css',
  shadow: true,
})
export class SliderComponent {
  @Prop() min: number;
  @Prop() max: number;
  @Prop() colour : string;
  @State() value: number ;
  @Event() valueChanged: EventEmitter;

  constructor(){
    this.value = Math.floor((this.min+this.max)/2);
  }

  updateValue(event) {
    this.value = event.target.value;  
}

  render() {
    return (
      <div class="slider-container">
        <input type="range" min={this.min} max={this.max} value={this.value} class="slider" 
        onChange = {(event) => this.updateValue(event)}>
        </input>
    <label>{this.value}</label> 
      </div>
      );
  }
}
