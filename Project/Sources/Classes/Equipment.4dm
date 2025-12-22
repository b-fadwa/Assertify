Class extends DataClass


//filtering functions: 

exposed Function search($search : Text; $equipmentType : Text) : cs:C1710.EquipmentSelection
	If ($search#"")
		If ($equipmentType#"")
			return This:C1470.query("type.label = :1 and status.status = :2"; $equipmentType; "@"+$search+"@")
		Else 
			return This:C1470.query("type.label = :1 or status.status = :1"; "@"+$search+"@")
		End if 
	Else 
		If ($equipmentType#"")
			return This:C1470.all().query("type.label = :1"; $equipmentType)
		Else 
			return This:C1470.all()
		End if 
	End if 
	
	
exposed Function filterEquipmentByType($equipmentType : Text) : cs:C1710.EquipmentSelection
	return This:C1470.query("type.label = :1 "; $equipmentType)
	
exposed Function filterEquipmentByTypeID($id : Integer) : cs:C1710.EquipmentSelection
	return This:C1470.query("type.ID = :1 "; $id)
	
	