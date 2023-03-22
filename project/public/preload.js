process.once("loaded", () => {
    const { contextBridge } = require("electron")
    const fs = require("fs")
    const path = require("path")

    contextBridge.exposeInMainWorld(
        "api", {
        currentDirectory: () => {
            return process.cwd()
        },
        saveFile: (filename) => {
            console.log(__dirname)
            fs.writeFileSync(path.join(__dirname, filename), "Hey Did This Work")
        },
        readFile: (filename) => {
            return fs.readFileSync(path.join(__dirname, filename))
        }
    }
    )
})