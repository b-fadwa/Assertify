Class extends Entity

exposed Function saveSoftware($selectedSoftware : cs:C1710.SoftwareEntity; $selectedEquipment : cs:C1710.EquipmentEntity)
	var $saved : Object
	var $status : Boolean:=False:C215
	
	This:C1470.software:=$selectedSoftware
	This:C1470.equipment:=$selectedEquipment
	$saved:=This:C1470.save()
	If ($saved.success)
		Web Form:C1735.setMessage("Equipment added successfully to the selected software!")
		ds:C1482.setCss("eventDialog"; "visibility")
	Else 
		Web Form:C1735.setError("Error while linking this Software Equipment")
	End if 
	
	