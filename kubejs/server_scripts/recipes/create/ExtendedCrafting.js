ServerEvents.recipes(event =>{
    let { create } = event.recipes
    
    //黑铁锭 => 黑铁板
    create.pressing(
        'extendedcrafting:black_iron_slate',
        'extendedcrafting:black_iron_ingot'
    )

    //黑铁粒
    create.deploying(
        'extendedcrafting:black_iron_nugget',
        [
            'createdeco:industrial_iron_nugget',
            'ae2:black_lumen_paint_ball'
        ])



})