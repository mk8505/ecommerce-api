export interface SignupRequestDTO {
    name: string;
    email: string;
    password: string;
  }
  
  export interface LoginRequestDTO {
    email: string;
    password: string;
  }
  
  export interface AuthResponseDTO {
    id: number;
    name: string;
    email: string;
    token: string;
  }
  