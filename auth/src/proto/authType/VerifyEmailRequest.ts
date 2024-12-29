// Original file: src/proto/auth.proto


export interface VerifyEmailRequest {
  'email'?: (string);
  'otp'?: (number);
  'otpId'?: (string);
}

export interface VerifyEmailRequest__Output {
  'email'?: (string);
  'otp'?: (number);
  'otpId'?: (string);
}
