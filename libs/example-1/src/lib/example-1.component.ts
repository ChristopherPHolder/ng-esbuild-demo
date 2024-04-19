import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component, Example3Component } from '@esbuild-demo/example-2';

@Component({
  selector: 'lib-example-1',
  standalone: true,
  imports: [CommonModule, Example2Component, Example3Component],
  template: `
    <p>example-1 works!</p>
    <lib-example-2 />
    <lib-example-3 />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example1Component {}
