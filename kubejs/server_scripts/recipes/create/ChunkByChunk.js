ServerEvents.recipes(event => {
    let { create } = event.recipes

    create.mixing(
        'cmc:world_gem',[
            Item.of('chunkbychunk:worldfragment',4),
            Item.of('chunkbychunk:worldshard',4),
            Item.of('chunkbychunk:worldcrystal',4),
            Fluid.of('cmc:world_fluid',1000)
        ])

    create.emptying([
        Fluid.of('cmc:world_fluid',100),
        'chunkbychunk:worldfragment'],
        'chunkbychunk:worldcrystal'
    )

    create.mixing(
        Fluid.of('cmc:world_fluid',500),
        'chunkbychunk:worldcore'
    ).heated()

    create.compacting(
        Fluid.of('cmc:world_fluid',800),
        'chunkbychunk:worldcore'
    ).superheated()
})