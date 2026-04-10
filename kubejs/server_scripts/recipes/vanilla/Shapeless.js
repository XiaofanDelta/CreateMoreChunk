ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:andesite',8),
        [
            '8x minecraft:cobblestone',
            'chunkbychunk:worldfragment'
        ]
    )
})