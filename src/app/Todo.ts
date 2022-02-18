export class Todo {
  sno: number
  title: string
  desc : string
  isActive: boolean
  
  constructor(sno: number, title: string, desc: string, isActive: boolean) {
    this.sno = sno
    this.title = title
    this.desc = desc
    this.isActive = isActive
  }
  
}