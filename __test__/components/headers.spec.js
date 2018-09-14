const components = require('../../lib/components').default;

const Headers = components.Headers;
test('Header builders', () => {
  expect(Headers.default(1, 'H1 header')).toBe('# H1 header'); // hX
  expect(Headers.h1('H1 header')).toBe('# H1 header');
  expect(Headers.h2('H2 header')).toBe('## H2 header');
  expect(Headers.h3('H3 header')).toBe('### H3 header');
  expect(Headers.h4('H4 header')).toBe('#### H4 header');
  expect(Headers.h5('H5 header')).toBe('##### H5 header');
  expect(Headers.h6('H6 header')).toBe('###### H6 header');
});
