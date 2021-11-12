import { Component } from '@angular/core';
import { GlobalText } from 'src/assets/translate';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  public phone = GlobalText.CONTACT.PHONE;
  public mail = GlobalText.CONTACT.MAIL;
  public github = GlobalText.CONTACT.GITHUB;
  public git = GlobalText.CONTACT.GIT;

}
