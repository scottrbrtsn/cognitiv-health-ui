import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnxietyComponent } from './anxiety/anxiety.component';
import { DepressionComponent } from './depression/depression.component';
import { FlowComponent } from './flow/flow.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';
import { PersonalityComponent } from './personality/personality.component';
import { StartComponent } from './start/start.component';
import { PridefulComponent } from './prideful/prideful.component';
import { HopelessComponent } from './hopeless/hopeless.component';
import { WillingComponent } from './willing/willing.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { ChatComponent } from './chat/chat.component';
import { BokehComponent } from './bokeh/bokeh.component';
import { JungianWorldComponent } from './jungian-world/jungian-world.component';
import { MetricsComponent } from './metrics/metrics.component';
import { MetricsService } from './services/metrics.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnxietyComponent,
    DepressionComponent,
    FlowComponent,
    MindfulnessComponent,
    PersonalityComponent,
    StartComponent,
    PridefulComponent,
    HopelessComponent,
    WillingComponent,
    GameComponent,
    ChatComponent,
    BokehComponent,
    JungianWorldComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [MetricsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
