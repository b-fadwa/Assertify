Class extends Entity

exposed function saveSoftware($selectedSoftware : cs.SoftwareEntity; $selectedEquipment : cs.EquipmentEntity)
	var $saved: object
	var $status: boolean := false

	this.software := $selectedSoftware
	this.equipment := $selectedEquipment
	$saved := this.save()
	if ($saved.success)
		if ($selectedSoftware.equipments.length = 1)
			ds.switchDisplay("equipmentMatrix"; "visibility"; $selectedSoftware.equipments.length; "noEquipment")
		end if 
		web Form.setMessage("Equipment added successfully to the selected software!")
		ds.setCss("eventDialog"; "visibility")
	else 
		web Form.setError("Error while linking this Software Equipment")
	end if 
	
