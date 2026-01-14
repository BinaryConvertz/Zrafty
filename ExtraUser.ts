class User {
  private name: string | undefined;
  //   private title: string | undefined;

  constructor(name: string) {
    this.name = name;
  }

  logName() {
    return "Hello " + this.name;
  }
}

export class Title extends User {
  //   private name: string | undefined;
  private title: string | undefined;

  constructor(title: string) {
    super(title);
    // this.name = name;
    this.title = title;
  }

  GetTitle(): string {
    return "Welcome to: " + this.title;
  }
}

export const endline = () => {
  return "\n";
};

export const Upper = (message: string) => {
  return message.toUpperCase();
};

export default User;
