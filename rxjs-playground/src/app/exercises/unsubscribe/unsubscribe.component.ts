import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, timer } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { HistoryComponent } from '../../shared/history/history.component';


@Component({
  templateUrl: './unsubscribe.component.html',
  standalone: true,
  imports: [HistoryComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent {
  interval$ = toSignal(timer(0, 1000).pipe(
    map(x => x * 100)
  ));
}
