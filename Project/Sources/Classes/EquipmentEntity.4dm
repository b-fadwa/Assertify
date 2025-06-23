Class extends Entity

exposed alias softwares equipmentSoftwares.software

exposed function addEquipmentBrand($brand : cs.BrandEntity) : cs.EquipmentEntity
	var $saved: object
	this.brand := $brand
	$saved := this.save()
	if ($saved.success)
		web Form.setMessage("Equipment added successfully")
		web Form["AddEquToBrand"].hide()
	else 
		web Form.setError("An error occurred while linking the equipment to the selected brand")
		end if 

exposed function addEquipmentByType($equipmentType : text)
	var $saved: object
	var $chosenType: cs.TypeEntity

	$chosenType := ds.Type.query("label = :1";$equipmentType).first()

	this.type := $chosenType
	$saved := this.save()

	if($saved.success)
		web Form.setMessage("Equipment added successfully")
	else 
		web Form.setError("An error occurred while creating the equipment")
		end if

exposed function assignIncidentToEqu($selectedEquipment : cs.EquipmentEntity; $selectedIncident : cs.IncidentHistoryEntity)
    var $saved: object
	var $component: 4D.WebFormItem

	$component := web Form["AddIncident"]

	if (($selectedIncident.equipment # null) ||($selectedIncident.equipment.ID = $selectedIncident.ID))
		web Form.setError("This incident is already linked to an equipment.")
		return 
    end if

    $selectedIncident.equipment := $selectedEquipment
    $saved := $selectedIncident.save()

    if ($saved.success)
		web Form.setMessage("Incident successfully added to the equipment!")
		$component.hide()

    else 
		web Form.setError("An error occurred while adding the incident.")
		end if
	