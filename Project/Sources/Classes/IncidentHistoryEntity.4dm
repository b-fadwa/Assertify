Class extends Entity

exposed function saveIncident($importanceLevel : text)
	trace
	var $info: object
	var $users: cs.UserSelection
	var $reporter: cs.UserEntity
	var $mail: cs.Mail
	
	$users := ds.User.query("role = :1 "; "Admin")
	
	this.incidentDate := current Date()
	this.importanceLevel := $importanceLevel
	this.resolutionStatus := "Reported"
	this.reporter := ds.User.getCurrentUser()
	if(this.incidentImage # null)
		this.bool := 1
	else
		this.bool := 0
	end if
	$info := this.save()

	if ($info.success)
	web Form.setMessage("Incident reported Successfully!")
	else 
	web Form.setError("Error while reporting the incident!")
	end if 

	for Each ($reporter; $users)
		if($reporter.ID # this.reporter.ID)
		ds.Notification.generateNotification("incident"; $reporter; ds.User.getCurrentUser(); this)
		// $mail = cs.Mail.new()
		// $mail.setReminder($reporter; this) 
		end if
	end for each 
	ds.Notification.generateNotification("incident"; ds.User.getCurrentUser(); ds.User.getCurrentUser(); this)

	

exposed function updateIncident($status : text)
	var $info: object
	var $user: cs.UserEntity
	var $users: cs.UserSelection

	$users := ds.User.query("role = :1 "; "Admin")

	this.resolutionStatus := $status
	$info := this.save()
	if ($info.success)
	web Form.setMessage("Incident Updated Successfully!")
	else 
	web Form.setError("Error while updating the incident")
	end if 

	case of
	:($status = "In progress")
	ds.Notification.generateNotification("incidentInMaintenance"; ds.User.getCurrentUser(); ds.User.getCurrentUser(); this)
	:($status = "Closed")
	ds.Notification.generateNotification("incidentResolved"; ds.User.getCurrentUser(); ds.User.getCurrentUser(); this)
	end case
