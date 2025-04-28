import { module, test } from 'qunit';
import { setupRenderingTest } from 'cookie-management/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cookie-consent/modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CookieConsent::Modal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CookieConsent::Modal>
        template block text
      </CookieConsent::Modal>
    `);

    assert.dom().hasText('template block text');
  });
});
