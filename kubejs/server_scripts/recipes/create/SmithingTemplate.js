ServerEvents.recipes((event) => {
    let { create } = event.recipes

    create.pressing(
        'cmc:basic_smithing_template',
        '#minecraft:planks'
    )
})