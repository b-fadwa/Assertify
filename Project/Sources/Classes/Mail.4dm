Class constructor()
	
	
	var $transporter : 4D:C1709.SMTPTransporter
	var $serverSettings : Object
	var $server : Object
	
	$serverSettings:=This:C1470.getSMTPSettings()
	$server:=New object:C1471()
	$server.host:=$serverSettings.host
	$server.port:=Num:C11($serverSettings.port)
	$server.user:=$serverSettings.user
	$server.password:=$serverSettings.password
	
	This:C1470.transporter:=4D:C1709.SMTPTransporter.new($server)
	
	
Function getSetting($key : Text) : Text
	var $setting : Object
	$setting:=ds:C1482.Setting.query("key = :1"; $key).first()
	If ($setting=Null:C1517)
		// TODO: wrong 
		// Web Form("Setting not found for key: "+$key)
	End if 
	return $setting.value
	
	
Function getSMTPSettings() : Object
	return New object:C1471(\
		"host"; This:C1470.getSetting("smtp.host"); \
		"user"; This:C1470.getSetting("smtp.user"); \
		"password"; This:C1470.getSetting("smtp.password"); \
		"port"; This:C1470.getSetting("smtp.port")\
		)
	
	
Function getDefaultEmailSettings() : Object
	return New object:C1471(\
		"from"; This:C1470.getSetting("email.from")\
		)
	
	
Function createReminderEmail($user : cs:C1710.UserEntity; $incident : cs:C1710.IncidentHistoryEntity) : Object
	var $email : Object
	var $emailSettings : Object
	var $attachment1; $copy : 4D:C1709.File
	var $htmlBody : Text
	
	$attachment1:=File:C1566("/SOURCES/Shared/assets/logo.png")
	$copy:=$attachment1.copyTo(Folder:C1567("/PACKAGE"); fk overwrite:K87:5)
	
	
	$emailSettings:=This:C1470.getDefaultEmailSettings()
	$email:=New object:C1471()
	$email.subject:="Report Incident : "+$incident.name
	$email.from:=$emailSettings.from
	$email.to:=$user.email
	
	$email.attachments:=New collection:C1472(4D:C1709.MailAttachment)
	$email.attachments[0]:=4D:C1709.MailAttachment.new($attachment1; ""; "Qodly")
	
	
	$htmlBody:="<html>"+\
		"<body>"+\
		"<p><strong>Incident déclaré par:</strong> "+$incident.reporter.firstName+" "+$incident.reporter.lastName+"</p>"+\
		"<p><strong>Date de déclaration:</strong> "+String:C10($incident.incidentDate)+"</p>"+\
		"<p><strong>Type de l'incident:</strong> "+String:C10($incident.incidentType)+"</p>"+\
		"<p><strong>Détails de l'incident:</strong></p>"+\
		"<ul>"+\
		"<li><strong>Nom de l'incident:</strong> "+$incident.name+"</li>"+\
		"<li><strong>Équipement concerné:</strong> "+String:C10($incident.equipment.type.label+" "+$incident.equipment.brand.brandName)+\
		"</li>"
	
	If ($incident.incidentType="software")
		$htmlBody:=$htmlBody+"<li><strong>Logiciel concerné:</strong> "+\
			String:C10($incident.software.name+" "+$incident.software.category)+\
			"</li>"
	End if 
	
	$htmlBody:=$htmlBody+\
		"<li><strong>Description:</strong> "+String:C10($incident.description)+"</li>"+\
		"</ul>"+\
		"<img src = 'cid:Qodly' >"+\
		"</body>"+\
		"</html>"
	
	$email.htmlBody:=$htmlBody
	return $email
	
Function sendReminderEmail($email : Object) : Text
	var $status : Object
	
	$status:=This:C1470.transporter.checkConnection()
	If ($status.success)
		$status:=This:C1470.transporter.send($email)
		return String:C10($status.success)
	Else 
		return String:C10($status.status)+", "+$status.statusText
	End if 
	
	
Function setReminder($user : cs:C1710.UserEntity; $incident : cs:C1710.IncidentHistoryEntity) : Text
	var $email : Object
	$email:=This:C1470.createReminderEmail($user; $incident)
	return This:C1470.sendReminderEmail($email)
	
	
	
	
	