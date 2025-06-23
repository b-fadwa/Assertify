Class extends DataClass

exposed function pieChart()->$types : collection
	$types := this.all().extract("label"; "label"; "equipments.length"; "value")

exposed function pieChartByUser($user : cs.UserEntity)->$result : collection
	$result := this.query("equipments.users.user.ID = :1";$user.ID).extract("label"; "label"; "equipments.length"; "value")

exposed function loadEquipmentDetails($equipment : cs.EquipmentEntity)
	var $equipmentType: cs.TypeEntity
	var $component: 4D.WebFormItem

	$equipmentType := this.query("label = :1";$equipment.type.label).first()

	$component := web Form["home"]
	$component.hide()
	$component := web Form["details"+$equipmentType.label+"s"]
	$component.show()
	

	
	
	