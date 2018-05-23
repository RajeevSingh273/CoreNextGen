interface ITodo {
  Id: number;
  title: string;
  description?: string;
  status: number;
  priority: number;
  created: Date;
  updated?: Date;
}
