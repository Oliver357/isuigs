import { Usuario } from '../usuario';

export class Cliente extends Usuario{

  public empresa:string;

  constructor(id:number, nombre:string, apellido:string, email:string, username:string, password:string, empresa:string){
    super(id, nombre, apellido, email, username, password);
    this.empresa = empresa;
  }

  public getEmpresa():string{
    return this.empresa;
  }
  public setEmpresa(empresa:string):void{
    this.empresa = empresa;
  }

}
