import {
	exists,
  ensureFile,
  ensureFileSync,
} from "https://deno.land/std/fs/mod.ts";

const editor: string = "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl"
const folder: string = Deno.env.get("scratch_folder")
const timeZone: string = Deno.env.get("scratch_timezone")
const extension: string = Deno.args[0] || "txt"

const today = (): string => {
	const dateParts: string[] = new Date()
		.toLocaleString("en-US", { timeZone })
		.split(",")[0]
		.split("/")
	if (dateParts[0].length == 1)
		dateParts[0] = `0${dateParts[0]}`	
	if (dateParts[1].length == 1)
		dateParts[1] = `0${dateParts[1]}`	
	return `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`	
}

if (extension == "/") {
	const cmd = [editor, folder]
	const p = await Deno.run({ cmd })
	await p.status()
} else {
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
		.then(() => console.log(file))
}