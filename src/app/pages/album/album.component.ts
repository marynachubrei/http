import { Component, OnInit, AfterContentChecked, OnChanges, DoCheck } from '@angular/core';
import { AlbumService } from '../shared/album.service';
import { AlbumListComponent } from '../album-list/album-list.component';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Post,Genre,Label,Producer } from '../album/album.model'
import { MatTableDataSource } from '@angular/material/table';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  listData: MatTableDataSource<any>;

  constructor( public service: AlbumService, private http: HttpClient, public dialogRef: MatDialogRef<AlbumComponent>) { }

  ngOnInit(): void {
  }


  onSubmit(post:Post) {
    post ={name:this.service.form.value.name,
          band:this.service.form.value.band,
          genre:this.service.form.value.genre,
          label:this.service.form.value.label,
          producer:this.service.form.value.producer,
          }
          post.genre=this.arrayGenre
        post.label=this.arrayLabel
        post.producer=this.arrayProducer
    if (this.service.form.valid){
      if(!this.service.form.value.$key){
        this.service.createAlbum(post).subscribe()
      }else{
        this.genres.forEach(item=>{
          this.arrayGenre.push(item.name)
        })
        this.labels.forEach(item=>{
          this.arrayLabel.push(item.name)
        })
        this.producers.forEach(item=>{
          this.arrayProducer.push(item.name)
        })
        this.service.putAlbum(this.service.form.value.$key,post)}
        this.service.arrGenre=[]
        this.service.arrLabel=[]
        this.service.arrProducer=[]
        this.service.form.reset()
        this.onClose();
    }
}
  onClose() {
    this.service.form.reset();
    this.dialogRef.close();
    this.service.arrGenre=[];
    this.service.arrLabel=[];
    this.service.arrProducer=[]
  }




  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  genres: Genre[] = [
     ...this.service.arrGenre
  ];
  labels: Label[] = [
     ...this.service.arrLabel
   ];
  producers: Producer[] = [
     ...this.service.arrProducer
  ];

  arrayGenre:string[]=[]
  arrayLabel:string[]=[]
  arrayProducer:string[]=[]

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if(event.input.getAttribute('formControlName')=='genre'){
      if(value){
        this.genres.push({name: value});
        if(!this.service.form.value.$key){
            this.arrayGenre.push(value)
          }
      }
    }

    if(event.input.getAttribute('formControlName')=='label'){
      if(value){
        this.labels.push({name: value});
        if(!this.service.form.value.$key){
            this.arrayLabel.push(value)
          }
      }
    }

    if(event.input.getAttribute('formControlName')=='producer'){
      if(value){
        this.producers.push({name: value});
        if(!this.service.form.value.$key){
            this.arrayProducer.push(value)
          }
      }
    }

    if (event.input) {
      event.input.value='';
    }
  }

  // remove(genre: Genre): void {
  //   const index = this.genres.indexOf(genre);
  //   if (index >= 0) {
  //     this.genres.splice(index, 1);
  //   }
  // }
// onClick(event:Event){
//   const target = event.target as HTMLButtonElement;
//   if (target) return(target.dataset.type);
//   // console.log((<HTMLTextAreaElement>event.currentTarget))
  
// }
  remove(name,obj) {
    let objArray:Genre[]|Label[]|Producer[]
    if(name=='genre'){objArray = this.genres}
    if(name=='label'){objArray = this.labels}
    if(name=='producer'){objArray = this.producers}
    
    const index = objArray.indexOf(obj);
    if (index >= 0) {
      objArray.splice(index, 1);
    }
  }
}
