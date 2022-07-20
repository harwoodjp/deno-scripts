import {
	exists,
  ensureFile,
  ensureFileSync,
} from "https://deno.land/std/fs/mod.ts";

const today = () => {
	const dateParts: string[] = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"})
		.split(",")[0]
		.split("/")
	if (dateParts[0].length == 1)
		dateParts[0] = `0${dateParts[0]}`	
	return `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`	
}

const sayHello = () => { console.log(sayHello) }
const editor: string = "/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"
const folder: string = "/Users/justin/Volumes/MEGA/Documents/scratch/"
const extension: string = Deno.args[0] || "txt"
const file: string = `${folder}${today()}.${extension}`

exists(file) 
	.then(async (result : boolean) => {
		if (!result)
			await ensureFile(file)
	})
	.then(async () => {
			const cmd = [editor, file]
			const p = await Deno.run({ cmd })
			await p.status()		
	})
	.then(() => {
		console.log(file)
	})