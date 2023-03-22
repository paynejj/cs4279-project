process.once("loaded", () => {
    const { contextBridge } = require("electron")
    const fs = require("fs")
    const path = require("path")

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
         * write a file 
         * @param {string} path 
         * @param {string} text 
         */
        writeFile: (path, text) => {
            fs.writeFileSync(path, text)
        },
        /**
         * Read a file
         * @param {string} path 
         * @returns file contents
         */
        readFile: (path) => {
            return fs.readFileSync(path)
        }
    }
    )
})