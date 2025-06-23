Class extends DataClass
	
exposed function $search($search : text; $equipmentType : text) : cs.EquipmentSelection
	if ($search # "")
		if ($equipmentType # "")
			return this.query("type.label = :1 and status.status = :2"; $equipmentType; "@"+$search+"@")
		else 
			return this.query("type.label = :1 or status.status = :1"; "@"+$search+"@")
		end if 
	else 
		if ($equipmentType # "")
			return this.all().query("type.label = :1"; $equipmentType)
		else 
			return this.all()
		end if 
	end if 
	
	
exposed function filterEquipmentByType($equipmentType : text) : cs.EquipmentSelection
	return this.query("type.label = :1 "; $equipmentType)
	
exposed function filterEquipmentByTypeID($id : integer) : cs.EquipmentSelection
	return this.query("type.ID = :1 "; $id)

