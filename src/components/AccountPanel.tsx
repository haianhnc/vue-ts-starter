/* eslint-disable  @typescript-eslint/camelcase */
import { Vue } from 'vue-property-decorator';
import { User } from '@/store/modules/user';
import Gavartar from './Gavartar';
import PasswordMeter from './PasswordMeter';
import './styles.scss';

const AccountPanel = Vue.extend({
  name: 'AccountPanel',
  props: {
    user: {
      type: User,
      required: true,
    },
  },
  data() {
    return {
      first_name: this.user.first_name || '',
      last_name: this.user.last_name || '',
      email: this.user.email || '',
      password: this.user.password || '',
      isEditing: false,
      isShowPassword: false,
      strength: 0,
      err_msg: '',
    };
  },
  methods: {
    togglePasswordEye() {
      this.isShowPassword = !this.isShowPassword;
    },
    calculatorStrength() {
      let strength = 0;
      if (this.password.length >= 7) {
        strength += 1;
      }
      if (/d/.test(this.password)) {
        strength += 1;
      }
      if (/[a-z]/.test(this.password)) {
        strength += 1;
      }
      if (/[A-Z]/.test(this.password)) {
        strength += 1;
      }
      if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(this.password)) {
        strength += 1;
      }
      this.strength = strength;
    },
    handleClick() {
      if (this.isEditing) {
        // do validate
        if (this.first_name === '') {
          this.err_msg = 'first name is required';
          return;
        }
        if (this.last_name === '') {
          this.err_msg = 'last name is required';
          return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.err_msg = 'you must input an right email address';
          return;
        }
        if (this.strength < 5) {
          this.err_msg = 'you must input a strong password';
          return;
        }
        // save data
        const params = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
        };
        this.$emit('updateUserInfo', params);
        this.isEditing = false;
      } else {
        this.isEditing = true;
      }
      this.isShowPassword = false;
    },
    handleCancel() {
      this.first_name = this.user.first_name;
      this.last_name = this.user.last_name;
      this.email = this.user.email;
      this.password = this.user.password;
      this.isEditing = false;
      this.isShowPassword = false;
    },
  },
  render() {
    return (
      <div>
      <section class="section">
        <Gavartar email={this.email as string} />
          <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="field">
                  <label class="label title-s1">Your Account Information</label>
                </div>
                <div v-show={this.isEditing && this.err_msg} class="validate-error">
                  { this.err_msg}
                </div>
                <div v-show={!this.isEditing} class="field has-text-centered">
                  { this.first_name } { this.last_name }
                </div>
                <div v-show={this.isEditing} class="columns">
                  <div class="column field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="First Name"
                        v-model={this.first_name}
                        disabled={!this.isEditing}
                      />
                    </div>
                  </div>
                  <div class="column field">
                    <div class="control">
                      <input
                        class="input"
                        type="text" placeholder="Last Name"
                        v-model={this.last_name}
                        disabled={!this.isEditing}
                      />
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email input"
                      v-model={this.email}
                      disabled={!this.isEditing}
                    />
                    <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field password-field">
                  <p class="control has-icons-left">
                      <input
                        class="input"
                        type={this.isShowPassword ? 'text' : 'password'}
                        placeholder="Password"
                        v-model={this.password}
                        disabled={!this.isEditing}
                        onInput={this.calculatorStrength}
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                  </p>
                  <span
                    class={'icon is-small eye-icon'}
                    v-show={this.isEditing}
                    onClick={this.togglePasswordEye}
                  >
                    <i class={['fa fa-fw', `${this.isShowPassword ? 'fa-eye' : 'fa-eye-slash'}`]} />
                  </span>
                </div>
                {
                  this.isEditing && <PasswordMeter strength={this.strength} />
                }
                <div>
                    <button
                      class="button is-link "
                      onClick={this.handleClick}>
                       <span class="icon is-small">
                        <i class={['fas', { 'fa-check': this.isEditing }, { 'fa-edit': !this.isEditing }]}></i>
                      </span>
                      <span>{ this.isEditing ? 'Submit' : 'Edit' }</span>
                    </button>
                    {
                      this.isEditing
                      && <button
                        class="button is-warning"
                        onClick={this.handleCancel}>
                          <span class="icon is-small">
                            <i class="fas fa-times"></i>
                          </span>
                          <span> Cancel </span>
                      </button>
                    }
                </div>
            </div>
          </div>
      </section>
    </div>
    );
  },
});

export default AccountPanel;
