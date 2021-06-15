import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import * as _ from 'lodash';
import { Post, CreateResponse, Genre, Label, Producer } from '../album/album.model'
@Injectable({
  providedIn: 'root'
})
export class AlbumService implements OnInit {
  isCreated = false;
  isDeleted = false;
  isEdited = false;
  albumList: AngularFireList<Post>;

  constructor(private firebase:AngularFireDatabase, private http: HttpClient) { }
  ngOnInit(){

  }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(null, Validators.required),
    band: new FormControl(null, Validators.required),
    genre: new FormControl(null),
    label: new FormControl(null),
    producer: new FormControl(null)
  })


  createAlbum(post:Post): Observable<Post>{
    this.isCreated = true
    console.log(post.$key)
    return this.http
    .post<CreateResponse>(`https://http-29a3e-default-rtdb.firebaseio.com/albums.json`, post)
    .pipe(map(res => {
      return {...post, $key: res.name}
        }
      )
    )
  }

  getAlbums(){
    return this.http
      .get<{ [key: string]: Post }>(
        'https://http-29a3e-default-rtdb.firebaseio.com/albums.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
            // responseData[key].genre=[Array.from(responseData[key].genre).join(', ')]
            //responseData[key].label=[Array.from(responseData[key].label).join(', ')]
            // responseData[key].producer=[Array.from(responseData[key].producer).join(', ')]
              postsArray.push({ ...responseData[key], $key: key });
            }
          }
          return postsArray;
        })
      )
  }

  putAlbum($key:string,updatedPost:Post){
    this.isEdited=true
    return this.http.put<void>(
      `https://http-29a3e-default-rtdb.firebaseio.com/albums/${$key}.json`, updatedPost).subscribe()
  }

  deleteAlbum($key):Observable<void>  {
    this.isDeleted = true
    return this.http.delete<void>(
      `https://http-29a3e-default-rtdb.firebaseio.com/albums/${$key}.json`
    );
  }







arrGenre: Genre[]=[]
arrLabel: Label[]=[]
arrProducer: Producer[]=[]
  populateForm(album) {
    album.genre.forEach(item=>{
      this.arrGenre.push({name:item})
    })
    album.label.forEach(item=>{
      this.arrLabel.push({name:item})
    })
    album.producer.forEach(item=>{
      this.arrProducer.push({name:item})
    })
    album.genre=[]
     album.label=[]
     album.producer=[]
    this.form.setValue(_.omit(album));

    }
}
