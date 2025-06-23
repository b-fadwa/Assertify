Class extends DataClass

exposed function generateNotification($typeNotif : text; $user1 : cs.UserEntity; $user2 : cs.UserEntity; $incident : cs.IncidentHistoryEntity)
	var $notification: cs.NotificationEntity
	var $info: object
	$notification := this.new()
	$notification.createdAt := current Date()
	$notification.creationTime := current Time()
	$notification.user := $user1
	$notification.isRead := false
	
	if($user1.ID # $user2.ID)
	case of 
		: ($typeNotif = "incident"  && ($user2.role = "Admin"))
			$notification.type := "incident"
			$notification.content := $user2.firstName+" "+$user2.lastName+" a signalé l'incident : \""+incident.name+"\""
		: ($typeNotif = "incident"  && ($user2.role # "Admin"))
			$notification.type := "incident"
			$notification.content := $user2.firstName+" "+$user2.lastName+" a signalé l'incident : \""+incident.name+"\""
	end case 
	end if

	if ($user2.ID = $user1.ID)
		case of
			: ($typeNotif = "incident" && ($user2.role = "Admin"))
				$notification.type := "incident"
				$notification.content := "Your incident: \"" + incident.name + "\" has been reported successfully"
			: ($typeNotif = "incident" && ($user2.role # "Admin"))
				$notification.type := "incident"
				$notification.content := "Your incident: \"" + incident.name + "\" has been reported successfully"
			: ($typeNotif = "incidentInMaintenance" && ($user2.role = "Admin"))
				$notification.type := "incidentInMaintenance"
				$notification.content := "Your incident: \"" + incident.name + "\" is under maintenance"
			: ($typeNotif = "incidentResolved" && ($user2.role = "Admin"))
				$notification.type := "incidentResolved"
				$notification.content := "Your incident: \"" + incident.name + "\" has been resolved"
			: ($typeNotif = "incidentInMaintenance" && ($user2.role # "Admin"))
				$notification.type := "incidentInMaintenance"
				$notification.content := "Your incident: \"" + incident.name + "\" is under maintenance"
			: ($typeNotif = "incidentResolved" && ($user2.role # "Admin"))
				$notification.type := "incidentResolved"
				$notification.content := "Your incident: \"" + incident.name + "\" has been resolved"
		end case	
	end if

	$info := $notification.save()
	