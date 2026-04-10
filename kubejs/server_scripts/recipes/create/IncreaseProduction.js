ServerEvents.recipes(event =>{
    let { create } = event.recipes

    //铀增产
    create.emptying([
        Fluid.of('mekanism:uranium_oxide',250),
        Item.of('mekanism:clump_uranium')
        ],
        'mekanism:yellow_cake_uranium'
    )

})