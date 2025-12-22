Class extends DataClass

exposed Function filterIncidents($statut : Text)->$incidents : cs:C1710.IncidentHistorySelection
	var $image : Boolean
	var $user : cs:C1710.UserEntity
	
	$incidents:=This:C1470.query("resolutionStatus = :1 "; $statut).orderBy("incidentDate desc")
	
exposed Function searchByName($name : Text; $status : Text) : cs:C1710.IncidentHistorySelection
	return This:C1470.query("name = :1 and resolutionStatus = :2"; "@"+$name+"@"; $status)
	
exposed Function searchByDate($searchD : Date; $status : Text) : cs:C1710.IncidentHistorySelection
	return This:C1470.query("incidentDate = :1 and resolutionStatus = :2"; $searchD; $status)
	
	
exposed Function getLast30DaysIncidents($status : Text) : cs:C1710.IncidentHistorySelection
	return This:C1470.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate <= :3"; $status; Current date:C33()-30; Current date:C33())
	
	
exposed Function incidentStats($incidentDate : Date)->$totals : Object
	var $Incidents : cs:C1710.IncidentHistorySelection
	
	$totals:={}
	
	$totals.reported:=This:C1470.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate < :3"; "Reported"; $incidentDate; $incidentDate+30).length
	$totals.inProgress:=This:C1470.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate < :3"; "Under maintenance"; $incidentDate; $incidentDate+30).length
	$totals.closed:=This:C1470.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate < :3"; "Closed"; $incidentDate; $incidentDate+30).length
	
	
	