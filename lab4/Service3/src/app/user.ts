export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
  }
}
