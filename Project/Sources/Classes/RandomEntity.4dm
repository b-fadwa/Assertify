Class extends Entity

exposed function saveRandom($dueDate : date; $randomEntity : cs.RandomEntity) : cs.RandomEntity
	var $saved: object
	$randomEntity.dueDate := $dueDate
	$saved := $randomEntity.save()
	if ($saved.success = true)
		web Form.setMessage("The event is saved successfully!")
	end if 
	
	
