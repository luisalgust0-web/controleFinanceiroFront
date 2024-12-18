import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntradaInput } from 'src/app/modules/shared/models/EntradaInput';
import { EntradaOutput } from 'src/app/modules/shared/models/EntradaOutput';

import { environment } from '../../../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url : string = `${environment.URLAPI}/Entrada`

  constructor(
    private http: HttpClient,
  ) {}

  public salvarEntrada(entradaInput: EntradaInput): Observable<EntradaOutput[]> {
    return this.http.post<EntradaOutput[]>(`${this.url}/Salvar` ,entradaInput)
  }

  public getEntradas(ano: number, mes: number): Observable<EntradaOutput[]> {
    return this.http.get<EntradaOutput[]>(`${this.url}/GetEntradas/${ano}/${mes}`)
  }

}
