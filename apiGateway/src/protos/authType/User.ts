// Original file: src/proto/auth.proto


export interface User {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'age'?: (number);
  'location'?: (number);
  'state'?: (number);
  'gender'?: (number);
  'role'?: (string);
  'followeeCount'?: (number);
  'followerCount'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface User__Output {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'age'?: (number);
  'location'?: (number);
  'state'?: (number);
  'gender'?: (number);
  'role'?: (string);
  'followeeCount'?: (number);
  'followerCount'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
