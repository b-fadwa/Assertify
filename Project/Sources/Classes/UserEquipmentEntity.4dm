Class extends Entity

exposed function saveUserEquipment($selectedUser : cs.UserEntity; $selectedEquipment : cs.EquipmentEntity)
	var $saved: object
	var $status: boolean := false 

	this.equipment := $selectedEquipment
	this.user := $selectedUser
	$saved := this.save()
	if ($saved.success)
		if ($selectedUser.equipments.length = 1)
			ds.switchDisplay("UserMatrix"; "visibility"; $selectedEquipment.users.length; "noUser")
		end if 
		web Form.setMessage("User added successfully to the selected equipment!")
	else 
		web Form.setError("Error while linking this User to the Equipment")
	end if