Class extends DataClass

exposed Function search($search : Text) : cs:C1710.LicenseSelection
	If ($search#"")
		return This:C1470.query("name = :1 or licenseKey = :1 or status = :1 or serialNumber = :1"; "@"+$search+"@")
	Else 
		return This:C1470.all()
	End if 