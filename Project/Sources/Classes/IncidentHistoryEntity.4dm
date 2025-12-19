Class extends Entity

exposed Function saveIncident($importanceLevel : Text)
	var $info : Object
	var $users : cs:C1710.UserSelection
	var $reporter : cs:C1710.UserEntity
	var $mail : cs:C1710.Mail
	var $currentUser : cs:C1710.UserEntity:=ds:C1482.getCurrentUser()
	$users:=ds:C1482.User.query("role = :1 "; "Admin")
	
	This:C1470.incidentDate:=Current date:C33()
	This:C1470.importanceLevel:=$importanceLevel
	This:C1470.resolutionStatus:="Reported"
	This:C1470.reporter:=$currentUser
	If (This:C1470.incidentImage#Null:C1517)
		This:C1470.bool:=1
	Else 
		This:C1470.bool:=0
	End if 
	$info:=This:C1470.save()
	
	If ($info.success)
		Web Form:C1735.setMessage("Incident reported Successfully!")
	Else 
		Web Form:C1735.setError("Error while reporting the incident!")
	End if 
	
	For each ($reporter; $users)
		If ($reporter.ID#This:C1470.reporter.ID)
			ds:C1482.Notification.generateNotification("incident"; $reporter; $currentUser; This:C1470)
		End if 
	End for each 
	ds:C1482.Notification.generateNotification("incident"; $currentUser; $currentUser; This:C1470)
	
	
	
exposed Function updateIncident($status : Text)
	var $info : Object
	var $user : cs:C1710.UserEntity
	var $users : cs:C1710.UserSelection
	var $currentUser : cs:C1710.UserEntity:=ds:C1482.getCurrentUser()
	$users:=ds:C1482.User.query("role = :1 "; "Admin")
	
	This:C1470.resolutionStatus:=$status
	$info:=This:C1470.save()
	If ($info.success)
		Web Form:C1735.setMessage("Incident Updated Successfully!")
	Else 
		Web Form:C1735.setError("Error while updating the incident")
	End if 
	
	Case of 
		: ($status="In progress")
			ds:C1482.Notification.generateNotification("incidentInMaintenance"; $currentUser; $currentUser; This:C1470)
		: ($status="Closed")
			ds:C1482.Notification.generateNotification("incidentResolved"; $currentUser; $currentUser; This:C1470)
	End case 
	