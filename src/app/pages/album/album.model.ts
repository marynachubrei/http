export interface Genre {
 name:string
}
export interface Label {
  name:string
 }
 export interface Producer {
  name:string
 }
export interface Post {
  name: string;
  band: string;
  $key?: string;
  // genre: string,
   genre: string[],
  //genre:Genre[]
  label: string[],
  producer: string[],
}

export interface CreateResponse {
  name: string
}
