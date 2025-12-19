Class extends DataClass

exposed Function getAllManagers() : cs:C1710.UserSelection
	return This:C1470.query("role = :1"; "manager")
	
	
exposed Function search($name : Text) : cs:C1710.UserSelection
	If ($name#"")
		return This:C1470.query("firstName = :1 or lastName = :1"; "@"+$name+"@")
	Else 
		return This:C1470.all()
	End if 
	
	