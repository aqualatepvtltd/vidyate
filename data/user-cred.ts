export interface UserCredential {
  pass: string;
  name: string;
  email: string;

}

export const userCredentials: UserCredential[] = [
  {
    pass: "12345",
    name: "Aditya Sharma",
    email: "student@vidyate.com",
  },
 
];

export default userCredentials;
