import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule]
})
export class App {
  private http = inject(HttpClient);

  protected readonly title = signal('cloudflare-host-app');

  public orders = this.http.get('https://bbf.anna091438.workers.dev/proxy-http/orders').pipe(map((data: any) => data.payload));

}
