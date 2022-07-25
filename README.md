### To run

`deno run [args] [script]`
* args
	* `--allow-run`
* script
	* File
	* URL
	* `.ts`
	* `.js`

### Scripts

`runCommand.js`
* Run input command as Deno subprocess

`scratch.ts`
* Create scratch files for notes, code experiments, etc.
* `deno run --allow-read --allow-write --allow-run scratch.ts py`
* Set variables in `.bash_profile`: `scratch_editor`, `scratch_folder`, `scratch_timezone`
* Todo: support local config for remote call
