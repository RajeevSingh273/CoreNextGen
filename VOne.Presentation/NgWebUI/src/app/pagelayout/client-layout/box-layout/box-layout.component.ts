import { NavigationComponent } from './../../../modules/client/shared/navigation/navigation.component';
import { Component, OnInit, ViewChild, Renderer, Inject, ElementRef } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-box-layout-client',
  templateUrl: './box-layout.component.html',
  styleUrls: ['./box-layout.component.css']
})
export class BoxLayoutClientComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavigationComponent) navbar: NavigationComponent;
  private _title: any;
  private _navbar: HTMLElement;

  constructor(
    private renderer: Renderer,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    public location: Location
  ) { }

  ngOnInit(): void {
    this._title = this.location.prepareExternalUrl(this.location.path());
    this._navbar = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this._title = this.location.prepareExternalUrl(this.location.path());
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();
        if (this._title === '/' || this._title === '/home') {
          this._navbar.classList.add('navbar-transparent');
        } else {
          this._navbar.classList.remove('navbar-transparent');
        }

      });

    this.renderer.listenGlobal('window', 'scroll', event => {
      if (this._title === '/' || this._title === '/home') {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
          this._navbar.classList.remove('navbar-transparent');
        } else {
          this._navbar.classList.add('navbar-transparent');
        }
      } else {
        this._navbar.classList.remove('navbar-transparent');
      }
    });
    const ua = window.navigator.userAgent;
    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      const version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      if (version) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('ie-background');
      }
    }
  }



  removeFooter() {
    this._title = this._title.slice(1);
    if (this._title === 'signup' || this._title === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
}
