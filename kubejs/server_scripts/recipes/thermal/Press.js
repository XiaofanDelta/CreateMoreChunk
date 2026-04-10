ServerEvents.recipes(event => {
    let { thermal } = event.recipes

    thermal.press(
        'thermal_extra:augment_smithing_upgrade',
        'cmc:basic_smithing_template'
    )
})