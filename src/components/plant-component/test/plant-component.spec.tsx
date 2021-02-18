import { newSpecPage } from '@stencil/core/testing';
import { PlantComponent } from '../plant-component';

describe('plant-component', () => {
  it('renders', async () => {

    const page = await newSpecPage({
      components: [PlantComponent],
      html: `<plant-component></plant-component>`,
    });

    expect(page.root).toEqualHtml(`
      <plant-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plant-component>
    `);
  });
});
