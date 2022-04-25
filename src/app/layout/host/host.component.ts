import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;

  childViewRef: ViewRef;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.childViewRef = this.tpl.createEmbeddedView(null);
  }

  insertChildView(): void {
    this.vc.insert(this.childViewRef);
  }

  removeChildView(): void {
    this.vc.detach();
  }

  reloadChildView(): void {
    this.removeChildView;
    this.isLoading = true;
    setTimeout(() => {
      this.insertChildView();
      this.isLoading = false;
    }, 3000);
  }

}
