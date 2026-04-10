ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

    thermal.centrifuge([
        Fluid.of("cmc:impurity",1000),
        Item.of("create:fluid_tank").withChance(0.8),
        Item.of("create:creative_fluid_tank").withChance(0.01)
    ],
    "cmc:creative_fiuld_tank"
    )
    .energy(50000)
        
    
})