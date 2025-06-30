Class extends DataClass

exposed Function getAllManagers() : cs:C1710.UserSelection
	return This:C1470.query("role = :1"; "manager")
	
	