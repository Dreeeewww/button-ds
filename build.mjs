import StyleDictionary from 'style-dictionary';

const pxTypes = ['spacing', 'borderRadius', 'borderWidth', 'fontSizes', 'sizing'];

StyleDictionary.registerTransform({
  name: 'ts/px',
  type: 'value',
  filter: (token) => pxTypes.includes(token.$type ?? token.type),
  transform: (token) => `${parseFloat(token.$value ?? token.value)}px`,
});

StyleDictionary.registerTransform({
  name: 'ts/fontweight',
  type: 'value',
  filter: (token) => (token.$type ?? token.type) === 'fontWeights',
  transform: (token) => {
    const map = {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    };
    const v = String(token.$value ?? token.value).toLowerCase();
    return map[v] ?? v;
  },
});

const sd = new StyleDictionary({
  source: ['build/flat.json'],
  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'name/kebab',
        'ts/px',
        'ts/fontweight',
        'color/css',
      ],
      buildPath: 'build/',
      files: [{ destination: 'tokens.css', format: 'css/variables' }],
    },
  },
});

await sd.buildAllPlatforms();
