Class extends DataClass

exposed Function generateNotification($typeNotif : Text; $user1 : cs:C1710.UserEntity; $user2 : cs:C1710.UserEntity; $incident : cs:C1710.IncidentHistoryEntity)
	var $notification : cs:C1710.NotificationEntity
	var $info : Object
	$notification:=This:C1470.new()
	$notification.createdAt:=Current date:C33()
	$notification.creationTime:=Current time:C178()
	$notification.user:=$user1
	$notification.isRead:=False:C215
	
	If ($user1.ID#$user2.ID)
		Case of 
			: (($typeNotif="incident") && ($user2.role="Admin"))
				$notification.type:="incident"
				$notification.content:=$user2.firstName+" "+$user2.lastName+" a signalé l'incident : \""+incident.name+"\""
			: (($typeNotif="incident") && ($user2.role#"Admin"))
				$notification.type:="incident"
				$notification.content:=$user2.firstName+" "+$user2.lastName+" a signalé l'incident : \""+incident.name+"\""
		End case 
	End if 
	
	If ($user2.ID=$user1.ID)
		Case of 
			: (($typeNotif="incident") && ($user2.role="Admin"))
				$notification.type:="incident"
				$notification.content:="Your incident: \""+incident.name+"\" has been reported successfully"
			: (($typeNotif="incident") && ($user2.role#"Admin"))
				$notification.type:="incident"
				$notification.content:="Your incident: \""+incident.name+"\" has been reported successfully"
			: (($typeNotif="incidentInMaintenance") && ($user2.role="Admin"))
				$notification.type:="incidentInMaintenance"
				$notification.content:="Your incident: \""+incident.name+"\" is under maintenance"
			: (($typeNotif="incidentResolved") && ($user2.role="Admin"))
				$notification.type:="incidentResolved"
				$notification.content:="Your incident: \""+incident.name+"\" has been resolved"
			: (($typeNotif="incidentInMaintenance") && ($user2.role#"Admin"))
				$notification.type:="incidentInMaintenance"
				$notification.content:="Your incident: \""+incident.name+"\" is under maintenance"
			: (($typeNotif="incidentResolved") && ($user2.role#"Admin"))
				$notification.type:="incidentResolved"
				$notification.content:="Your incident: \""+incident.name+"\" has been resolved"
		End case 
	End if 
	
	$info:=$notification.save()
	