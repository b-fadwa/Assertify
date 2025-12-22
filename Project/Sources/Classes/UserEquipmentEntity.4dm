Class extends Entity

exposed Function saveUserEquipment($selectedUser : cs:C1710.UserEntity; $selectedEquipment : cs:C1710.EquipmentEntity)
	var $saved : Object
	var $status : Boolean:=False:C215
	
	This:C1470.equipment:=$selectedEquipment
	This:C1470.user:=$selectedUser
	$saved:=This:C1470.save()
	If ($saved.success)
		Web Form:C1735.setMessage("User added successfully to the selected equipment!")
	Else 
		Web Form:C1735.setError("Error while linking this User to the Equipment")
	End if 