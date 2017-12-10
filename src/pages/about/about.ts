import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
/**height = a
weight = b;
bmi = b/(a*a);
if bmi < 18.5 document.write ('Being underweight could be a sign that you\'re not eating enough or that you may be ill. If you\'re underweight, your GP can help')
if bmi > 18.5 && bmi < 24.9 document.write ('Keep up the good work. For tips on maintaining a healthy weight, check out our food and diet and fitness sections.')
if bmi > 24.9 && bmi < 29.9 document.write ('The best way to lose weight is through a combination of diet and exercise. The BMI calculator will give you a personal calorie allowance to help you achieve a healthy weight safely.')
if bmi >29.9 document.write ('The best way to lose weight is through a combination of diet and exercise and in some cases medication. Contact your GP for help and advice.')
**/