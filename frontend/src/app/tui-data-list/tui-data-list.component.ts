import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
  selector: 'app-tui-data-list',
  templateUrl: './tui-data-list.component.html',
  styleUrls: ['./tui-data-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDataListComponent {
  readonly arrow = TUI_ARROW;
 
  readonly groups = [
      {
          label: $localize`Components`,
          items: [
              {
                  label: 'Input',
                  routerLink: '/components/input',
              },
              {
                  label: 'Select',
                  routerLink: '/components/select',
              },
              {
                  label: 'DataList',
                  routerLink: '/components/data-list',
              },
          ],
      },
      {
          label: $localize`Styles`,
          items: [
              {
                  label: $localize`Icons`,
                  routerLink: '/icons',
              },
              {
                  label: $localize`Typography`,
                  routerLink: '/typography',
              },
          ],
      },
      {
          label: '',
          items: [
              {
                  label: $localize`Changelog`,
                  routerLink: '/changelog',
              },
          ],
      },
  ];
}

