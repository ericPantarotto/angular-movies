export interface userCredentials {
  emailAddress: string;
  password: string;
}

export interface authenticationResponse {
  token: string;
  expiration: Date;
}