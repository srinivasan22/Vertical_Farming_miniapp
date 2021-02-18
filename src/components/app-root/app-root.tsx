import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Agrilution</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/plants" component="page-profile" exact={true}/>
              <stencil-route url="/plants/:id" component="plant-component" exact={true}/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
