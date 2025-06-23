Class extends Entity

exposed function assignLicenceToSoftware($selectedSoftware : cs.SoftwareEntity; $selectedLicence : cs.LicenseEntity)
    var $saved: object
	if (($selectedLicence.software # null) ||($selectedLicence.software.ID = $selectedSoftware.ID))
		web Form.setError("This license is already linked to a software.")
        return
    end if

    $selectedLicence.software := $selectedSoftware
    $saved := $selectedLicence.save()

    if ($saved.success)
		web Form.setMessage("License successfully added to the software!")
    else 
		web Form.setError("An error occurred while adding the license.")
		end if
