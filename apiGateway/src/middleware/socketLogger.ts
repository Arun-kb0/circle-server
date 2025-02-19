
const socketLogger = ([event, ...args]: any, next: any) => {
  console.log("\x1b[32m%s\x1b[0m", `Event : ${event}`,)
  console.log("\x1b[32m%s\x1b[0m", `args: ${args.toString()}`,)
  next()
}

export default socketLogger