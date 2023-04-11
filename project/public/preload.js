process.once("loaded", () => {
    const { contextBridge } = require("electron")
    const fs = require("fs")
    const path = require("path")
    const LEVELS = './levels/'

    contextBridge.exposeInMainWorld(
        "api", {
        /**
         * prints the current directory
         * @returns 
         */
        pwd: () => {
            return process.cwd()
        },
        /**
         * save a level to LEVELS directory. Throws error if already exists.
         * @param {string} name 
         * @param {Level} level 
         */
        writeLevel: (level) => {
            fs.writeFileSync(path.join(__dirname, LEVELS, level.name + ".json"),
                JSON.stringify(level), {flag: "ax"})
        },
        /**
         * Read a Level from LEVELS directory. Throws error if not found
         * @param {string} path 
         * @returns file contents
         */
        readLevel: (name) => {
            const content = fs.readFileSync(path.join(__dirname, LEVELS, name + ".json"),
                { encoding: "utf-8", flag: "r" })
            return JSON.parse(content)
        },
        levelExists: (name) => {
            return fs.existsSync(path.join(LEVELS, name))
        }
    }
    )
})