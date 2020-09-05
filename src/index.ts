import { TranslateLoader } from "@ngx-translate/core";
import { knownFolders } from "tns-core-modules/file-system";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

export class NativeScriptLoader implements TranslateLoader {
    constructor(public prefix: string = "/assets/i18n/", public suffix: string = ".json") {
    }

    public getTranslation(lang: string): Observable<any> {
        return from(knownFolders.currentApp().getFile(`${this.prefix}${lang}${this.suffix}`).readText()).pipe(
            map((data: any) => JSON.parse(data)),
        );
    }
}
