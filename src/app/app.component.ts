import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'TestServer', content: 'Just a first test server'}
  ];

  onServerAdded(serverCreated: {serverName: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverCreated.serverName,
      content: serverCreated.content
    });
  }

  onBlueprintAdded(blueprintCreated: {serverName: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintCreated.serverName,
      content: blueprintCreated.content
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

}
