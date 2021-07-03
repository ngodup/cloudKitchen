import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;
  submitted = false;
  locations: any;
  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private api: ApiService) {

    this.api.getLocations().then((data) => {
      this.locations = data.location;
      debugger
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      locationID: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  signUPUser() {
    this.router.navigate(['login']);
  }

  async saveDetails() {
    this.submitted = true;

    console.log(this.form.value);
    debugger
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.auth.signUp({ email: this.form.value.email, password: this.form.value.password }).then(data => {
      console.log(data);
      debugger
      loading.dismiss();
      this.showError('Signup success', 'Please confirm your email now!');
    }, async err => {
      debugger
      await loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Registration failed',
        message: err.error.msg,
        buttons: ['OK'],
      });
      await alert.present();
    });
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

  async showError(title, msg) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
