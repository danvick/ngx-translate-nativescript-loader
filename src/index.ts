import { TranslateLoader } from "@ngx-translate/core";
import { knownFolders } from "tns-core-modules/file-system";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

export class NativeScriptLoader extends TranslateLoader {
	public prefix;
	public suffix;

	constructor(prefix: string = "./assets/i18n/", suffix: string = ".json") {
		super();
		this.prefix = prefix;
		this.suffix = suffix;
	}

	public getTranslation(lang: string): Observable<any> {
		return from(knownFolders.currentApp().getFile(`${this.prefix}${lang}${this.suffix}`).readText()).pipe(
			map((data: any) => JSON.parse(data))
		);
	}
}
