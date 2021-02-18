import { Component, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  shadow: true,
})
export class PageHome {
  render() {
    return (
      <div class="page-home">
        <h1>
          Welcome to Agrilution: An emerging startup in Vertical Farming. 
          </h1>
          <h2>Smart Lighting </h2>
          <p>
          The Osram LED Plant Light supplies the plants with the most important wavelengths of the sun - 16 hours a day.
          Please click below to see the plants available for our plantcubes and the light requirements of each plant.
        </p>

        <img class="plantcube" src={getAssetPath(`../../assets/icon/plantcube.png`)} />

        <stencil-route-link url="/plants">
          <button>List of Plants</button>
        </stencil-route-link>
      </div>
    );
  }
}
