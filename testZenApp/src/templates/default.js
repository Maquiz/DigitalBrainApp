import { templatingLoop as loop, escapeSpecialChars as escape } from '../javascripts/lib/helpers.js'
import I18n from '../javascripts/lib/i18n.js'

function organizationMarkup (organization) {
  return `<li>${escape(organization.name)}</li>`
}

export default function (args) {
  return `<div class="example-app">
    <div>
      <button class="c-btn c-btn--lg false ">
        Refund Stripe Transaction
      </button>
      <button class="c-btn c-btn--lg false ">
      Change Shipping Address
    </button>
    <button class="c-btn c-btn--lg false ">
    Refund Shopify
  </button>
    </div>
  </div>`
}
