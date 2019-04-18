// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  role?: string;
  headTitle?: string,
  badgeType?: string;
  badgeValue?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
  { 
    headTitle: 'General'
  },  
  {
    path: '/admin/dashboard', title: 'Dashboard', icon: 'icon-desktop', type: 'rolelink', role: 'Admin'
  },
  {
    path: '/admin/sheduler', title: 'Sheduler', icon: 'icon-calendar', type: 'rolelink' , role: 'Admin'
  },
  {
    path: '/admin/shiftswap', title: 'Shift Swap', icon: 'icon-back-left', type: 'rolelink', role: 'Admin'
  },
  {
    path: '/admin/availability', title: 'Availability', icon: 'icon-briefcase', type: 'rolelink', role: 'Admin'
  },
  {
    path: '/user/messages', title: 'Messages', icon: 'icon-email', type: 'rolelink', role: 'Admin'
  },
  {
    path: '/admin/reports', title: 'Reports', icon: 'icon-bar-chart', type: 'rolelink', role: 'Admin'
  },
  {
    path: '/admin/team', title: 'Team', icon: 'icon-user', type: 'rolelink', role: 'Admin'
  },
  
  {
    path: '/user/dashboard', title: 'Dashboard', icon: 'icon-desktop', type: 'rolelink', role: 'User'
  },
  {
    path: '/user/sheduler', title: 'Sheduler', icon: 'icon-calendar', type: 'rolelink' , role: 'User'
  },
  {
    path: '/user/shiftswap', title: 'Shift Swap', icon: 'icon-back-left', type: 'rolelink', role: 'User'
  },
  {
    path: '/user/timeoff', title: 'Time Off', icon: 'icon-game', type: 'rolelink', role: 'User'
  },
  {
    path: '/user/messages', title: 'Messages', icon: 'icon-email', type: 'rolelink', role: 'User'
  },
  {
    path: '/user/reports', title: 'Reports', icon: 'icon-bar-chart', type: 'rolelink', role: 'User'
  },
  {
    path: '/user/team', title: 'Team', icon: 'icon-user', type: 'rolelink', role: 'User'
  },
  
  {
    path: '/pages/stater-kit', title: 'Starter Kit', icon: 'icon-desktop', type: 'link'
  },
  {
    title: 'Starter Kit', icon: 'icon-anchor', type: 'sub', children: [{
        title: 'Bootstrap', type: 'sub', children: [
          { path: '/base/accordion', title: 'Accordion', type: 'link' },          
          { path: '/base/alert', title: 'Alert', type: 'link' },          
          { path: '/base/dropdown', title: 'Dropdown', type: 'link' },          
          { path: '/base/grid', title: 'Grid', type: 'link' },          
          { path: '/base/helper-class', title: 'Helper Classes', type: 'link' },         
          { path: '/base/list', title: 'List', type: 'link' },         
          { path: '/base/modal', title: 'Modal', type: 'link' },         
          { path: '/base/navs', title: 'Navs', type: 'link' },        
          { path: '/base/popover', title: 'Popover', type: 'link' },        
          { path: '/base/progressbar', title: 'Progresssbar', type: 'link' },       
          { path: '/base/shadow', title: 'Shadow', type: 'link' },       
          { path: '/base/spinners', title: 'Spinners', type: 'link' },       
          { path: '/base/state-color', title: 'State Color', type: 'link' },       
          { path: '/base/tabs', title: 'Tabs', type: 'link' },       
          { path: '/base/tag-n-pills', title: 'Tag & pills', type: 'link' },       
          { path: '/base/typography', title: 'Typography', type: 'link' }
        ]
      }, 
      {
        title: 'Ng-Bootstrap', type: 'sub', children: [
          { path: '/base/ngb/accordion', title: 'Accordion', type: 'link' },          
          { path: '/base/ngb/alert', title: 'Alert', type: 'link' },          
          { path: '/base/ngb/buttons', title: 'Buttons', type: 'link' },          
          { path: '/base/ngb/carousel', title: 'Carousel', type: 'link' },          
          { path: '/base/ngb/collapse', title: 'Collapse', type: 'link' },         
          { path: '/base/ngb/datepicker', title: 'Datepicker', type: 'link' },         
          { path: '/base/ngb/dropdown', title: 'Dropdown', type: 'link' },         
          { path: '/base/ngb/modal', title: 'Modal', type: 'link' },        
          { path: '/base/ngb/pagination', title: 'Pagination', type: 'link' },        
          { path: '/base/ngb/popover', title: 'Popover', type: 'link' },       
          { path: '/base/ngb/progressbar', title: 'Progressbar', type: 'link' },       
          { path: '/base/ngb/rating', title: 'Rating', type: 'link' },       
          { path: '/base/ngb/tabset', title: 'Tabset', type: 'link' },       
          { path: '/base/ngb/timepicker', title: 'Timepicker', type: 'link' },       
          { path: '/base/ngb/tooltip', title: 'Tooltip', type: 'link' },       
          { path: '/base/ngb/typeahead', title: 'Typeahead', type: 'link' }
        ]
      }
    ]},
    { 
        headTitle: 'SUPPORT'
    },
    {
        path: 'http://support.pixelstrap.com/help-center', title: 'Raise Support', icon: 'icon-headphone-alt', type: 'extTabLink'
    },
]
