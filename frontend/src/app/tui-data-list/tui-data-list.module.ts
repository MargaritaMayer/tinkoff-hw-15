import { NgModule } from "@angular/core";
import { TuiButtonModule, TuiGroupModule, TuiHostedDropdownModule } from "@taiga-ui/core";
import { TuiArrowModule } from "@taiga-ui/kit";
import { TuiDataListComponent } from "./tui-data-list.component";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [TuiDataListComponent],
  imports: [
    TuiArrowModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiGroupModule,
    CommonModule,

  ],
  exports: [
    TuiDataListComponent,
  ]
})
export class TuiDataListModule { }