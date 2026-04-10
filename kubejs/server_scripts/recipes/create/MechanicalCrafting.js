ServerEvents.recipes((event) => {
	let { create } = event.recipes
    create.mechanical_crafting('minecraft:spawner',

        [
        "IBBI",
        "B  B",
        "B  B",
        "IBBI"
        ],

        {
        I:"minecraft:iron_ingot",

        B:"minecraft:iron_bars"

        }

    )
})