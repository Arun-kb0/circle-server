// Original file: src/proto/user.proto


export interface GetAllUsersRequest {
  'page'?: (number);
  'startDate'?: (string);
  'endDate'?: (string);
  'searchText'?: (string);
}

export interface GetAllUsersRequest__Output {
  'page'?: (number);
  'startDate'?: (string);
  'endDate'?: (string);
  'searchText'?: (string);
}
