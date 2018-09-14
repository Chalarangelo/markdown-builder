const components = require('../../lib');

const Headers = components.Headers;
test('Header builders', () => {
  expect(Headers.hX(1, 'H1 header')).toBe('  \n# H1 header'); // hX
  expect(Headers.h1('H1 header')).toBe('  \n# H1 header');
  expect(Headers.h2('H2 header')).toBe('  \n## H2 header');
  expect(Headers.h3('H3 header')).toBe('  \n### H3 header');
  expect(Headers.h4('H4 header')).toBe('  \n#### H4 header');
  expect(Headers.h5('H5 header')).toBe('  \n##### H5 header');
  expect(Headers.h6('H6 header')).toBe('  \n###### H6 header');
});
