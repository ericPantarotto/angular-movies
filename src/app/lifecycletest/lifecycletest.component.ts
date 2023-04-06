import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css'],
})
export class LifecycletestComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit
{
  @Input()
  title?: string;

  @ViewChild(RatingComponent)
  rating?: RatingComponent;

  timer?: ReturnType<typeof setInterval>;

  ngOnDestroy(): void {
    console.log(`on destroy`);
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log(`do check`);
  }
  ngAfterViewInit(): void {
    console.log(`on after view init`);
    console.log(this.rating);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`on changes`);
    console.log(changes);
  }
  ngOnInit(): void {
    console.log(`on init`);
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date()), 2000);
  }

  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
  }
}
