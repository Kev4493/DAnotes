import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note-list/note/note.component';
import { FormsModule } from '@angular/forms';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteListComponent,
    NoteComponent,
    AddNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"danotes-2719c","appId":"1:83460873435:web:e8ffeab76b7566989e80fe","storageBucket":"danotes-2719c.appspot.com","apiKey":"AIzaSyDGHUnwnWLjcPmmRv1PxX8x7f0a4vfHdR8","authDomain":"danotes-2719c.firebaseapp.com","messagingSenderId":"83460873435"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
