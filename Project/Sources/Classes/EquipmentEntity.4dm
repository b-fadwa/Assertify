Class extends Entity

exposed Alias softwares equipmentSoftwares.software

// Links the equipment to the selected brand
exposed Function addEquipmentBrand($brand : cs:C1710.BrandEntity) : cs:C1710.EquipmentEntity
	var $saved : Object
	This:C1470.brand:=$brand
	$saved:=This:C1470.save()
	If ($saved.success)
		Web Form:C1735.setMessage("Equipment added successfully")
		Web Form:C1735["AddEquToBrand"].hide()
	Else 
		Web Form:C1735.setError("An error occurred while linking the equipment to the selected brand")
	End if 
	
	// Assigns a type to the equipment based on the selected label
exposed Function addEquipmentByType($equipmentType : Text)
	var $saved : Object
	var $chosenType : cs:C1710.TypeEntity
	
	$chosenType:=ds:C1482.Type.query("label = :1"; $equipmentType).first()
	
	This:C1470.type:=$chosenType
	$saved:=This:C1470.save()
	
	If ($saved.success)
		Web Form:C1735.setMessage("Equipment added successfully")
	Else 
		Web Form:C1735.setError("An error occurred while creating the equipment")
	End if 
	
	// Links an incident to the selected equipment
exposed Function assignIncidentToEqu($selectedEquipment : cs:C1710.EquipmentEntity; $selectedIncident : cs:C1710.IncidentHistoryEntity)
	var $saved : Object
	var $component : 4D:C1709.WebFormItem
	
	$component:=Web Form:C1735["AddIncident"]
	
	If (($selectedIncident.equipment#Null:C1517) || ($selectedIncident.equipment.ID=$selectedIncident.ID))
		Web Form:C1735.setError("This incident is already linked to an equipment.")
		return 
	End if 
	
	$selectedIncident.equipment:=$selectedEquipment
	$saved:=$selectedIncident.save()
	
	If ($saved.success)
		Web Form:C1735.setMessage("Incident successfully added to the equipment!")
		$component.hide()
		
	Else 
		Web Form:C1735.setError("An error occurred while adding the incident.")
	End if 
	