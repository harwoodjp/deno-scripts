import {
	exists,
  ensureFile,
  ensureFileSync,
} from "https://deno.land/std/fs/mod.ts";

const editor: string = "/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"
const folder: string = "/Users/justin/Volumes/MEGA/Documents/scratch/"
const extension: string = Deno.args[0] || "txt"
const dateParts: string[] = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"})
	.split(",")[0]
	.split("/")
const date: string = `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`
const file: string = `${folder}${date}.${extension}`

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