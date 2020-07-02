# Description
A loader for `ngx-translate` that loads localally stored translations for NativeScript.
<dir align ="center">
<a href="https://www.npmjs.com/package/@danvick/ngx-translate-nativescript-loader">
    <img src="https://img.shields.io/npm/v/@danvick/ngx-translate-nativescript-loader?logo=npm&style=for-the-badge" alt="Version">
</a>
<a href="https://www.npmjs.com/package/@danvick/ngx-translate-nativescript-loader">
	<img src="https://img.shields.io/bundlephobia/min/@danvick/ngx-translate-nativescript-loader?color=red&label=SIZE&logo=npm&style=for-the-badge", alt="Size">
</a>
<a href="https://www.npmjs.com/package/@danvick/ngx-translate-nativescript-loader">
<img src="https://img.shields.io/npm/dw/@danvick/ngx-translate-nativescript-loader?logo=npm&style=for-the-badge", alt="Downloads">
</a>
</dir>

<dir align ="center">
<a href="https://www.npmjs.com/package/@danvick/ngx-translate-nativescript-loader">
    <img src="https://img.shields.io/npm/v/@danvick/ngx-translate-nativescript-loader?logo=npm&style=for-the-badge" alt="Version">
</a>
<a href="https://www.npmjs.com/package/@danvick/ngx-translate-nativescript-loader">
	<img src="https://img.shields.io/bundlephobia/min/@danvick/ngx-translate-nativescript-loader?color=red&label=SIZE&logo=npm&style=for-the-badge", alt="Size">
</a>
<a href="https://www.npmjs.com/package/@danvick/ngx-translate-nativescript-loader">
<img src="https://img.shields.io/npm/dw/@danvick/ngx-translate-nativescript-loader?logo=npm&style=for-the-badge", alt="Downloads">
</a>
</dir>

## Installation:

 ```
npm i @ngx-translate/core --save
npm i @danvick/ngx-translate-nativescript-loader --save
 ```

## Usage:
```ts
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NativeScriptLoader } from '@danvick/ngx-translate-nativescript-loader';

export function createTranslateLoader() {
    return new NativeScriptLoader("./assets/i18n/", ".json");
}

@NgModule({
	imports: [
		NativeScriptModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader
			}
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

The assumed default location for your translation is `./assets/i18n/` and default assumed format extesion is `.json`. 
So you could ignore the arguments all together and have your `createTranslateLoader()` function as:

```ts
export function createTranslateLoader() {
    return new NativeScriptLoader();
}
```