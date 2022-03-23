import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { Configs } from 'src/app/shared/common/configs/configs';
import { I18nService } from 'src/app/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {
  @HostBinding("class") classes = "header-item language";
  languages: any;

  constructor(
    private i18nService: I18nService
  ) { }

  ngOnInit(): void {
    this.languages = this.i18nService.supportedLanguages.map(l => {
      return {
              title: l.toString() == 'vi-VN' ? 'Tiếng Việt' : 'English',
              value: l,
              flag: l.toString() == 'vi-VN' ? 'vietnamese.png' : 'english.png' };
    })
  }



  get currentLanguage() {
    return { title: this.i18nService.language.toString() == 'vi-VN' ? 'Tiếng Việt' : 'English', value: this.i18nService.language.toString(), image: this.i18nService.language.toString() == 'vi-VN' ? 'vietnamese.png' : 'english.png' };
  }

  onSetLanguage(lang) {
    this.i18nService.language = lang.value.toString();
  }
}
