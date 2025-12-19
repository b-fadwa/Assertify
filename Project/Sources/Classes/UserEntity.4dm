Class extends Entity

exposed Function setGroupUser($selectedGroup : cs:C1710.GroupEntity)
	var $saved : Object
	var $status : Boolean:=False:C215
	
	This:C1470.group:=$selectedGroup
	$saved:=This:C1470.save()
	If ($saved.success)
		Web Form:C1735.setMessage("User successfully added to the group!")
	Else 
		Web Form:C1735.setError("An error occured")
	End if 
	
exposed Function getIncidentHistoryUser($status : Text; $search : Text; $searchDate : Date) : cs:C1710.IncidentHistorySelection
	var $IncidentHistory : cs:C1710.IncidentHistorySelection
	$IncidentHistory:=This:C1470.incidentHistories.query("resolutionStatus = :1 AND name = :2"; $status; "@"+$search+"@")
	
	return $IncidentHistory
	
	
exposed Function orderNotifications()->$Notifs : cs:C1710.NotificationSelection
	$Notifs:=This:C1470.notifications.orderBy("createdAt desc, creationTime desc")
	
	
exposed Function renderUnreadNotifications()->$Notifs : cs:C1710.NotificationSelection
	$Notifs:=This:C1470.notifications.query("isRead = :1"; False:C215).orderBy("createdAt desc, creationTime desc")
	
	
exposed Function getEquipments() : cs:C1710.EquipmentSelection
	return This:C1470.equipments.equipment
	