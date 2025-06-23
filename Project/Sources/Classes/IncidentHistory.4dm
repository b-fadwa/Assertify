Class extends DataClass

exposed function filterIncidents($statut : text)->$incidents : cs.IncidentHistorySelection
	var $image: boolean
	var $user: cs.UserEntity
	
	$incidents := this.query("resolutionStatus = :1 "; $statut).orderBy("incidentDate desc")
	
exposed function searchByName($name : text; $status : text) : cs.IncidentHistorySelection
	//return this.query("name = :1 and resolutionStatus = :2 and user.ID = :3"; "@"+$name+"@"; $status; ds.User.getCurrentUser().ID)
	return this.query("name = :1 and resolutionStatus = :2"; "@"+$name+"@"; $status)
	
exposed function searchByDate($searchD : date; $status : text) : cs.IncidentHistorySelection
	return this.query("incidentDate = :1 and resolutionStatus = :2"; $searchD; $status)
	
	
exposed function getLast30DaysIncidents($status : text) : cs.IncidentHistorySelection
	return this.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate <= :3"; $status; current Date()-30; current Date())
	
	
exposed function incidentStats($incidentDate : date)->$totals : object
	var $Incidents: cs.IncidentHistorySelection
	
	$totals := {}
	
	$totals.reported := this.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate < :3"; "Reported"; $incidentDate; $incidentDate+30).length
	$totals.inProgress := this.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate < :3"; "Under maintenance"; $incidentDate; $incidentDate+30).length
	$totals.closed := this.query("resolutionStatus = :1 and incidentDate >= :2 and incidentDate < :3"; "Closed"; $incidentDate; $incidentDate+30).length


	