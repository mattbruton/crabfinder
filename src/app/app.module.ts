
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';

// Services
import { PostsService } from './posts.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'posts',
    component: FeedComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FeedComponent,
    LandingComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
