import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/table',         title: 'Persons List',        icon:'nc-bullet-list-67',    class: '' },
    { path: '/user',          title: 'Add a new Person',      icon:'nc-single-02',  class: '' },
    //{ path: '/edit-personne',          title: 'Edit',      icon:'nc-single-02',  class: '' },
    //{ path: '/details-personne',          title: 'details',      icon:'nc-single-02',  class: '' },


   // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
   // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
   // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
   // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
  // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'bi-person-plus',  class: 'active-pro' },



];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
