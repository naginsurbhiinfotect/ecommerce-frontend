import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpointUrl: any = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  signup(userdata: FormGroup) {
    let apiurl = `${this.endpointUrl}/api/user/signup`;
    return this.http.post(apiurl, userdata.value)
  }

  signin(email: any, password: any) {
    return this.http.post<any>(`${this.endpointUrl}/api/user/signin`, { email, password }).pipe(map((res: any) => {
      return res;
    })
    );
  }

  userlist() {
    return this.http.get(`${this.endpointUrl}/api/user/users`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  userById() {
    return this.http.get(`${this.endpointUrl}/api/user/userById` + localStorage.getItem("id")).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updatepassword(userId: any, password: any, newpassword: any) {
    return this.http.put(`${this.endpointUrl}/api/user/upadate/password`, { userId, password, newpassword }).pipe(map((res) => {
      return res;
    })
    );
  }



}

