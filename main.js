const { createApp, ref, watch, computed } = Vue;

const Button = {
    inheritAttrs: false,
    props: [
        'size',
        'theme',
    ],
    template: `
        <div 
            class="v-button"
            :class="classList"
        >
            <slot/>
        </div>
    `,
    setup (props, { attrs }) {
        const classList = computed(() => {
            return [
                attrs.class,
                {
                    [`v-button--size-${props.size}`]: props.size,
                    [`v-button--theme-${props.theme}`]: props.theme
                }
            ]
        });

        return {
            classList
        }
    }
}

const Root = {
    template: `
        <v-button
            class="test-button"
            size="large" 
            @click="onClick"
            @focus="onFocus"
            @blur="onBlur"
        >
            Кнопка
        </v-button>
    `,
    setup () {
        function onClick () {
            console.log('onClick');
        } 

        function onFocus () {
            console.log('onFocus');
        } 

        function onBlur () {
            console.log('onBlur');
        } 

        return {
            onClick,
            onFocus,
            onBlur
        }
    }
}

const app = createApp(Root);

app.component('VButton', Button);

app.mount('#app');