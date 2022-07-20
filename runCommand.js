const input = prompt("Command:")
const cmd = input.split(" ")
const p = await Deno.run({ cmd })
await p.status()