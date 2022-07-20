import {
	exists,
  ensureFile,
  ensureFileSync,
} from "https://deno.land/std/fs/mod.ts";

const editor = "/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"
const folder: string = "/Users/justin/Volumes/MEGA/Documents/scratch/"
const extension: string = Deno.args[0] || "txt"
const date: string = new Date().toISOString().substring(0, 10)
const file: string = `${folder}${date}.${extension}`

exists(file)
	.then(async (result : boolean) => {
		if (result) {	
		} else {
			await ensureFile(file)
		}
	})
	.then(async () => {
			const cmd = [editor, file]
			const p = await Deno.run({ cmd })
			await p.status()		
	})
	.then(() => {
		console.log(file)
	})