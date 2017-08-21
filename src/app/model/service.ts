const SEPARATOR = ' ';

export class Service {
  name: string;
  url: string;
  health: Health;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  toString(): string {
    return this.name  + SEPARATOR + this.url + SEPARATOR + this.health.status;
  }
}
