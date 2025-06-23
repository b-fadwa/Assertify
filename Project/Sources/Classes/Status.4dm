Class extends DataClass

exposed function pieChart($typeEqu : text)->$result : collection
	var $status: cs.StatusSelection
	$status := this.all()
	
	if ($typeEqu # "")
		$result := $status.query("equipments.type.label = :1"; $typeEqu).extract("status"; "label"; "equipments.length"; "value")
	else 
		$result := $status.extract("status"; "label"; "equipments.length"; "value")
	end if 
