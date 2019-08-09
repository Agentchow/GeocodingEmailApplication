import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        AgGridModule.withComponents([]),
    ],
    exports: [
        AgGridModule,
    ],
    declarations: [],
    providers: [],
})
export class GridsModule {}
