Class extends DataClass

exposed function $search($search : text) : cs.SoftwareSelection
	if ($search # "")
		return this.query("name = :1 or category = :1"; "@"+$search+"@")
	else 
		return this.all()
	end if 
