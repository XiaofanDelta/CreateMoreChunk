StartupEvents.registry('creative_mode_tab',event=>{
    event.create('cmc:cmc_ae_items')
    .icon(() => 'cmc:cell_creative_full')
    .content(() => [
        'cmc:cell_creative_basic',
        'cmc:cell_creative',
        'cmc:cell_creative_basic_full',
        'cmc:cell_creative_full',
        'cmc:infinity_lava_cell',
        'cmc:drive_part'
    ])

    event.create('cmc:cmc_normal_items')
    .icon(() => 'cmc:basic_smithing_template')
    .content(() => [
        'cmc:basic_smithing_template',
        'cmc:world_gem'
    ])

    event.create('cmc:cmc_fluid')
    .icon(() => 'cmc:impurity_bucket')
    .content(() => [
        'cmc:impurity_bucket',
        'cmc:world_fluid_bucket'
    ])

    event.create('cmc:cmc_normal_blocks')
    .icon(() => 'cmc:sky_stone_casing')
    .content(() => [
        'cmc:sky_stone_casing',
        'cmc:computing_casing',
        'cmc:creative_fiuld_tank'
    ])

    event.create('cmc:cmc_incomplete_items')
    .icon(() => 'cmc:incomplete_netherite_upgrade_smithing_template')
    .content(() => [
        'cmc:incomplete_netherite_upgrade_smithing_template'
    ])
})

StartupEvents.registry('creative_mode_tab',event=>{
    event.create('cmc:chunk_by_chunk')
    .icon(() => 'chunkbychunk:chunkspawner')
    .content(() => [
        'chunkbychunk:worldfragment',
        'chunkbychunk:worldshard',
        'chunkbychunk:worldcrystal',
        'cmc:world_gem',
        'chunkbychunk:worldcore',
        'chunkbychunk:worldforge',
        'chunkbychunk:worldscanner',
        'chunkbychunk:worldmender',
        'chunkbychunk:chunkspawner',
        'chunkbychunk:unstablechunkspawner',
        'chunkbychunk:plainschunkspawner',
        'chunkbychunk:snowchunkspawner',
        'chunkbychunk:desertchunkspawner',
        'chunkbychunk:swampchunkspawner',
        'chunkbychunk:badlandschunkspawner',
        'chunkbychunk:forestchunkspawner',
        'chunkbychunk:savannachunkspawner',
        'chunkbychunk:rockychunkspawner',
        'chunkbychunk:junglechunkspawner',
        'chunkbychunk:mushroomchunkspawner',
        'chunkbychunk:mountainchunkspawner'
    ])
})