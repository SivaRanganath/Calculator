import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { FormsModule } from "@angular/forms";
import { ResultsInfoComponent } from "./results-info/results-info.component";


@NgModule({
    declarations: [AppComponent, HeaderComponentComponent, UserInputComponent, ResultsInfoComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})

export class AppModule {}