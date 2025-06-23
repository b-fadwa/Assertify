Class constructor()


    	var $transporter: 4D.SMTPTransporter
        var $serverSettings: object
        var $server: object

		$serverSettings := this.getSMTPSettings()
        $server := new Object()
        $server.host := $serverSettings.host
        $server.port := num($serverSettings.port)
        $server.user := $serverSettings.user
        $server.password := $serverSettings.password

        this.transporter := 4D.SMTPTransporter.new($server)
    

    function getSetting($key : text) : text 
        var $setting: object
        $setting := ds.Setting.query("key = :1"; $key).first() 
        if ($setting = null) 
            web Form("Setting not found for key: " + $key)
        end if
        return $setting.value
    

    function getSMTPSettings() : object 
        return new Object(\
            "host"; this.getSetting("smtp.host");\
            "user"; this.getSetting("smtp.user");\
            "password"; this.getSetting("smtp.password");\
            "port"; this.getSetting("smtp.port")\
        )
    

    function getDefaultEmailSettings() : object 
        return new Object(\
            "from"; this.getSetting("email.from")\
        )
    

    function createReminderEmail($user : cs.UserEntity; $incident : cs.IncidentHistoryEntity) : object 
        var $email: object
        var $emailSettings: object
		var $attachment1; $copy: 4D.File
		var $htmlBody: text		

		$attachment1 := file("/SOURCES/Shared/assets/logo.png")
		$copy := $attachment1.copyTo(folder("/PACKAGE");fk overwrite)

	
        $emailSettings := this.getDefaultEmailSettings()
        $email := new Object()
        $email.subject := "Report Incident : " + $incident.name
        $email.from := $emailSettings.from
        $email.to := $user.email

		$email.attachments := new Collection(4D.MailAttachment)
		$email.attachments[0] = 4D.MailAttachment.new($attachment1;"";"Qodly")


		$htmlBody := "<html>" + \
        "<body>" + \
        "<p><strong>Incident déclaré par:</strong> " + $incident.reporter.firstName + " " + $incident.reporter.lastName + "</p>" + \
        "<p><strong>Date de déclaration:</strong> " + String($incident.incidentDate) + "</p>" + \
		"<p><strong>Type de l'incident:</strong> " + String($incident.incidentType) + "</p>" + \
        "<p><strong>Détails de l'incident:</strong></p>" + \
        "<ul>" + \
        "<li><strong>Nom de l'incident:</strong> " + $incident.name + "</li>" + \
        "<li><strong>Équipement concerné:</strong> " + String($incident.equipment.type.label + " " + $incident.equipment.brand.brandName) + \
		"</li>" 
		
		if ($incident.incidentType = "software")
			$htmlBody := $htmlBody + "<li><strong>Logiciel concerné:</strong> " + \
            String($incident.software.name + " " + $incident.software.category) + \
        "</li>"
		end if 

		$htmlBody := $htmlBody + \
        "<li><strong>Description:</strong> " + String($incident.description) + "</li>" + \
        "</ul>" + \
		"<img src = 'cid:Qodly' >"+\
        "</body>" + \
        "</html>" 
		
		$email.htmlBody := $htmlBody
        return $email

    function sendReminderEmail($email : object) : text 
        var $status: object

        $status := this.transporter.checkConnection()
        if ($status.success) 
            $status := this.transporter.send($email)
            return string($status.success)
         else 
            return string($status.status) + ", " + $status.statusText
        end if
    

    function setReminder($user : cs.UserEntity; $incident : cs.IncidentHistoryEntity) : text 
        var $email: object
        $email := this.createReminderEmail($user; $incident)
        return this.sendReminderEmail($email)
    

    

