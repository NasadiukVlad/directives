
import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import {AttributeDirectivesComponent} from './components/attribute-directives/attribute-directives.component';
import { CustomAttributeDirective } from './directives/custom-attribute.directive';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { CustomStructureDirective } from './directives/custom-structure.directive';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AttributeDirectivesComponent,
    CustomAttributeDirective,
    StructuralDirectivesComponent,
    CustomStructureDirective,
    CustomAttributeDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
