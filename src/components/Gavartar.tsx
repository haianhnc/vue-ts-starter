import { Vue } from 'vue-property-decorator';
import md5 from 'md5';

const Gavartar = Vue.extend({
  name: 'Gavatar',
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  computed: {
    url() {
      return ['https://www.gravatar.com/avatar/', md5(this.email.trim().toLowerCase()), '?d=identicon'].join('');
    },
  },
  methods: {
    onLoad(...args: string[]) {
      this.$emit('load', ...args);
    },
    onError(...args: string[]) {
      this.$emit('error', ...args);
    },
  },
  render() {
    return (
      <img
        src={this.url}
        onLoad={this.onLoad}
        onError={this.onError}
      />
    );
  },
});

export default Gavartar;
