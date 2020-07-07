import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { User } from '@/store/modules/user';
import AccountPanel from '../components/AccountPanel';

const Home = Vue.extend({
  name: 'Home',
  components: {
    AccountPanel,
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
    }),
  },
  methods: {
    ...mapActions({
      setUserInfo: 'user/setUserInfo',
    }),
    updateUserInfo(user: User) {
      this.user = user;
      this.setUserInfo(user);
    },
  },
  render() {
    return (
      <div class="home">
        <AccountPanel user={this.user as User} onupdateUserInfo={this.updateUserInfo}/>
      </div>
    );
  },
});

export default Home;
