// Original file: src/proto/auth.proto


export interface ResendOtpRequest {
  'email'?: (string);
  'otpId'?: (string);
  'isPassword'?: (boolean);
}

export interface ResendOtpRequest__Output {
  'email'?: (string);
  'otpId'?: (string);
  'isPassword'?: (boolean);
}
