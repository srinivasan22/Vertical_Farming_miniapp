import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  shadow: true,
})
export class PageProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match) {
      return (
        <div class="page-profile">
          <div class="routehome">
          <stencil-route-link url="/">
          <button>
          Home    
          </button>
          </stencil-route-link>
          </div>
    
          <br></br>

          <div class="plant">
            <div class="basil"> 
            <h1>BASIL</h1>
          <p> Basil is native to tropical regions from central Africa to Southeast Asia. 
            It is a tender plant, and is used in cuisines worldwide. 
            Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell.
            Please click on the image to adjust the light settings for Basil.
          </p>
            <stencil-route-link url={`/plants/${0}`}>
            <img src={getAssetPath(`../../assets/icon/basil.png`)}/>
            </stencil-route-link>
            </div>
            </div>
            <br></br>

            <div class="plant">
              <div class="redmustard">
              <h1>RED MUSTARD</h1>
            <p> Red mustard is a colourful plant measuring eighteen inches in height. 
              The most common varieties that can be found in the United States have oval leaves with scalloped or frilled edges. 
              The leaves of this lovely emerald coloured green have shades of red and burgundy.
              Please click on the image to adjust the light settings for Red Mustard. 
            </p>
            <stencil-route-link url={`/plants/${1}`}>
            <img src={getAssetPath(`../../assets/icon/redmustard.png`)}/>
            </stencil-route-link>
            </div>
            </div>
        </div>
      );
    }
  }
}
