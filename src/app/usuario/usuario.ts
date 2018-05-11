export class Usuario {

  protected id:number;
  protected nombre: string;
  protected apellido:string;
  protected username:string;
  protected password:string;
  protected email:string;


  constructor(id:number, nombre:string, apellido:string, email:string, username:string, password:string){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  public getId():number{
    return this.id;
  }
  public setId(id:number):void{
    this.id = id;
  }
  public getUsername():string{
    return this.username;
  }
  public setUsername(username:string):void{
    this.username = username;
  }
  public getPassword():string{
    return this.password;
  }
  public setPassword(password:string):void{
    this.password = password;
  }
  public getNombre():string{
    return this.nombre;
  }
  public setNombre(nombre:string):void{
    this.nombre = nombre;
  }
  public getApellido():string{
    return this.apellido;
  }
  public setApellido(apellido:string):void{
    this.apellido = apellido;
  }
  public getEmail():string{
    return this.email;
  }
  public setEmail(email:string):void{
    this.email = email;
  }

}
