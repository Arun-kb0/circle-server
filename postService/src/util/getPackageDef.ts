import * as protoLoader from '@grpc/proto-loader'

const getPackageDef = (PROTO_PATH:string) => {
  const packageDef = protoLoader.loadSync(
    PROTO_PATH,
    {
      keepCase: true,
      longs: String,
      enums:String,
      defaults: true,
      oneofs: true
    }
  )
  return packageDef
}

export default getPackageDef