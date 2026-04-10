ServerEvents.recipes(event => {
    let { lychee } = event.recipes

    lychee.block_interacting(
        'cmc:world_gem',
        "allthecompressed:cobblestone_3x")
    .post([
        Post.place("chunkbychunk:worldcore")
    ])


    lychee.item_inside(
        'minecraft:water_bucket',
        "cmc:world_fluid")
    .post([
        Post.drop_item('minecraft:lava_bucket')
    ])


    lychee.block_interacting(
        'minecraft:campfire',
        "allthecompressed:cobblestone_2x")
    .post([
        Post.place("minecraft:furnace")
    ])

    lychee.block_interacting(
        'thermal:fluid_tank_creative_augment',
        "create:fluid_tank")
    .post([
        Post.place("cmc:creative_fiuld_tank")
    ])

})