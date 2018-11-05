import { Component, AfterViewInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html',
  styles: [
      `
      .topbar {
          background: #ffffff !important;
      }
      .topbar .navbar-light .navbar-nav .nav-item > a.nav-link {
          color: #99abb4 !important;
      }
      @media screen and (max-width: 480px) {
        .dark-logo, .light-logo {
          position: absolute;
          transform: translateY(-25px);          
        }
      }
      `
  ]
})
export class NavigationComponent implements AfterViewInit {
	name:string;
  	showHide:boolean;
  
  	constructor() {
    	this.showHide = true;
  	}
  
  	changeShowStatus(){
    	this.showHide = !this.showHide;
  	}
    
    ngAfterViewInit() {

        $(function () {
            $(".preloader").fadeOut();
        });

        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 0;
            if (width < 1170) {
                $("body").addClass("mini-sidebar");
                $('.navbar-brand span').hide();
                $(".sidebartoggler i").addClass("ti-menu");
            } else {
                $("body").removeClass("mini-sidebar");
                $('.navbar-brand span').show();
            }

            var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $(".page-wrapper").css("min-height", (height) + "px");
            }

        };
        $(window).ready(set);
        $(window).on("resize", set);

        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });
        
        (<any>$('.scroll-sidebar, .right-sidebar, .message-center')).perfectScrollbar();

        $("body").trigger("resize");
    }
}
