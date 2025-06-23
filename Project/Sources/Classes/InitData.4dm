Class constructor
		
	
function dropData()
	var $trash: object
	$trash := ds.User.all().drop()
	$trash := ds.Group.all().drop()
	$trash := ds.Software.all().drop()
	 $trash := ds.License.all().drop()
	$trash := ds.Equipment.all().drop()
	$trash := ds.IncidentHistory.all().drop()
	$trash := ds.UserEquipment.all().drop()
	$trash := ds.EquipmentSoftware.all().drop()
	$trash := ds.Brand.all().drop()
	$trash := ds.Type.all().drop()
	$trash := ds.Category.all().drop()
	$trash := ds.Notification.all().drop()
	$trash := ds.Status.all().drop()
	$trash := ds.Setting.all().drop()
	
function createData()
		this.generateBrand()
		this.generateType()
		this.generateCategory()
		this.generateStatus()
		this.generateSoftware()
		this.generateEquipments()
		this.generateEquipmentSoftware()
		this.generateUser()
		this.generateUserEquipment()
		this.generateGroup()
		this.generateLicense()
		this.generateIncidentHistory()
		this.generateNotification()

	//$users
function generateUser()
	
	var $userClass: cs.Qodly.Users
	
	var $cloudUsers: collection
	var $oneUser: object
	
	var $user: cs.UserEntity
	
	$userClass := cs.Qodly.Users.me
	$cloudUsers := $userClass.allUsers()

	var $departments: collection
	$departments := ["HR"; "PS"; "QA"; "Marketing"; "Qodly Customer Service"; "Support"; "DevOps"]

	var $jobTitles: collection
	$jobTitles := ["Software Engineer"; "Systems Administrator"; "Network Engineer"; "IT Support Specialist"; "Database Administrator"; "Project Manager"; "Quality Assurance Analyst"; "Business Analyst"; "Security Analyst"; "UX/UI Designer"; "Product Manager"; "Data Scientist"; "Marketing Manager"; "HR Manager"; "Financial Analyst"; "Customer Service Representative"; "Technical Writer"; "Full Stack Developer"; "DevOps Engineer"; "Application Support Analyst"]

	var $info: object
	var $request: 4D.HTTPRequest

	for Each ($oneUser; $cloudUsers)
		$user := ds.User.new()
		$user.awsID := $oneUser.username
		$user.firstName := $oneUser.firstname
		$user.lastName := $oneUser.lastname
		$user.email := $oneUser.email
		$user.role := $oneUser.role
		$user.password := "password"
		$user.address := {first: "N150"; second: "Street K"; state: "State"; city: "Rabat"; zipCode: "10113"}
		$user.moreInfo := {phone: "+212600000000"}
		$user.department := $departments.at(random%($departments.length))
		$user.jobTitle := $jobTitles.at((random%($jobTitles.length)))
		$info := $user.save()
	end for each 

	// Groups
function generateGroup()
	var $info: object
	var $item: text
	var $group: cs.GroupEntity
	var $supervisor: cs.UserEntity
	var $managers: cs.UserSelection

	var $users: cs.UserSelection
	$users := ds.User.all()
	
	var $groups: collection
	$groups := ["Group 1"; "Group 2"; "Group 3"; "Group 4"]
	
	for Each ($item; $groups)
		$group := ds.Group.new()
		$group.name := $item
		// Affect a random manager to be the $supervisor
		$managers := $users.query("role = :1"; "Manager")
		$group.manager := $managers.at(random%($managers.length))
		$info := $group.save()
	end for each 
	
function generateType()
	var $types: collection
	var $typeEntity: cs.TypeEntity
	var $item: text

	$types := ["Computer"; "Printer"; "Mouse"; "Monitor"; "PDU"; "Phone"; "Networking Equipment"]

	for Each ($item; $types)
		$typeEntity := ds.Type.new()
		$typeEntity.label := $item
		$typeEntity.save()
	end for each
	

function generateStatus()
	var $statuses: collection
	var $status: cs.StatusEntity
	var $item: text

	$statuses := ["In service"; "Out of service"; "Available"]

	for Each ($item; $statuses)
		$status := ds.Status.new()
		$status.status := $item
		$status.save()
	end for each

function generateCategory()
	var $categories: collection
	var $category: cs.CategoryEntity
	var $item: text

	$categories := ["OEM"; "Key"; "Request"]

	for Each ($item; $categories)
		$category := ds.Category.new()
		$category.categoryName := $item
		$category.save()
	end for each

function generateBrand()
	var $brands: collection
	var $brand: cs.BrandEntity
	var $item: text

	$brands := ["HP"; "Dell"; "Lenovo"; "Apple"; "Microsoft"; "Samsung"; "Acer"; "Asus"; "Sony"; "LG"]

	for Each ($item; $brands)
		$brand := ds.Brand.new()
		$brand.brandName := $item
		$brand.save()
	end for each

	// Incident History
function generateIncidentHistory()
	var $incidents: collection
	var $item: object
	var $info: object
	var $incident: cs.IncidentHistoryEntity
	
	$incidents:=[]
	$incidents.push(\
    newobject("name"; "Hardware Failure"; "incidentDate"; date("01/01/2024"); "description"; "The equipment is malfunctioning due to hardware failure."; "incidentType"; "hardware");\
    newobject("name"; "Overheating Issue"; "incidentDate"; date("01/02/2024"); "description"; "The device is overheating and causing performance issues."; "incidentType"; "hardware");\
    newobject("name"; "Power Supply Failure"; "incidentDate"; date("01/03/2024"); "description"; "Power supply is not working properly, causing system shutdowns."; "incidentType"; "hardware");\
    newobject("name"; "Hard Drive Failure"; "incidentDate"; date("01/04/2024"); "description"; "The hard drive is failing and needs replacement."; "incidentType"; "hardware");\
    newobject("name"; "Memory Module Malfunction"; "incidentDate"; date("01/05/2024"); "description"; "The memory module is malfunctioning, causing system instability."; "incidentType"; "hardware");\
    newobject("name"; "Device Not Booting"; "incidentDate"; date("01/06/2024"); "description"; "The device is not booting up properly, possibly due to hardware failure."; "incidentType"; "hardware");\
    newobject("name"; "Battery Not Charging"; "incidentDate"; date("01/07/2024"); "description"; "The battery is not charging despite being connected to power."; "incidentType"; "hardware");\
    newobject("name"; "Screen Flickering"; "incidentDate"; date("01/08/2024"); "description"; "The screen is flickering intermittently, affecting visibility."; "incidentType"; "hardware");\
    newobject("name"; "Keyboard or Mouse Not Working"; "incidentDate"; date("01/09/2024"); "description"; "The keyboard or mouse is unresponsive or malfunctioning."; "incidentType"; "hardware");\
    newobject("name"; "Printer Not Responding"; "incidentDate"; date("01/10/2024"); "description"; "The printer is not responding to print commands."; "incidentType"; "hardware");\
    newobject("name"; "Peripheral Connection Issue"; "incidentDate"; date("01/11/2024"); "description"; "Issues with connecting peripherals to the device."; "incidentType"; "hardware");\
    newobject("name"; "Firmware Update Failure"; "incidentDate"; date("01/12/2024"); "description"; "The firmware update failed, and the system is stuck."; "incidentType"; "hardware");\
    newobject("name"; "Cooling System Failure"; "incidentDate"; date("01/13/2024"); "description"; "The cooling system is malfunctioning, causing the device to overheat."; "incidentType"; "hardware");\
    newobject("name"; "Damaged Port"; "incidentDate"; date("01/14/2024"); "description"; "A port on the device is damaged and not functional."; "incidentType"; "hardware");\
    newobject("name"; "Software Crash"; "incidentDate"; date("01/15/2024"); "description"; "The software crashed unexpectedly during use."; "incidentType"; "software");\
    newobject("name"; "Application Not Responding"; "incidentDate"; date("01/16/2024"); "description"; "The application is unresponsive and not functioning as expected."; "incidentType"; "software");\
    newobject("name"; "Slow Performance"; "incidentDate"; date("01/17/2024"); "description"; "The system or application is performing slower than usual."; "incidentType"; "software");\
    newobject("name"; "Unexpected System Reboot"; "incidentDate"; date("01/18/2024"); "description"; "The system rebooted unexpectedly without user intervention."; "incidentType"; "software");\
    newobject("name"; "Incompatibility with OS Update"; "incidentDate"; date("01/19/2024"); "description"; "The system or software is not compatible with the latest OS update."; "incidentType"; "software");\
    newobject("name"; "Corrupt System Files"; "incidentDate"; date("01/20/2024"); "description"; "System files are corrupt and need to be repaired."; "incidentType"; "software");\
    newobject("name"; "Installation Failure"; "incidentDate"; date("01/21/2024"); "description"; "The installation of software or drivers failed."; "incidentType"; "software");\
    newobject("name"; "Unresponsive UI"; "incidentDate"; date("01/22/2024"); "description"; "The user interface is unresponsive and not interacting properly."; "incidentType"; "software");\
    newobject("name"; "Data Synchronization Issue"; "incidentDate"; date("01/23/2024"); "description"; "There is an issue with data synchronization between devices."; "incidentType"; "software");\
    newobject("name"; "Configuration Error"; "incidentDate"; date("01/24/2024"); "description"; "Incorrect configuration causing the system to malfunction."; "incidentType"; "software");\
    newobject("name"; "Missing or Corrupt DLL Files"; "incidentDate"; date("01/25/2024"); "description"; "The necessary DLL files are missing or corrupted."; "incidentType"; "software");\
    newobject("name"; "Driver Compatibility Issue"; "incidentDate"; date("01/26/2024"); "description"; "Driver incompatibility causing system instability."; "incidentType"; "software");\
    newobject("name"; "Authentication Failure"; "incidentDate"; date("01/27/2024"); "description"; "User authentication failed, unable to log in."; "incidentType"; "software");\
    newobject("name"; "License Expired"; "incidentDate"; date("01/28/2024"); "description"; "The software license has expired and needs to be renewed."; "incidentType"; "software");\
    newobject("name"; "License Not Recognized"; "incidentDate"; date("01/29/2024"); "description"; "The license is not recognized, possibly invalid or corrupted."; "incidentType"; "software");\
    newobject("name"; "Activation Key Invalid"; "incidentDate"; date("01/30/2024"); "description"; "The activation key provided is invalid or expired."; "incidentType"; "software");\
    newobject("name"; "License Transfer Failure"; "incidentDate"; date("01/31/2024"); "description"; "License transfer failed due to technical issues."; "incidentType"; "software");\
    newobject("name"; "Exceeded Allowed Activations"; "incidentDate"; date("02/01/2024"); "description"; "The maximum integer of allowed activations has been exceeded."; "incidentType"; "software");\
    newobject("name"; "Subscription Not Renewed"; "incidentDate"; date("02/02/2024"); "description"; "The subscription has not been renewed on time."; "incidentType"; "software");\
    newobject("name"; "License Downgrade Error"; "incidentDate"; date("02/03/2024"); "description"; "There was an error when attempting to downgrade the license."; "incidentType"; "software");\
    newobject("name"; "Unauthorized License Usage"; "incidentDate"; date("02/04/2024"); "description"; "The license is being used without authorization."; "incidentType"; "software")\
)

	var $status: collection
	$status := ["Reported"; "In progress"; "Closed"]

	var $importanceLevel: collection
	$importanceLevel := ["Moderate"; "Minor"; "Critical"]

	var $equipments: cs.EquipmentSelection
	$equipments := ds.Equipment.all()

	var $softwares: cs.SoftwareSelection
	$softwares := ds.Software.all()

	var $users: cs.UserSelection
	$users := ds.User.all()
	
	for Each ($item; $incidents)
		$incident := ds.IncidentHistory.new()
		$incident.name := $item.name
		$incident.incidentDate := $item.incidentDate
		$incident.description := $item.description
		$incident.resolutionStatus := $status.at(random%($status.length))
		$incident.incidentType := $item.incidentType
		if($item.incidentType = "software")
		$incident.software := $softwares.at(random%($softwares.length))
		else
		$incident.equipment := $equipments.at(random%($equipments.length))
		end if
		$incident.importanceLevel := $importanceLevel.at(random%($importanceLevel.length))
		$incident.reporter := $users.at(random%($users.length))
		$info := $incident.save()
	end for each 
	
	//Notifs
function generateNotification()
	var $item: object
	var $notifications: collection
	var $notification: cs.NotificationEntity
	$notifications:=[]
	$notifications.push(\
    new Object("type"; "incident inProgress"; "content"; "Incident investigation is currently in progress."; "isRead"; false; "createdAt"; date("03/05/2024"); "creationTime"; time("08:30:00"));\
    new Object("type"; "incident closed"; "content"; "Incident has been resolved and closed."; "isRead"; true; "createdAt"; date("04/12/2024"); "creationTime"; time("15:45:00"));\
    new Object("type"; "incident reported"; "content"; "New incident reported in the system."; "isRead"; false; "createdAt"; date("05/20/2024"); "creationTime"; time("09:00:00"));\
    new Object("type"; "incident inProgress"; "content"; "Incident under investigation. Updates will follow."; "isRead"; false; "createdAt"; date("06/15/2024"); "creationTime"; time("10:15:00"));\
    new Object("type"; "incident closed"; "content"; "The issue reported earlier has been successfully resolved."; "isRead"; true; "createdAt"; date("07/05/2024"); "creationTime"; time("16:30:00"));\
    new Object("type"; "incident reported"; "content"; "A new incident has been logged into the system."; "isRead"; false; "createdAt"; date("08/10/2024"); "creationTime"; time("12:00:00"));\
    new Object("type"; "incident inProgress"; "content"; "Investigation in progress. Estimated resolution time is 2 hours."; "isRead"; false; "createdAt"; date("09/20/2024"); "creationTime"; time("14:45:00"));\
    new Object("type"; "incident closed"; "content"; "Incident closed. The issue has been successfully resolved."; "isRead"; true; "createdAt"; date("10/25/2024"); "creationTime"; time("11:30:00"));\
    new Object("type"; "incident reported"; "content"; "An incident has been reported regarding a system issue."; "isRead"; false; "createdAt"; date("11/10/2024"); "creationTime"; time("17:15:00"));\
    new Object("type"; "incident inProgress"; "content"; "Investigation of the reported incident is underway."; "isRead"; false; "createdAt"; date("12/05/2024"); "creationTime"; time("08:00:00"));\
    new Object("type"; "incident closed"; "content"; "Incident resolved. All issues are cleared."; "isRead"; true; "createdAt"; date("01/10/2025"); "creationTime"; time("13:30:00"));\
    new Object("type"; "incident reported"; "content"; "New incident reported. Awaiting review."; "isRead"; false; "createdAt"; date("02/25/2025"); "creationTime"; time("10:00:00"));\
    new Object("type"; "incident inProgress"; "content"; "Investigation ongoing. No updates yet."; "isRead"; false; "createdAt"; date("03/15/2025"); "creationTime"; time("11:45:00"));\
    new Object("type"; "incident closed"; "content"; "Incident closed after thorough investigation."; "isRead"; true; "createdAt"; date("04/05/2024"); "creationTime"; time("12:30:00"));\
    new Object("type"; "incident reported"; "content"; "A new incident has been reported."; "isRead"; false; "createdAt"; date("05/20/2024"); "creationTime"; time("14:00:00"));\
    new Object("type"; "incident inProgress"; "content"; "Incident being addressed by the technical team."; "isRead"; false; "createdAt"; date("06/15/2024"); "creationTime"; time("15:00:00"));\
    new Object("type"; "incident closed"; "content"; "Incident resolved. Issue has been fixed."; "isRead"; true; "createdAt"; date("07/10/2024"); "creationTime"; time("10:15:00"));\
    new Object("type"; "incident reported"; "content"; "Incident reported regarding unexpected downtime."; "isRead"; false; "createdAt"; date("08/25/2024"); "creationTime"; time("16:45:00"));\
    new Object("type"; "incident inProgress"; "content"; "Issue under investigation by IT team."; "isRead"; false; "createdAt"; date("09/01/2024"); "creationTime"; time("09:30:00"));\
    new Object("type"; "incident closed"; "content"; "The issue was resolved and incident closed."; "isRead"; true; "createdAt"; date("10/20/2024"); "creationTime"; time("12:45:00"));\
    new Object("type"; "incident reported"; "content"; "Incident related to hardware failure reported."; "isRead"; false; "createdAt"; date("11/15/2024"); "creationTime"; time("13:30:00"));\
    new Object("type"; "incident inProgress"; "content"; "Investigation ongoing. No resolution yet."; "isRead"; false; "createdAt"; date("12/10/2024"); "creationTime"; time("08:45:00"));\
    new Object("type"; "incident closed"; "content"; "Incident closed with successful resolution."; "isRead"; true; "createdAt"; date("01/05/2035"); "creationTime"; time("11:00:00"));\
    new Object("type"; "incident reported"; "content"; "Incident reported regarding network outage."; "isRead"; false; "createdAt"; date("02/10/2035"); "creationTime"; time("09:15:00"));\
    new Object("type"; "incident inProgress"; "content"; "Investigation underway. Network team handling."; "isRead"; false; "createdAt"; date("03/15/2035"); "creationTime"; time("10:30:00"))\
)

	var $users: cs.UserSelection
	$users := ds.User.all()


	for Each ($item; $notifications)
		$notification := ds.Notification.new()
		$notification.type := $item.type
		$notification.content := $item.content
		$notification.isRead := $item.isRead
		$notification.createdAt := $item.createdAt
		$notification.creationTime := $item.creationTime
		$notification.user := $users.at(random%($users.length))
		$notification.save()
	end for each


	//$licenses
function generateLicense()
	var $info: object
	var $item: object

	var $licenses: collection
	var $license: cs.LicenseEntity

	$licenses:=[]
	$licenses.push(\
    new Object("name"; "Windows 10 Pro"; "purchaseDate"; date("01/15/2024"); "category"; "OEM"; "expiryDate"; date("01/15/2025"); "licenseKey"; "W10P-1234-5678-ABCD"; "serialNumber"; "SN-W10P-12345678");\
    new Object("name"; "Office 365"; "purchaseDate"; date("02/20/2024"); "category"; "Subscription"; "expiryDate"; date("02/20/2025"); "licenseKey"; "O365-2345-6789-BCDE"; "serialNumber"; "SN-O365-23456789");\
    new Object("name"; "Adobe Photoshop"; "purchaseDate"; date("03/10/2024"); "category"; "Perpetual"; "expiryDate"; date("03/10/2026"); "licenseKey"; "ADPS-3456-7890-CDEF"; "serialNumber"; "SN-ADPS-34567890");\
    new Object("name"; "Autodesk AutoCAD"; "purchaseDate"; date("04/25/2024"); "category"; "Subscription"; "expiryDate"; date("04/25/2025"); "licenseKey"; "AUTCAD-4567-8901-DEFG"; "serialNumber"; "SN-AUTCAD-45678901");\
    new Object("name"; "VMware Workstation Pro"; "purchaseDate"; date("05/05/2024"); "category"; "Perpetual"; "expiryDate"; date("05/05/2026"); "licenseKey"; "VMWP-5678-9012-EFGH"; "serialNumber"; "SN-VMWP-56789012");\
    new Object("name"; "Norton Antivirus"; "purchaseDate"; date("06/12/2024"); "category"; "Subscription"; "expiryDate"; date("06/12/2025"); "licenseKey"; "NORTON-6789-0123-FGHI"; "serialNumber"; "SN-NORTON-67890123");\
    new Object("name"; "Slack"; "purchaseDate"; date("07/01/2024"); "category"; "Subscription"; "expiryDate"; date("07/01/2025"); "licenseKey"; "SLACK-7890-1234-GHIJ"; "serialNumber"; "SN-SLACK-78901234");\
    new Object("name"; "QuickBooks"; "purchaseDate"; date("08/15/2024"); "category"; "Subscription"; "expiryDate"; date("08/15/2025"); "licenseKey"; "QB-8901-2345-HIJK"; "serialNumber"; "SN-QB-89012345");\
    new Object("name"; "Microsoft Project"; "purchaseDate"; date("09/10/2024"); "category"; "Perpetual"; "expiryDate"; date("09/10/2026"); "licenseKey"; "MSP-9012-3456-IJKL"; "serialNumber"; "SN-MSP-90123456");\
    new Object("name"; "Zoom"; "purchaseDate"; date("10/05/2024"); "category"; "Subscription"; "expiryDate"; date("10/05/2025"); "licenseKey"; "ZOOM-0123-4567-JKLM"; "serialNumber"; "SN-ZOOM-01234567");\
    new Object("name"; "GitHub Enterprise"; "purchaseDate"; date("11/20/2024"); "category"; "Subscription"; "expiryDate"; date("11/20/2025"); "licenseKey"; "GHE-1234-5678-KLMN"; "serialNumber"; "SN-GHE-12345678");\
    new Object("name"; "Adobe Illustrator"; "purchaseDate"; date("12/15/2024"); "category"; "Perpetual"; "expiryDate"; date("12/15/2026"); "licenseKey"; "ADIL-2345-6789-LMNO"; "serialNumber"; "SN-ADIL-23456789")\
)

	var $status: collection
	$status := ["Suspended"; "Unused"; "Expired"; "Revoked"; "Active"]

	var $categories: cs.CategorySelection
	var $category: cs.CategoryEntity
	$categories := ds.Category.all()

	var $users: cs.UserSelection
	var $user: cs.UserEntity
	$users := ds.User.all()

	var $softwares: cs.SoftwareSelection
	$softwares := ds.Software.all()
	
	for Each ($item; $licenses)
		$license := ds.License.new()
		$license.name := $item.name
		$license.licenseKey := $item.licenseKey
		$license.status := $status.at(random%($status.length))
		$license.serialNumber := $item.serialNumber
		$license.software := $softwares.at(random%($softwares.length))
		$license.user := $users.at(random%($users.length))
		$license.category := $categories.at(random%($categories.length))
		$license.purchaseDate := $item.purchaseDate
		$license.expiryDate := $item.expiryDate
		$info := $license.save()
	end for each 
	
	
	//$software
function generateSoftware()
	var $info: object
	var $item: object


	var $brands: cs.BrandSelection
	var $brand: cs.BrandEntity
	$brands := ds.Brand.all()
	
	var $softwares: collection
	var $software: cs.SoftwareEntity
	$softwares:=[]
	$softwares.push(\
    new Object("name"; "Windows 10 Pro"; "category"; "Operating System");\
    new Object("name"; "Office 365"; "category"; "Productivity Suite");\
    new Object("name"; "Adobe Photoshop"; "category"; "Graphics Design");\
    new Object("name"; "Autodesk AutoCAD"; "category"; "CAD Software");\
    new Object("name"; "VMware Workstation Pro"; "category"; "Virtualization");\
    new Object("name"; "Norton Antivirus"; "category"; "Security");\
    new Object("name"; "Slack"; "category"; "Communication");\
    new Object("name"; "QuickBooks"; "category"; "Accounting");\
    new Object("name"; "Microsoft Project"; "category"; "Project Management");\
    new Object("name"; "Zoom"; "category"; "Communication");\
    new Object("name"; "GitHub Enterprise"; "category"; "Version Control");\
    new Object("name"; "Adobe Illustrator"; "category"; "Graphics Design");\
    new Object("name"; "Visual Studio"; "category"; "Development");\
    new Object("name"; "MySQL Workbench"; "category"; "Database Management");\
    new Object("name"; "Docker"; "category"; "Containerization");\
    new Object("name"; "Node.js"; "category"; "Development");\
    new Object("name"; "Spotify"; "category"; "Entertainment");\
    new Object("name"; "Trello"; "category"; "Project Management");\
    new Object("name"; "Skype"; "category"; "Communication");\
    new Object("name"; "Sublime Text"; "category"; "Development");\
    new Object("name"; "Adobe Premiere Pro"; "category"; "Video Editing");\
    new Object("name"; "IntelliJ IDEA"; "category"; "Development");\
    new Object("name"; "Sketch"; "category"; "Graphics Design");\
    new Object("name"; "Notepad++"; "category"; "Development");\
    new Object("name"; "Microsoft Edge"; "category"; "Web Browser")\
)

	for Each ($item; $softwares)
		$software := ds.Software.new()
		$software.name := $item.name
		$software.category := $item.category
		$software.brand := $brands.at(random%($brands.length))
		$info := $software.save()
	end for each 
	
	
	//$equipment
function generateEquipments()
	var $info: object
	var $item: object

	var $Brands: cs.BrandSelection
	$Brands := ds.Brand.all()

	var $Statuses: cs.StatusSelection
	$Statuses := ds.Status.all()

	var $Types: cs.TypeSelection
	$Types := ds.Type.all()

	var $equipments: collection
	var $equipment: cs.EquipmentEntity
	$equipments:=[]
	$equipments.push(\
    new Object("serialNumber"; "SN12407"; "purchaseDate"; date("03/05/2028"); "comment"; "Projector for training sessions."; "finalWarrantyDate"; date("03/05/2029"); "inventoryNumber"; "INV185"; "model"; "EPX-2000");\
    new Object("serialNumber"; "SN12408"; "purchaseDate"; date("04/12/2028"); "comment"; "Tablet for note-taking."; "finalWarrantyDate"; date("04/12/2029"); "inventoryNumber"; "INV186"; "model"; "T10-Tab");\
    new Object("serialNumber"; "SN12409"; "purchaseDate"; date("05/20/2028"); "comment"; "Laser pointer for presentations."; "finalWarrantyDate"; date("05/20/2029"); "inventoryNumber"; "INV187"; "model"; "LP-500");\
    new Object("serialNumber"; "SN12410"; "purchaseDate"; date("06/15/2028"); "comment"; "KVM switch for multiple server management."; "finalWarrantyDate"; date("06/15/2029"); "inventoryNumber"; "INV188"; "model"; "KVM-4X");\
    new Object("serialNumber"; "SN12411"; "purchaseDate"; date("07/05/2028"); "comment"; "External SSD for data backup."; "finalWarrantyDate"; date("07/05/2029"); "inventoryNumber"; "INV189"; "model"; "SSD-5000");\
    new Object("serialNumber"; "SN12412"; "purchaseDate"; date("08/10/2028"); "comment"; "Desktop monitor for workstation."; "finalWarrantyDate"; date("08/10/2029"); "inventoryNumber"; "INV190"; "model"; "DS-2456");\
    new Object("serialNumber"; "SN12413"; "purchaseDate"; date("09/20/2028"); "comment"; "Portable power bank for mobile devices."; "finalWarrantyDate"; date("09/20/2029"); "inventoryNumber"; "INV191"; "model"; "PB-200");\
    new Object("serialNumber"; "SN12414"; "purchaseDate"; date("10/25/2028"); "comment"; "USB-C adapter for compatibility."; "finalWarrantyDate"; date("10/25/2029"); "inventoryNumber"; "INV192"; "model"; "USB-C-ADP");\
    new Object("serialNumber"; "SN12415"; "purchaseDate"; date("11/10/2028"); "comment"; "3D printer for prototyping."; "finalWarrantyDate"; date("11/10/2029"); "inventoryNumber"; "INV193"; "model"; "3D-PRO-100");\
    new Object("serialNumber"; "SN12416"; "purchaseDate"; date("12/05/2028"); "comment"; "Network switch for server room."; "finalWarrantyDate"; date("12/05/2029"); "inventoryNumber"; "INV194"; "model"; "NS-800");\
    new Object("serialNumber"; "SN12417"; "purchaseDate"; date("01/10/2029"); "comment"; "Bluetooth keyboard for ergonomic use."; "finalWarrantyDate"; date("01/10/2030"); "inventoryNumber"; "INV195"; "model"; "BT-KB200");\
    new Object("serialNumber"; "SN12418"; "purchaseDate"; date("02/25/2029"); "comment"; "Backup generator for uninterrupted power supply."; "finalWarrantyDate"; date("02/25/2030"); "inventoryNumber"; "INV196"; "model"; "GEN-PRO200");\
    new Object("serialNumber"; "SN12419"; "purchaseDate"; date("03/15/2029"); "comment"; "Smartphone for field agents."; "finalWarrantyDate"; date("03/15/2030"); "inventoryNumber"; "INV197"; "model"; "SP-400X");\
    new Object("serialNumber"; "SN12420"; "purchaseDate"; date("04/05/2029"); "comment"; "Wireless headset for call center."; "finalWarrantyDate"; date("04/05/2030"); "inventoryNumber"; "INV198"; "model"; "WH-360");\
    new Object("serialNumber"; "SN12421"; "purchaseDate"; date("05/20/2029"); "comment"; "Document scanner for paperless office."; "finalWarrantyDate"; date("05/20/2030"); "inventoryNumber"; "INV199"; "model"; "DS-2400");\
    new Object("serialNumber"; "SN12422"; "purchaseDate"; date("06/15/2029"); "comment"; "Webcam for video conferencing."; "finalWarrantyDate"; date("06/15/2030"); "inventoryNumber"; "INV200"; "model"; "WEB-CAM-1080");\
    new Object("serialNumber"; "SN12423"; "purchaseDate"; date("07/10/2029"); "comment"; "Thermal printer for barcode labels."; "finalWarrantyDate"; date("07/10/2030"); "inventoryNumber"; "INV201"; "model"; "TPR-500");\
    new Object("serialNumber"; "SN12424"; "purchaseDate"; date("08/25/2029"); "comment"; "Barcode scanner for inventory management."; "finalWarrantyDate"; date("08/25/2030"); "inventoryNumber"; "INV202"; "model"; "BCS-1000");\
    new Object("serialNumber"; "SN12425"; "purchaseDate"; date("09/01/2029"); "comment"; "Docking station for seamless connection."; "finalWarrantyDate"; date("09/01/2030"); "inventoryNumber"; "INV203"; "model"; "DS-100");\
    new Object("serialNumber"; "SN12426"; "purchaseDate"; date("10/20/2029"); "comment"; "Surge protector for equipment safety."; "finalWarrantyDate"; date("10/20/2030"); "inventoryNumber"; "INV204"; "model"; "SP-3000");\
    new Object("serialNumber"; "SN12427"; "purchaseDate"; date("11/15/2029"); "comment"; "UPS system for data protection."; "finalWarrantyDate"; date("11/15/2030"); "inventoryNumber"; "INV205"; "model"; "UPS-PRO500");\
    new Object("serialNumber"; "SN12428"; "purchaseDate"; date("12/10/2029"); "comment"; "Laptop cooling pad for better performance."; "finalWarrantyDate"; date("12/10/2030"); "inventoryNumber"; "INV206"; "model"; "LC-PAD100");\
    new Object("serialNumber"; "SN12429"; "purchaseDate"; date("01/05/2030"); "comment"; "External hard drive for backup purposes."; "finalWarrantyDate"; date("01/05/2031"); "inventoryNumber"; "INV207"; "model"; "EHD-2000");\
    new Object("serialNumber"; "SN12430"; "purchaseDate"; date("02/10/2030"); "comment"; "Router for extended Wi-Fi coverage."; "finalWarrantyDate"; date("02/10/2031"); "inventoryNumber"; "INV208"; "model"; "R-EX3000");\
    new Object("serialNumber"; "SN12431"; "purchaseDate"; date("03/15/2030"); "comment"; "Smart TV for conference room."; "finalWarrantyDate"; date("03/15/2031"); "inventoryNumber"; "INV209"; "model"; "STV-1500");\
    new Object("serialNumber"; "SN12432"; "purchaseDate"; date("04/10/2030"); "comment"; "Laptop charger for mobile workforce."; "finalWarrantyDate"; date("04/10/2031"); "inventoryNumber"; "INV210"; "model"; "LC-400");\
    new Object("serialNumber"; "SN12433"; "purchaseDate"; date("05/20/2030"); "comment"; "Projector screen for presentations."; "finalWarrantyDate"; date("05/20/2031"); "inventoryNumber"; "INV211"; "model"; "PS-1200");\
    new Object("serialNumber"; "SN12434"; "purchaseDate"; date("06/15/2030"); "comment"; "TV mount for office display."; "finalWarrantyDate"; date("06/15/2031"); "inventoryNumber"; "INV212"; "model"; "TV-MNT-400");\
    new Object("serialNumber"; "SN12435"; "purchaseDate"; date("07/10/2030"); "comment"; "Wireless mouse for ergonomic workspaces."; "finalWarrantyDate"; date("07/10/2031"); "inventoryNumber"; "INV213"; "model"; "WM-500");\
    new Object("serialNumber"; "SN12436"; "purchaseDate"; date("08/05/2030"); "comment"; "Electric stapler for office use."; "finalWarrantyDate"; date("08/05/2031"); "inventoryNumber"; "INV214"; "model"; "ES-1000")\
)

	
	for Each ($item; $equipments)
		$equipment := ds.Equipment.new()
		$equipment.type := $Types.at(random%$Types.length)
		$equipment.brand := $Brands.at(random%($Brands.length))
		$equipment.serialNumber := $item.serialNumber
		$equipment.purchaseDate := $item.purchaseDate
		$equipment.status := $Statuses.at(random%($Statuses.length))
		$equipment.comment := $item.comment
		$equipment.model := $item.model
		$equipment.finalWarrantyDate := $item.finalWarrantyDate
		$equipment.inventoryNumber := $item.inventoryNumber
		$info := $equipment.save()
	end for each 
	
	
function generateUserEquipment()
	var $info: object
	var $userequipment: cs.UserEquipmentEntity
	var $users: cs.UserEquipmentSelection
	var $user: cs.UserEquipmentEntity
	var $equipments: cs.EquipmentSelection
	var $equipment: cs.EquipmentEntity
	
	$users := ds.User.all()
	$equipments := ds.Equipment.all()
	
	for Each ($user; $users)
		for Each ($equipment; $equipments)
			if (random%4 = 0)
				$userequipment := ds.UserEquipment.new()
				$userequipment.user := $user
				$userequipment.equipment := $equipment
				$userequipment.attributionDate := date("12/15/2024")
				$info := $userequipment.save()
			end if 
		end for each 
	end for each 
	
	
	
function generateEquipmentSoftware()
	var $info: object
	var $equipmentsoftware: cs.EquipmentSoftwareEntity
	var $softwares: cs.SoftwareSelection
	var $software: cs.SoftwareEntity
	var $equipments: cs.EquipmentSelection
	var $equipment: cs.EquipmentEntity
	
	$softwares := ds.Software.all()
	$equipments := ds.Equipment.all()
	
	for Each ($software; $softwares)
		for Each ($equipment;$equipments)
		$equipmentsoftware := ds.EquipmentSoftware.new()
		$equipmentsoftware.software := $software
		$equipmentsoftware.equipment := $equipment
		$equipmentsoftware.installationDate := date("12/15/2024")
		$info := $equipmentsoftware.save()
		end for each	
	end for each 
	
	
