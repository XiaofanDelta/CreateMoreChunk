StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})

StartupEvents.modifyCreativeTab("thermal_extra:resources", (event) => {
	event.add([
		"thermal_extra:polyolefin_plate"
	])
})

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	
	event.remove([
		"cmc:cell_creative_basic",
		"cmc:cell_creative",
		"cmc:cell_creative_basic_full",
		"cmc:cell_creative_full",
		"cmc:infinity_lava_cell",
		"cmc:incomplete_netherite_upgrade_smithing_template",
		"cmc:basic_smithing_template",
		"cmc:world_gem",
		"cmc:drive_part",
		"cmc:andesite_upgrade_smithing_template",
		"cmc:test",
		"cmc:impurity_bucket",
		"cmc:sky_stone_casing",
		'cmc:computing_casing',
		'cmc:creative_fiuld_tank',
		'cmc:world_fluid_bucket'
	])
})