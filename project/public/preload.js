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
                JSON.stringify(level), { flag: "ax" })
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
        /**
        * save a level to PYTHON directory. Throws error if already exists.
        * @param {string} name 
        * @param {string} code 
        */
         writePy: (name, code) => {
            fs.writeFileSync(path.join(__dirname, "python", name + ".py"), code)
        },
        /**
         * Read a script from PYTHON directory. Throws error if not found
         * @param {string} path 
         * @returns file contents
         */
        readPy: (name) => {
            const content = fs.readFileSync(path.join(__dirname, "python", name + ".py"),
                { encoding: "utf-8", flag: "r" })
            return content
        },
        /**
        * save a level to PYTHON directory. Throws error if already exists.
        * @param {string} name 
        * @param {string} code 
        */
        writeUserPy: (name, code) => {
            fs.writeFileSync(path.join(__dirname, "userpython", name + ".py"), code)
        },
        /**
         * Read a script from PYTHON directory. Throws error if not found
         * @param {string} path 
         * @returns file contents
         */
        readUserPy: (name) => {
            const content = fs.readFileSync(path.join(__dirname, "userpython", name + ".py"),
                { encoding: "utf-8", flag: "r" })
            return content
        },
        getPyFilenames: () => {
            return fs.readdirSync(path.join(__dirname, "python"))
        },
        getUserPyFilenames: () => {
            return fs.readdirSync(path.join(__dirname, "userpython"))
        },
        getLevelFilenames: () => {
            return fs.readdirSync(path.join(__dirname, LEVELS))
                .map(filename => path.parse(filename).name)
        },
        levelExists: (name) => {
            return fs.existsSync(path.join(LEVELS, name))
        },
        /**
        * Read a file
        * @param {string} path 
        * @returns file contents
        */
        readFile: (path) => {
            return fs.readFileSync(path, { encoding: "utf-8", flag: "r" })
        },

        /**
        * write a file 
        * @param {string} path 
        * @param {string} text 
        */
        writeFile: (path, text) => {
            fs.writeFileSync(path, text)
        },
    }
    )
})