Class extends DataClass
	
exposed function $search($search : text) : cs.LicenseSelection
	if ($search # "")
		return this.query("name = :1 or licenseKey = :1 or status = :1 or serialNumber = :1"; "@"+$search+"@")
	else 
		return this.all()
	end if