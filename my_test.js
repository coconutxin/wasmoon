const { LuaFactory } = require('./dist')

async function start() {
    // Initialize a new lua environment factory
    // You can pass the wasm location as the first argument, useful if you are using wasmoon on a web environment and want to host the file by yourself
    const factory = new LuaFactory()
    // Create a standalone lua environment from the factory
    const lua = await factory.createEngine()

    try {
        // Set a JS function to be a global lua function
        lua.global.set('sum', (x, y) => x + y)
        // Run a lua string
        await lua.doString(`
            print(sum(10, 10))
            function multiply(x, y)
                return x * y
            end
        `)
        // Get a global lua function as a JS function
        const multiply = lua.global.get('multiply')
        console.log(multiply(10, 10))
        await lua.doString("print(string.format('%s', _VERSION))")
        await lua.doString("collectgarbage('collect')")
    } finally {
        // Close the lua environment, so it can be freed
        lua.global.close()
    }
}

start();
