export interface User{
  id: number,
  nom: string,
  prenom: string,
  email: string,
  password: string,
  code:string,
  role:UserRole
}
export enum UserRole {
  Admin = 'admin' ,
  Professionnel = 'professionnel' , // Rhono
  Particulier = 'particulier',
  Technicien = 'technicien',
  Invité = 'invité'

}
