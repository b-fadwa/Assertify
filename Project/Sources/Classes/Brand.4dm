Class extends DataClass

exposed function filterBrandsByType($EquipmentType : text)->$brands : cs.BrandSelection
	$brands := this.query("equipments.type.label = :1"; $EquipmentType)
	