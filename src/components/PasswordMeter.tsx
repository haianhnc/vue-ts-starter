import { Vue } from 'vue-property-decorator';

const PasswordMeter = Vue.extend({
  name: 'PasswordMeter',
  props: {
    strength: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      meterColor: ['one', 'two', 'three', 'four', 'five'],
    };
  },
  methods: {
    getClassName(index: number) {
      if (this.strength <= index) {
        return '';
      }
      return `${this.meterColor[this.strength - 1]} strength-meter-fill`;
    },
  },
  render() {
    return (
      <div class="password-meter">
        <p class={['meter', this.getClassName(0)]} />
        <p class={['meter', this.getClassName(1)]} />
        <p class={['meter', this.getClassName(2)]} />
        <p class={['meter', this.getClassName(3)]} />
        <p class={['meter', this.getClassName(4)]} />
      </div>
    );
  },
});

export default PasswordMeter;
