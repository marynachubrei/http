import { Component, OnInit, DoCheck } from '@angular/core';
import { AlbumService } from '../shared/album.service';
import { ConfirmDialogService } from '../shared/confirm-dialog.service'
import { AlbumComponent} from '../album/album.component'
import { Post } from '../album/album.model';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, DoCheck {
  loadedPosts: Post[] = [];
  private errorSub: Subscription;
  constructor(
    private service: AlbumService,
    private dialog:  MatDialog,
    private dialogService: ConfirmDialogService  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'band', 'genre', 'label', 'producer', 'actions'];

  ngOnInit() {
    this.service.getAlbums().subscribe(posts=>{
    this.loadedPosts=posts
    this.listData = new MatTableDataSource(posts);
    })
  }

  ngDoCheck(){
    if(this.service.isCreated == true||this.service.isDeleted==true||this.service.isEdited== true){
      this.service.getAlbums().subscribe(posts=>{
        this.loadedPosts=posts
        this.listData = new MatTableDataSource(posts);
        console.log(this.service.isCreated)
        this.service.isDeleted = false
        this.service.isCreated = false
        this.service.isEdited = false
      })
    }
  }
  onGetAlbums(){
    this.service.getAlbums().subscribe(posts=>{
      this.listData = new MatTableDataSource(posts);
    })
  }

   onDelete(row){
    this.dialogService.openConfirmDialog().afterClosed().subscribe( result=>{
      if(result){
        this.service.deleteAlbum(row.$key).subscribe();
        this.service.isCreated=false
      }
    })
  }

  onEdit(row){
    this.service.isEdited = true;
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AlbumComponent,dialogConfig);
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AlbumComponent,dialogConfig);
  }
}
