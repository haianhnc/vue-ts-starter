import Vue from 'vue';

import HelloWorld from '../components/HelloWorld';

const Home = Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
  render() {
    return (
      <div class="home">
        <HelloWorld />
      </div>
    );
  },
});

export default Home;
