
import { fixture, test, Selector } from 'testcafe'

fixture `Electron test`
  .page("./release/app/dist/renderer/index.html");

test('Test', async t => {
  await t.expect(Selector('img').withAttribute('data-testid', 'react-image').exists).ok()
});