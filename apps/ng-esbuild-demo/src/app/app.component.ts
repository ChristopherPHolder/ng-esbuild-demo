import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Example3Component } from '@esbuild-demo/example-2';

@Component({
  standalone: true,
  imports: [RouterModule, Example3Component],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-esbuild-demo';
}
