(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{O7t3:function(e,t,r){"use strict";r.r(t),r.d(t,"AlbumsModule",(function(){return ee}));var a=r("ofXK"),o=r("tyNb"),c=r("fXoL"),n=r("FtGj"),i=r("pSiA"),l=r("tk/3"),s=r("0IaG"),b=r("/t3+"),m=r("3Pt+"),u=r("zkoq"),d=r("kmnG"),p=r("qFsG"),f=r("A5z7"),h=r("bTqV"),v=r("NFeN");function g(e,t){1&e&&(c.Rb(0,"mat-error"),c.rc(1,"This field is required!"),c.Qb())}function C(e,t){1&e&&(c.Rb(0,"mat-error"),c.rc(1,"This field is required!"),c.Qb())}function R(e,t){1&e&&(c.Rb(0,"mat-icon",27),c.rc(1,"cancel"),c.Qb())}function Q(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-chip",25),c.Yb("removed",(function(){c.ic(e);const r=t.$implicit;return c.ac().remove("genre",r)})),c.rc(1),c.qc(2,R,2,0,"mat-icon",26),c.Qb()}if(2&e){const e=t.$implicit,r=c.ac();c.dc("selectable",r.selectable)("removable",r.removable),c.Bb(1),c.tc(" ",e.name," "),c.Bb(1),c.dc("ngIf",r.removable)}}function y(e,t){1&e&&(c.Rb(0,"mat-icon",27),c.rc(1,"cancel"),c.Qb())}function w(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-chip",25),c.Yb("removed",(function(){c.ic(e);const r=t.$implicit;return c.ac().remove("label",r)})),c.rc(1),c.qc(2,y,2,0,"mat-icon",26),c.Qb()}if(2&e){const e=t.$implicit,r=c.ac();c.dc("selectable",r.selectable)("removable",r.removable),c.Bb(1),c.tc(" ",e.name," "),c.Bb(1),c.dc("ngIf",r.removable)}}function O(e,t){1&e&&(c.Rb(0,"mat-icon",27),c.rc(1,"cancel"),c.Qb())}function B(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-chip",25),c.Yb("removed",(function(){c.ic(e);const r=t.$implicit;return c.ac().remove("producer",r)})),c.rc(1),c.qc(2,O,2,0,"mat-icon",26),c.Qb()}if(2&e){const e=t.$implicit,r=c.ac();c.dc("selectable",r.selectable)("removable",r.removable),c.Bb(1),c.tc(" ",e.name," "),c.Bb(1),c.dc("ngIf",r.removable)}}let I=(()=>{class e{constructor(e,t,r){this.service=e,this.http=t,this.dialogRef=r,this.visible=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[n.g,n.c],this.genres=[...this.service.arrGenre],this.labels=[...this.service.arrLabel],this.producers=[...this.service.arrProducer],this.arrayGenre=[],this.arrayLabel=[],this.arrayProducer=[]}ngOnInit(){}onSubmit(e){(e={name:this.service.form.value.name,band:this.service.form.value.band,genre:this.service.form.value.genre,label:this.service.form.value.label,producer:this.service.form.value.producer}).genre=this.arrayGenre,e.label=this.arrayLabel,e.producer=this.arrayProducer,this.service.form.valid&&(this.service.form.value.$key?(this.genres.forEach(e=>{this.arrayGenre.push(e.name)}),this.labels.forEach(e=>{this.arrayLabel.push(e.name)}),this.producers.forEach(e=>{this.arrayProducer.push(e.name)}),this.service.putAlbum(this.service.form.value.$key,e)):this.service.createAlbum(e).subscribe(),this.service.arrGenre=[],this.service.arrLabel=[],this.service.arrProducer=[],this.service.form.reset(),this.onClose())}onClose(){this.service.form.reset(),this.dialogRef.close(),this.service.arrGenre=[],this.service.arrLabel=[],this.service.arrProducer=[]}add(e){const t=(e.value||"").trim();"genre"==e.input.getAttribute("formControlName")&&t&&(this.genres.push({name:t}),this.service.form.value.$key||this.arrayGenre.push(t)),"label"==e.input.getAttribute("formControlName")&&t&&(this.labels.push({name:t}),this.service.form.value.$key||this.arrayLabel.push(t)),"producer"==e.input.getAttribute("formControlName")&&t&&(this.producers.push({name:t}),this.service.form.value.$key||this.arrayProducer.push(t)),e.input&&(e.input.value="")}remove(e,t){let r;"genre"==e&&(r=this.genres),"label"==e&&(r=this.labels),"producer"==e&&(r=this.producers);const a=r.indexOf(t);a>=0&&r.splice(a,1)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(i.a),c.Lb(l.b),c.Lb(s.e))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-album"]],decls:44,vars:17,consts:[[1,"form-title"],[1,"normal-form",3,"formGroup","submit"],["cols","1","rowHeigth","300px"],[1,"main"],[1,"controles-container"],["type","hidden","formControlName","$key"],["appearance","fill"],["formControlName","name","matInput",""],[4,"ngIf"],["formControlName","band","matInput",""],[1,"chip-list"],["aria-label","Genre selection"],["chipListGenre",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","New genre...","formControlName","genre",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["aria-label","Label selection"],["chipListLabel",""],["placeholder","Add label...","formControlName","label",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[1,"example-chip-list"],["aria-label","Producer selection"],["chipListProducer",""],["placeholder","Add prodecer...","formControlName","producer",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[1,"button-row"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["mat-raised-button","","name","cancel",3,"click"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(e,t){if(1&e&&(c.Rb(0,"mat-toolbar"),c.Rb(1,"span",0),c.rc(2),c.Qb(),c.Qb(),c.Rb(3,"form",1),c.Yb("submit",(function(){return t.onSubmit(t.service.form.value)})),c.Rb(4,"mat-grid-list",2),c.Rb(5,"mat-grid-tile",3),c.Rb(6,"div",4),c.Mb(7,"input",5),c.Rb(8,"mat-form-field",6),c.Rb(9,"mat-label"),c.rc(10,"Name"),c.Qb(),c.Mb(11,"input",7),c.qc(12,g,2,0,"mat-error",8),c.Qb(),c.Rb(13,"mat-form-field",6),c.Rb(14,"mat-label"),c.rc(15,"Band"),c.Qb(),c.Mb(16,"input",9),c.qc(17,C,2,0,"mat-error",8),c.Qb(),c.Rb(18,"mat-form-field",10),c.Rb(19,"mat-label"),c.rc(20,"Genres"),c.Qb(),c.Rb(21,"mat-chip-list",11,12),c.qc(23,Q,3,4,"mat-chip",13),c.Rb(24,"input",14),c.Yb("matChipInputTokenEnd",(function(e){return t.add(e)})),c.Qb(),c.Qb(),c.Qb(),c.Rb(25,"mat-form-field",10),c.Rb(26,"mat-label"),c.rc(27,"Label"),c.Qb(),c.Rb(28,"mat-chip-list",15,16),c.qc(30,w,3,4,"mat-chip",13),c.Rb(31,"input",17),c.Yb("matChipInputTokenEnd",(function(e){return t.add(e)})),c.Qb(),c.Qb(),c.Qb(),c.Rb(32,"mat-form-field",18),c.Rb(33,"mat-label"),c.rc(34,"Producer"),c.Qb(),c.Rb(35,"mat-chip-list",19,20),c.qc(37,B,3,4,"mat-chip",13),c.Rb(38,"input",21),c.Yb("matChipInputTokenEnd",(function(e){return t.add(e)})),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(39,"div",22),c.Rb(40,"button",23),c.rc(41,"Ok"),c.Qb(),c.Rb(42,"button",24),c.Yb("click",(function(){return t.onClose()})),c.rc(43,"Cancel"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&e){const e=c.hc(22),r=c.hc(29),a=c.hc(36);c.Bb(2),c.sc(t.service.form.controls.$key.value?"Modify Album":"New Album"),c.Bb(1),c.dc("formGroup",t.service.form),c.Bb(9),c.dc("ngIf",null==t.service.form.controls.name.errors?null:t.service.form.controls.name.errors.required),c.Bb(5),c.dc("ngIf",null==t.service.form.controls.band.errors?null:t.service.form.controls.band.errors.required),c.Bb(6),c.dc("ngForOf",t.genres),c.Bb(1),c.dc("matChipInputFor",e)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur",t.addOnBlur),c.Bb(6),c.dc("ngForOf",t.labels),c.Bb(1),c.dc("matChipInputFor",r)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur",t.addOnBlur),c.Bb(6),c.dc("ngForOf",t.producers),c.Bb(1),c.dc("matChipInputFor",a)("matChipInputSeparatorKeyCodes",t.separatorKeysCodes)("matChipInputAddOnBlur",t.addOnBlur),c.Bb(2),c.dc("disabled",t.service.form.invalid)}},directives:[b.a,m.m,m.i,m.e,u.a,u.c,m.a,m.h,m.c,d.c,d.f,p.a,a.j,f.c,a.i,f.b,h.a,d.b,f.a,v.a,f.d],styles:[""]}),e})();var D=r("+0xr");let P=(()=>{class e{constructor(e){this.dialogRef=e}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(s.e))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-confirm-dialog"]],decls:10,vars:2,consts:[[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.Rb(0,"div"),c.Rb(1,"div",0),c.Rb(2,"mat-icon",1),c.Yb("click",(function(){return t.closeDialog()})),c.rc(3,"close"),c.Qb(),c.Rb(4,"span",2),c.rc(5,"Are you sure to delete this record ?"),c.Qb(),c.Qb(),c.Rb(6,"button",3),c.rc(7,"NO"),c.Qb(),c.Rb(8,"button",4),c.rc(9,"YES"),c.Qb(),c.Qb()),2&e&&(c.Bb(6),c.dc("mat-dialog-close",!1),c.Bb(2),c.dc("mat-dialog-close",!0))},directives:[v.a,h.a,s.b],styles:[""]}),e})(),k=(()=>{class e{constructor(e){this.dialog=e}openConfirmDialog(){return this.dialog.open(P,{width:"350px",panelClass:"confirm-dialog-container",disableClose:!0})}}return e.\u0275fac=function(t){return new(t||e)(c.Vb(s.a))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function q(e,t){1&e&&(c.Rb(0,"mat-header-cell"),c.rc(1,"Name"),c.Qb())}function A(e,t){if(1&e&&(c.Rb(0,"mat-cell"),c.rc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.sc(e.name)}}function F(e,t){1&e&&(c.Rb(0,"mat-header-cell"),c.rc(1,"Band"),c.Qb())}function L(e,t){if(1&e&&(c.Rb(0,"mat-cell"),c.rc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.sc(e.band)}}function M(e,t){1&e&&(c.Rb(0,"mat-header-cell"),c.rc(1,"Genre"),c.Qb())}function $(e,t){if(1&e&&(c.Rb(0,"mat-cell"),c.rc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.sc(e.genre)}}function S(e,t){1&e&&(c.Rb(0,"mat-header-cell"),c.rc(1,"Label"),c.Qb())}function G(e,t){if(1&e&&(c.Rb(0,"mat-cell"),c.rc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.sc(e.label)}}function N(e,t){1&e&&(c.Rb(0,"mat-header-cell"),c.rc(1,"Producer"),c.Qb())}function E(e,t){if(1&e&&(c.Rb(0,"mat-cell"),c.rc(1),c.Qb()),2&e){const e=t.$implicit;c.Bb(1),c.sc(e.producer)}}function Y(e,t){1&e&&c.Mb(0,"mat-header-row")}function x(e,t){1&e&&c.Mb(0,"mat-row")}function K(e,t){1&e&&c.Mb(0,"mat-header-cell")}function _(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-cell"),c.Rb(1,"button",18),c.Yb("click",(function(){c.ic(e);const r=t.$implicit;return c.ac().onEdit(r)})),c.Rb(2,"mat-icon"),c.rc(3,"edit"),c.Qb(),c.Qb(),c.Rb(4,"button",19),c.Yb("click",(function(){c.ic(e);const r=t.$implicit;return c.ac().onDelete(r)})),c.Rb(5,"mat-icon"),c.rc(6,"delete"),c.Qb(),c.Qb(),c.Qb()}}function T(e,t){1&e&&(c.Rb(0,"mat-footer-cell",20),c.rc(1," Loading data... "),c.Qb())}function j(e,t){1&e&&(c.Rb(0,"mat-footer-cell",20),c.rc(1," No data. "),c.Qb())}const H=function(e){return{hide:e}};function J(e,t){if(1&e&&c.Mb(0,"mat-footer-row",21),2&e){const e=c.ac();c.dc("ngClass",c.fc(1,H,null!=e.listData))}}function z(e,t){if(1&e&&c.Mb(0,"mat-footer-row",21),2&e){const e=c.ac();c.dc("ngClass",c.fc(1,H,!(null!=e.listData&&0==e.listData.data.length)))}}const V=function(){return["loading"]},X=function(){return["noData"]};let U=(()=>{class e{constructor(e,t,r){this.service=e,this.dialog=t,this.dialogService=r,this.loadedPosts=[],this.displayedColumns=["name","band","genre","label","producer","actions"]}ngOnInit(){this.service.getAlbums().subscribe(e=>{this.loadedPosts=e,this.listData=new D.o(e)})}ngDoCheck(){1!=this.service.isCreated&&1!=this.service.isDeleted&&1!=this.service.isEdited||this.service.getAlbums().subscribe(e=>{this.loadedPosts=e,this.listData=new D.o(e),console.log(this.service.isCreated),this.service.isDeleted=!1,this.service.isCreated=!1,this.service.isEdited=!1})}onGetAlbums(){this.service.getAlbums().subscribe(e=>{this.listData=new D.o(e)})}onDelete(e){this.dialogService.openConfirmDialog().afterClosed().subscribe(t=>{t&&(this.service.deleteAlbum(e.$key).subscribe(),this.service.isCreated=!1)})}onEdit(e){this.service.isEdited=!0,this.service.populateForm(e);const t=new s.c;t.disableClose=!0,t.autoFocus=!0,t.width="40%",this.dialog.open(I,t)}ngOnDestroy(){this.errorSub.unsubscribe()}onCreate(){const e=new s.c;e.disableClose=!0,e.autoFocus=!0,e.width="40%",this.dialog.open(I,e)}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(i.a),c.Lb(s.a),c.Lb(k))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-album-list"]],decls:36,vars:7,consts:[[1,"albums-header"],["mat-icon-button","","color","primary","value","Add",3,"click"],[1,"mat-elevation-z8"],[3,"dataSource"],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","band"],["matColumnDef","genre"],["matColumnDef","label"],["matColumnDef","producer"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["matColumnDef","actions"],["matColumnDef","loading"],["colspan","6",4,"matFooterCellDef"],["matColumnDef","noData"],[3,"ngClass",4,"matFooterRowDef"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn",3,"click"],["colspan","6"],[3,"ngClass"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Rb(1,"mat-toolbar"),c.Rb(2,"span"),c.rc(3,"My App"),c.Qb(),c.Rb(4,"button",1),c.Yb("click",(function(){return t.onCreate()})),c.Rb(5,"mat-icon"),c.rc(6,"add"),c.Qb(),c.rc(7,"Add "),c.Qb(),c.Qb(),c.Qb(),c.Rb(8,"div",2),c.Rb(9,"mat-table",3),c.Pb(10,4),c.qc(11,q,2,0,"mat-header-cell",5),c.qc(12,A,2,1,"mat-cell",6),c.Ob(),c.Pb(13,7),c.qc(14,F,2,0,"mat-header-cell",5),c.qc(15,L,2,1,"mat-cell",6),c.Ob(),c.Pb(16,8),c.qc(17,M,2,0,"mat-header-cell",5),c.qc(18,$,2,1,"mat-cell",6),c.Ob(),c.Pb(19,9),c.qc(20,S,2,0,"mat-header-cell",5),c.qc(21,G,2,1,"mat-cell",6),c.Ob(),c.Pb(22,10),c.qc(23,N,2,0,"mat-header-cell",5),c.qc(24,E,2,1,"mat-cell",6),c.Ob(),c.qc(25,Y,1,0,"mat-header-row",11),c.qc(26,x,1,0,"mat-row",12),c.Pb(27,13),c.qc(28,K,1,0,"mat-header-cell",5),c.qc(29,_,7,0,"mat-cell",6),c.Ob(),c.Pb(30,14),c.qc(31,T,2,0,"mat-footer-cell",15),c.Ob(),c.Pb(32,16),c.qc(33,j,2,0,"mat-footer-cell",15),c.Ob(),c.qc(34,J,1,3,"mat-footer-row",17),c.qc(35,z,1,3,"mat-footer-row",17),c.Qb(),c.Qb()),2&e&&(c.Bb(9),c.dc("dataSource",t.listData),c.Bb(16),c.dc("matHeaderRowDef",t.displayedColumns),c.Bb(1),c.dc("matRowDefColumns",t.displayedColumns),c.Bb(8),c.dc("matFooterRowDef",c.ec(5,V)),c.Bb(1),c.dc("matFooterRowDef",c.ec(6,X)))},directives:[b.a,h.a,v.a,D.n,D.c,D.i,D.b,D.k,D.m,D.e,D.g,D.h,D.a,D.j,D.l,D.d,D.f,a.h],styles:["mat-table[_ngcontent-%COMP%]{width:100%}button[value=Add][_ngcontent-%COMP%]{margin-right:15px}mat-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type{margin-right:65px}mat-cell[_ngcontent-%COMP%]:nth-child(3), mat-footer-cell[_ngcontent-%COMP%]:nth-child(3), mat-header-cell[_ngcontent-%COMP%]:nth-child(3){margin-right:30px;margin-left:-70px}mat-cell[_ngcontent-%COMP%]:last-of-type, mat-footer-cell[_ngcontent-%COMP%]:last-of-type, mat-header-cell[_ngcontent-%COMP%]:last-of-type{margin-left:70px;margin-right:-100px}"]}),e})();const W=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["app-albums"]],decls:2,vars:0,consts:[[1,"container"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Mb(1,"app-album-list"),c.Qb())},directives:[U],encapsulation:2}),e})()}];let Z=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[o.a.forChild(W)],o.a]}),e})(),ee=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[a.b,Z]]}),e})()}}]);