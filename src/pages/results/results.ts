import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  results = [];

  constructor(
    private perfomanceData: PerformanceDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.perfomanceData
      .getResults()
      .subscribe(data => (this.results = data.entries));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
