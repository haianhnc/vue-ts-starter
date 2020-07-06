import './global.css';
import { Vue } from 'vue-property-decorator';

const App = Vue.extend({
  name: 'App',
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  },
});

export default App;
