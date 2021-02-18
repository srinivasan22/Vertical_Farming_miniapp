import { Component, Host, h, Prop, Method  } from '@stencil/core';
import {MatchResults} from '@stencil/router';
import axios from 'axios'

@Component({
  tag: 'plant-component',
  styleUrl: 'plant-component.css',
  shadow: true,
})
export class PlantComponent {
  @Prop() value: number = 50;
  @Prop() match: MatchResults;
 
  plants = ["basil","redmustard"];
  plantData={};
  plantId=0;
  blue = [];
  white = [];
  red = [];
  farred = [];

  
  @Method()
  async componentWillLoad(){
    console.log("basic component");

    this.plantId = parseInt(this.match.params.id);  
    this.plantData=await axios.get('https://dev.api.agrilution.com/plantLights.json')
    .then(response => { 
      console.log(response.data);
       return response.data[this.plantId][this.plants[this.plantId]]; 
    }, error => {
      console.log(error);
    });
    this.blue = this.plantData["blue"];
    this.red = this.plantData["red"];
    this.farred = this.plantData["farred"];
    this.white = this.plantData["white"];
  }

render() {
    return (
      <Host>
        <div class="header">
        <slot>{this.plants[this.plantId].toLocaleUpperCase()} </slot>
        </div>
        <br></br>

        <div class="slider">
        <slot>Our product includes a special LED allowing to adjust the color spectrum of the light individually. 
          The various color types have certain effects on the plants, however each plant requires a different mix of color spectrum,
          and expects a certain minimum and maximum range on the spectrum intensity. 
          Please use the slider below to adjust the light intensity for the plant.
        </slot>
        </div>
        <br></br>
        <br></br>

        <div>
          <stencil-route-link url="/plants">
          <button class="homebutton">
          Back    
          </button>
          </stencil-route-link>
          </div>

        <div>
          <stencil-route-link url="/">
          <button class="homebutton">
          Home    
          </button>
          </stencil-route-link>
          </div>


        <label class="color"> Blue </label>
        <br></br>
        <br></br>

        <p> Ensures healthy roots, strong stems, and healthy bigger leaves.</p>
        <slider-component min = {this.blue[0]} max = {this.blue[1]} > </slider-component>
        <br></br>
        <br></br>
        <br></br>

        <label class="color"> White </label>
        <br></br>
        <br></br>

        <p> Has minor impact on plant growth or health. It affects production of essential oils and thus gives the taste of green.</p>
        <slider-component min ={this.white[0]} max = {this.white[1]} > </slider-component>
        <br></br>
        <br></br>
        <br></br>

        <label class="color"> Red </label>
        <br></br>
        <br></br>

        <p> Essential for flowering or very weak stage in plants.</p>
        <slider-component min ={this.red[0]} max = {this.red[1]} > </slider-component>
        <br></br>
        <br></br>
        <br></br>

        <label class="color"> Farred </label>
        <br></br>
        <br></br>
        <br></br>
        <p> Impacts the height growth of the plant. Plants potentially get bigger with weaker stems when far-red value is higher.</p>
        <slider-component min ={this.farred[0]} max = {this.farred[1]} > </slider-component>
       </Host>  
    );
  }







}
