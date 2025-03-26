export default function returnHowManyArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
  return args.length;
}
