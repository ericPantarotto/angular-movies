export interface userCredentials {
  emailAddress: string;
  password: string;
}

export interface authenticationResponse {
  token: string;
  expiration: Date;
}

export interface userDTO {
  userId: string;
  emailAddress: string;
  roles: string[];
}

export interface editRoleDTO {
  userId: string;
  roleName: string;
}
