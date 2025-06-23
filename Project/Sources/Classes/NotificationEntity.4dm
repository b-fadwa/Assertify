Class extends Entity

exposed function readNotification()
	this.isRead := true
	this.save()
	
