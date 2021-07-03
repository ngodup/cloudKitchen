import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { initSupabase } from 'src/utils/initSupabase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(initSupabase.supabaseUrl, initSupabase.supabaseKey, {
      autoRefreshToken: true,
      persistSession: true
    });
  }

  async signUp(credentials: { email, password }) {
    return new Promise(async (resolve, reject) => {
      const { error, data } = await this.supabase.auth.signUp(credentials)
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  }

  signIn(credentials: { email, password }) {
    return new Promise(async (resolve, reject) => {
      const { error, data } = await this.supabase.auth.signIn(credentials)
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  }
}
