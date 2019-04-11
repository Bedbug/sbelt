import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AccordionsComponent } from '../components/base/bootstrap/accordions/accordions.component';
import { AlertComponent } from '../components/base/bootstrap/alert/alert.component';
import { DropdownComponent } from '../components/base/bootstrap/dropdown/dropdown.component';
import { GridComponent } from '../components/base/bootstrap/grid/grid.component';
import { HelperClassesComponent } from '../components/base/bootstrap/helper-classes/helper-classes.component';
import { ListComponent } from '../components/base/bootstrap/list/list.component';
import { ModalComponent } from '../components/base/bootstrap/modal/modal.component';
import { NavsComponent } from '../components/base/bootstrap/navs/navs.component';
import { PopoverComponent } from '../components/base/bootstrap/popover/popover.component';
import { ProgressbarComponent } from '../components/base/bootstrap/progressbar/progressbar.component';
import { ShadowComponent } from '../components/base/bootstrap/shadow/shadow.component';
import { SpinnersComponent } from '../components/base/bootstrap/spinners/spinners.component';
import { StateColorComponent } from '../components/base/bootstrap/state-color/state-color.component';
import { TabsComponent } from '../components/base/bootstrap/tabs/tabs.component';
import { TagNPillsComponent } from '../components/base/bootstrap/tag-n-pills/tag-n-pills.component';
import { TypographyComponent } from '../components/base/bootstrap/typography/typography.component';
import { NgbAccordionComponent } from '../components/base/ng-bootstrap/accordion/accordion.component';
import { NgbAlertComponent } from '../components/base/ng-bootstrap/alert/alert.component';
import { NgbButtonsComponent } from '../components/base/ng-bootstrap/buttons/buttons.component';
import { NgbCarouselComponent } from '../components/base/ng-bootstrap/carousel/carousel.component';
import { NgbCollapseComponent } from '../components/base/ng-bootstrap/collapse/collapse.component';
import { NgbDatepickerComponent } from '../components/base/ng-bootstrap/datepicker/datepicker.component';
import { NgbDropdownComponent } from '../components/base/ng-bootstrap/dropdown/dropdown.component';
import { NgbModalComponent, NgbdModalContent, NgbdModal1Content, NgbdModal2Content } from '../components/base/ng-bootstrap/modal/modal.component';
import { NgbPaginationComponent } from '../components/base/ng-bootstrap/pagination/pagination.component';
import { NgbPopoverComponent } from '../components/base/ng-bootstrap/popover/popover.component';
import { NgbProgressbarComponent } from '../components/base/ng-bootstrap/progressbar/progressbar.component';
import { NgbRatingComponent } from '../components/base/ng-bootstrap/rating/rating.component';
import { NgbTabsetComponent } from '../components/base/ng-bootstrap/tabset/tabset.component';
import { NgbTimepickerComponent } from '../components/base/ng-bootstrap/timepicker/timepicker.component';
import { NgbTooltipComponent } from '../components/base/ng-bootstrap/tooltip/tooltip.component';
import { NgbTypeaheadComponent } from '../components/base/ng-bootstrap/typeahead/typeahead.component';
import { BaseRoutingModule } from '../components/base/base-routing.module';


@NgModule({
  declarations: [
    AccordionsComponent, 
    AlertComponent, 
    DropdownComponent, 
    GridComponent, 
    HelperClassesComponent, 
    ListComponent,
    ModalComponent, 
    NavsComponent, 
    PopoverComponent, 
    ProgressbarComponent, 
    ShadowComponent, 
    SpinnersComponent, 
    StateColorComponent, 
    TabsComponent, 
    TagNPillsComponent, 
    TypographyComponent,
    NgbAccordionComponent, 
    NgbAlertComponent, 
    NgbButtonsComponent, 
    NgbCarouselComponent, 
    NgbCollapseComponent, 
    NgbDatepickerComponent, 
    NgbDropdownComponent, 
    NgbModalComponent, 
    NgbdModalContent, 
    NgbdModal1Content, 
    NgbdModal2Content, 
    NgbPaginationComponent, 
    NgbPopoverComponent, 
    NgbProgressbarComponent, 
    NgbRatingComponent, 
    NgbTabsetComponent, 
    NgbTimepickerComponent, 
    NgbTooltipComponent, 
    NgbTypeaheadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BaseRoutingModule
  ],
  entryComponents:[NgbdModalContent, NgbdModal1Content, NgbdModal2Content]
})
export class AdminModule { }
