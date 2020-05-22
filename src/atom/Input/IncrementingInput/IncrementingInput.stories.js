import {number} from "@storybook/addon-knobs";

import IncrementingInput from './IncrementingInput.vue'

export default {
    component: IncrementingInput,
    title: 'Input/Incrementing Input - JS'
}

export const withText = () => ({
    components: {IncrementingInput},
    template: `<incrementing-input :initial="knobInitial"></incrementing-input>`,
    props: {
        knobInitial: {
            type: Number,
            default: number('Initial Input', 15)
        }
    }
})
