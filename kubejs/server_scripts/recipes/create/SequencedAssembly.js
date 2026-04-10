ServerEvents.recipes((event) => {
	let { create } = event.recipes
    const incomplete_black_ingot = 'createdeco:industrial_iron_ingot'
    const incomplete_ex_drive = 'ae2:drive'

    create.sequenced_assembly(
        'extendedcrafting:black_iron_ingot',
        'createdeco:industrial_iron_ingot',[
            create.deploying(
                incomplete_black_ingot,[
                    incomplete_black_ingot,
                    'extendedcrafting:black_iron_nugget']),
            create.pressing(
                incomplete_black_ingot,
                incomplete_black_ingot)])
    .transitionalItem(incomplete_black_ingot)
    .loops(9)

    create.sequenced_assembly(
        'expatternprovider:ex_drive',
        'ae2:drive',[
            create.deploying(
                incomplete_ex_drive,[
                    incomplete_ex_drive,
                    'ae2:capacity_card']),
            create.deploying(
                incomplete_ex_drive,[
                    incomplete_ex_drive,
                    '#ae2:glass_cable']),
            create.deploying(
                incomplete_ex_drive,[
                    incomplete_ex_drive,
                    'cmc:drive_part']),
            create.pressing(
                incomplete_ex_drive,
                incomplete_ex_drive)
            ])
    .transitionalItem(incomplete_ex_drive)
    .loops(1)

    create.sequenced_assembly(
        'cmc:drive_part',
        '#ae2:glass_cable',[
            create.deploying(
                'ae2:fluix_glass_cable',[
                    'ae2:fluix_glass_cable',
                    'megacells:cell_dock'
                ]
            )
        ]
    ).transitionalItem('ae2:fluix_glass_cable')
    .loops(10)


    const incomplete_netherite_upgrade = 'cmc:incomplete_netherite_upgrade_smithing_template'
    create.sequenced_assembly(
        'minecraft:netherite_upgrade_smithing_template',
        'cmc:basic_smithing_template',[
            create.deploying(
                incomplete_netherite_upgrade,[
                    incomplete_netherite_upgrade,
                    'allthecompressed:netherrack_2x']
            ),
            create.deploying(
                incomplete_netherite_upgrade,[
                    incomplete_netherite_upgrade,
                    '#forge:gears/diamond'
                ]
            ),
            create.deploying(
                incomplete_netherite_upgrade,[
                    incomplete_netherite_upgrade,
                    'createdeco:netherite_coin'
                ]
            ),
            create.cutting(
                incomplete_netherite_upgrade,
                incomplete_netherite_upgrade
            ),
            create.filling(
                incomplete_netherite_upgrade,[
                    incomplete_netherite_upgrade,
                    Fluid.of("cmc:world_fluid",1000)
                ]
            ),
            create.pressing(
                incomplete_netherite_upgrade,
                incomplete_netherite_upgrade
            )
        ]
    ).transitionalItem(incomplete_netherite_upgrade)
    .loops(1)
})