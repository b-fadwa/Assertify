Class extends Entity

exposed function setGroupUser($selectedGroup : cs.GroupEntity)
	var $saved: object
	var $status: boolean := false
	
	this.group := $selectedGroup
	$saved := this.save()
	if ($saved.success)
		web Form.setMessage("User successfully added to the group!")
	else 
		web Form.setError("An error occured")
	end if 
	
	
exposed function getIncidentHistoryUser($status : text; $search : text; $searchDate : date) : cs.IncidentHistorySelection
	var $IncidentHistory: cs.IncidentHistorySelection
	$IncidentHistory := this.incidentHistories.query("resolutionStatus = :1 AND name = :2"; $status; "@"+$search+"@")
	
	return $IncidentHistory
	
	
exposed function orderNotifications()->$Notifs : cs.NotificationSelection
	$Notifs := this.notifications.orderBy("createdAt desc, creationTime desc")
	
	
exposed function renderUnreadNotifications()->$Notifs : cs.NotificationSelection
	$Notifs := this.notifications.query("isRead = :1"; false).orderBy("createdAt desc, creationTime desc")
	
	
exposed function getEquipments() : cs.EquipmentSelection
	return this.equipments.equipment
