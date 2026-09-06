export interface UserCredential {
  id: string;
  pass: string;
  name: string;
  email: string;

}

export const userCredentials: UserCredential[] = [
  {
    id: "student@vidyate.com",
    pass: "vidyate2026",
    name: "Aditya Sharma",
    email: "student@vidyate.com",
  },
 
];

export default userCredentials;
