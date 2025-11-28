import { Component } from '@angular/core';
import {TaskPage} from '../task-page/task-page';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskPage
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {


}
