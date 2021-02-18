import { newE2EPage } from '@stencil/core/testing';
import { inspect } from 'util';
import { PlantComponent } from '../plant-component';

describe('plant-component', () => {
  it('renders', async () => {
    const page = await newE2EPage({url:'/'});
    //const plant = new PlantComponent();
    //console.log(inspect(page));
    await page.setContent('<plant-component></plant-component>');
    const element = await page.find('plant-component');
    expect(element).toHaveClass('hydrated');
  });
});
