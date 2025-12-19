Class extends DataClass

exposed Function search($search : Text) : cs:C1710.SoftwareSelection
	If ($search#"")
		return This:C1470.query("name = :1 or category = :1"; "@"+$search+"@")
	Else 
		return This:C1470.all()
	End if 
	