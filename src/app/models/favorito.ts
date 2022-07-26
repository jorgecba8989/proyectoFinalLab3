import { DocumentReference } from "@angular/fire/firestore";

export class Favorito{
    idComic!:string;
    descripcion!: string;
    titulo!:string;
    ref!: DocumentReference;
    visible:boolean = false
}