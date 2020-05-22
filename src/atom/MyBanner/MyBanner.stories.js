import {action} from '@storybook/addon-actions'
import {text} from "@storybook/addon-knobs";

import MyBanner from './MyBanner.vue'

export default {
    component: MyBanner,
    title: 'Banner'
}


export const withText = () => ({
    components: { MyBanner },
    methods: { action: action('clicked') },
    props: {
        knobText: {
            type: String,
            default: text("prop Text", 'Hazard')
        }
    },
    template: `<MyBanner @click="action" :propText="knobText">Hello Banner</MyBanner>`
})

export const withSomeEmoji = () => ({
    components: {MyBanner},
    template: '<my-banner>😀 😎 👍 💯</my-banner>'
})
