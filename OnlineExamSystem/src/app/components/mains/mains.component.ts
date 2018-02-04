import {Component, OnInit} from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd";

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {

  constructor(private _notification: NzNotificationService) {
  }

  ngOnInit() {
    var status = sessionStorage.getItem("roleValue");
    if (status == "4") {
      this.createBasicNotification();
    }
  }

  createBasicNotification = () => {
    this._notification.blank('这是标题', '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭', {nzDuration: 0});
  };

}
