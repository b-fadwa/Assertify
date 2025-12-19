Class extends DataClass

exposed Function pieChart($typeEqu : Text)->$result : Collection
	var $status : cs:C1710.StatusSelection
	$status:=This:C1470.all()
	
	If ($typeEqu#"")
		$result:=$status.query("equipments.type.label = :1"; $typeEqu).extract("status"; "label"; "equipments.length"; "value")
	Else 
		$result:=$status.extract("status"; "label"; "equipments.length"; "value")
	End if 
	