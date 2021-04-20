export class User{
  public username: string;
  public email: string;
  public address: string;
  public password: string;

  constructor(name: string, email: string, address: string, password: string) {
    this.username = name;
    this.email = email;
    this.address = address;
    this.password = password;
  }
}
