export interface IDocument {
  id: number,
  filename:string,
  originalFilename:string,
  fileSize:number,
  fileExtension:string,
  created_at:string,
  updated_at:string
}

export interface IStoreState {
  documents: IDocument[] | null,
  filter: string,
  loading:boolean
}
 