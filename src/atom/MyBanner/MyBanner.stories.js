import { action } from '@storybook/addon-actions'

import MyBanner from './MyBanner.vue'

export default {
  component: MyBanner,
  title: 'Banner'
}

export const withText = () => ({
  components: { MyBanner },
  template: '<my-banner @click="action">Hello Banner</my-banner>',
  methods: { action: action('clicked') }
})

export const withSomeEmoji = () => ({
  components: { MyBanner },
  template: '<my-banner>😀 😎 👍 💯</my-banner>'
})
