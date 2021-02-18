# Description:
This small app creates an UI for regular users who will use it to operate a part of Agrilution Systems' Plantcube.
Our product includes a special LED allowing to adjust the color spectrum of the light individually. The various color types have certain effects on the plants,
however each plant requires a different mix of color spectrum, and expects a certain min and max range on the spectrum intensity. The colors are:
* blue:	Ensures healthy roots, strong stems, and healthy - bigger- leafs.
* white: Minor impact on plant growth or health. Effects production of essential oil and thus taste of green
* red: Essential for flowering or very weak stage in plants
* far-red: Impacts the height grow of the plant. Plant is potentially getting bigger with weaker stems when far-red value is higher.

# This app implements an UI for users, allowing them to:
- select a plant
- guide the user through the effects of the different colors
- ensure that the values lie within the per-plant intensity range

# Tech stack used:
- react
- HTML, CSS
- stenciljs
- data is retrieved from endpoint via REST (https://dev.api.agrilution.com/plantLights.json)

## Getting Started:

To start developing:
```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```


To create new components, run:

```
npx stencil generate
```
