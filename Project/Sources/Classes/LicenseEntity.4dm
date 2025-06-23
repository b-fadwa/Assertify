Class extends Entity

exposed function saveLicense($selectedSoftware : cs.SoftwareEntity; $selectedDate : date; $selectedLicence : cs.LicenseEntity)
	var $saved: object
	var $status: boolean
	$status := false
	if ($selectedSoftware # null)
		this.software := $selectedSoftware
		$saved := this.save()
	end if 
	if ($selectedDate # null && $selectedLicence # null)
		$selectedLicence.expiryDate := $selectedDate
		$saved := $selectedLicence.save()
	end if 
	if ($saved.success)
		web Form.setMessage("License added successfully!")
	else 
		web Form.setError("An error occurred")
		end if 
