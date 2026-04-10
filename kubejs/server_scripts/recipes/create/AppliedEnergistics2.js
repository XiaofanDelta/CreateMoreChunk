ServerEvents.recipes(event =>{
    let { create } = event.recipes

    //黑色光通染色球
    create.filling(
        'ae2:black_lumen_paint_ball',
        [
            'ae2:black_paint_ball',
            Fluid.of('mekanism:uranium_oxide',125)
        ])

    create.deploying(
        'ae2:fluix_upgrade_smithing_template',
        [
            'cmc:basic_smithing_template',
            'ae2:fluix_crystal'
        ]
    )
})