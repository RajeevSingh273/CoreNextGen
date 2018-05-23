export class Todo implements ITodo {
  constructor(public Id: number,
    public title: string,
    public description: string,
    public status: number,
    public priority: number,
    public created: Date,
    public updated: Date) { }
}
