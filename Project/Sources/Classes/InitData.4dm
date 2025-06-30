Class constructor
	
	
Function dropData()
	var $trash : Object
	$trash:=ds:C1482.User.all().drop()
	$trash:=ds:C1482.Group.all().drop()
	$trash:=ds:C1482.Software.all().drop()
	$trash:=ds:C1482.License.all().drop()
	$trash:=ds:C1482.Equipment.all().drop()
	$trash:=ds:C1482.IncidentHistory.all().drop()
	$trash:=ds:C1482.UserEquipment.all().drop()
	$trash:=ds:C1482.EquipmentSoftware.all().drop()
	$trash:=ds:C1482.Brand.all().drop()
	$trash:=ds:C1482.Type.all().drop()
	$trash:=ds:C1482.Category.all().drop()
	$trash:=ds:C1482.Notification.all().drop()
	$trash:=ds:C1482.Status.all().drop()
	$trash:=ds:C1482.Setting.all().drop()
	
Function createData()
	This:C1470.generateBrand()
	This:C1470.generateType()
	This:C1470.generateCategory()
	This:C1470.generateStatus()
	This:C1470.generateSoftware()
	This:C1470.generateEquipments()
	This:C1470.generateEquipmentSoftware()
	This:C1470.generateUser()
	This:C1470.generateUserEquipment()
	This:C1470.generateGroup()
	This:C1470.generateLicense()
	This:C1470.generateIncidentHistory()
	This:C1470.generateNotification()
	
	//$users
Function generateUser()
	var $cloudUsers : Collection
	var $departments : Collection
	var $jobTitles : Collection
	var $user : cs:C1710.UserEntity
	var $item : Object
	var $users : Collection
	
	$users:=[\
		{firstName: "Emma"; lastName: "Rossi"; email: "emmarossi@4D.com"; role: "Administrator"}; \
		{firstName: "Sofia"; lastName: "Muller"; email: "sofiamuller@4D.com"; role: "Manager"}\
		]
	$departments:=["HR"; "PS"; "QA"; "Marketing"; "Qodly Customer Service"; "Support"; "DevOps"]
	$jobTitles:=["Software Engineer"; "Systems Administrator"; "Network Engineer"; "IT Support Specialist"; "Database Administrator"; "Project Manager"; "Quality Assurance Analyst"; "Business Analyst"; "Security Analyst"; "UX/UI Designer"; "Product Manager"; "Data Scientist"; "Marketing Manager"; "HR Manager"; "Financial Analyst"; "Customer Service Representative"; "Technical Writer"; "Full Stack Developer"; "DevOps Engineer"; "Application Support Analyst"]
	
	For each ($item; $users)
		$user:=ds:C1482.User.new()
		$user.firstName:=$item.firstName
		$user.lastName:=$item.lastName
		$user.email:=$item.email
		$user.role:=$item.role
		$user.password:=Generate password hash:C1533("password")
		$user.address:={first: "N150"; second: "Street K"; state: "State"; city: "Rabat"; zipCode: "10113"}
		$user.moreInfo:={phone: "+212600000000"}
		$user.department:=$departments.at(Random:C100%($departments.length))
		$user.jobTitle:=$jobTitles.at((Random:C100%($jobTitles.length)))
		$info:=$user.save()
	End for each 
	
	// Groups
Function generateGroup()
	var $info : Object
	var $item : Text
	var $group : cs:C1710.GroupEntity
	var $supervisor : cs:C1710.UserEntity
	var $managers : cs:C1710.UserSelection
	TRACE:C157
	var $users : cs:C1710.UserSelection
	$users:=ds:C1482.User.all()
	
	var $groups : Collection
	$groups:=["Group 1"; "Group 2"; "Group 3"; "Group 4"]
	
	For each ($item; $groups)
		$group:=ds:C1482.Group.new()
		$group.name:=$item
		// Affect a random manager to be the $supervisor
		$managers:=$users.query("role = :1"; "Manager")
		$group.manager:=$managers.at(Random:C100%($managers.length))
		$info:=$group.save()
	End for each 
	
Function generateType()
	var $types : Collection
	var $typeEntity : cs:C1710.TypeEntity
	var $item : Text
	
	$types:=["Computer"; "Printer"; "Mouse"; "Monitor"; "PDU"; "Phone"; "Networking Equipment"]
	
	For each ($item; $types)
		$typeEntity:=ds:C1482.Type.new()
		$typeEntity.label:=$item
		$typeEntity.save()
	End for each 
	
	
Function generateStatus()
	var $statuses : Collection
	var $status : cs:C1710.StatusEntity
	var $item : Text
	
	$statuses:=["In service"; "Out of service"; "Available"]
	
	For each ($item; $statuses)
		$status:=ds:C1482.Status.new()
		$status.status:=$item
		$status.save()
	End for each 
	
Function generateCategory()
	var $categories : Collection
	var $category : cs:C1710.CategoryEntity
	var $item : Text
	
	$categories:=["OEM"; "Key"; "Request"]
	
	For each ($item; $categories)
		$category:=ds:C1482.Category.new()
		$category.categoryName:=$item
		$category.save()
	End for each 
	
Function generateBrand()
	var $brands : Collection
	var $brand : cs:C1710.BrandEntity
	var $item : Text
	
	$brands:=["HP"; "Dell"; "Lenovo"; "Apple"; "Microsoft"; "Samsung"; "Acer"; "Asus"; "Sony"; "LG"]
	
	For each ($item; $brands)
		$brand:=ds:C1482.Brand.new()
		$brand.brandName:=$item
		$brand.save()
	End for each 
	
	// Incident History
Function generateIncidentHistory()
	var $incidents : Collection
	var $item : Object
	var $info : Object
	var $incident : cs:C1710.IncidentHistoryEntity
	
	$incidents:=[]
	$incidents.push(\
		New object:C1471("name"; "Hardware Failure"; "incidentDate"; Date:C102("01/01/2024"); "description"; "The equipment is malfunctioning due to hardware failure."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Overheating Issue"; "incidentDate"; Date:C102("01/02/2024"); "description"; "The device is overheating and causing performance issues."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Power Supply Failure"; "incidentDate"; Date:C102("01/03/2024"); "description"; "Power supply is not working properly, causing system shutdowns."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Hard Drive Failure"; "incidentDate"; Date:C102("01/04/2024"); "description"; "The hard drive is failing and needs replacement."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Memory Module Malfunction"; "incidentDate"; Date:C102("01/05/2024"); "description"; "The memory module is malfunctioning, causing system instability."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Device Not Booting"; "incidentDate"; Date:C102("01/06/2024"); "description"; "The device is not booting up properly, possibly due to hardware failure."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Battery Not Charging"; "incidentDate"; Date:C102("01/07/2024"); "description"; "The battery is not charging despite being connected to power."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Screen Flickering"; "incidentDate"; Date:C102("01/08/2024"); "description"; "The screen is flickering intermittently, affecting visibility."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Keyboard or Mouse Not Working"; "incidentDate"; Date:C102("01/09/2024"); "description"; "The keyboard or mouse is unresponsive or malfunctioning."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Printer Not Responding"; "incidentDate"; Date:C102("01/10/2024"); "description"; "The printer is not responding to print commands."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Peripheral Connection Issue"; "incidentDate"; Date:C102("01/11/2024"); "description"; "Issues with connecting peripherals to the device."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Firmware Update Failure"; "incidentDate"; Date:C102("01/12/2024"); "description"; "The firmware update failed, and the system is stuck."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Cooling System Failure"; "incidentDate"; Date:C102("01/13/2024"); "description"; "The cooling system is malfunctioning, causing the device to overheat."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Damaged Port"; "incidentDate"; Date:C102("01/14/2024"); "description"; "A port on the device is damaged and not functional."; "incidentType"; "hardware"); \
		New object:C1471("name"; "Software Crash"; "incidentDate"; Date:C102("01/15/2024"); "description"; "The software crashed unexpectedly during use."; "incidentType"; "software"); \
		New object:C1471("name"; "Application Not Responding"; "incidentDate"; Date:C102("01/16/2024"); "description"; "The application is unresponsive and not functioning as expected."; "incidentType"; "software"); \
		New object:C1471("name"; "Slow Performance"; "incidentDate"; Date:C102("01/17/2024"); "description"; "The system or application is performing slower than usual."; "incidentType"; "software"); \
		New object:C1471("name"; "Unexpected System Reboot"; "incidentDate"; Date:C102("01/18/2024"); "description"; "The system rebooted unexpectedly without user intervention."; "incidentType"; "software"); \
		New object:C1471("name"; "Incompatibility with OS Update"; "incidentDate"; Date:C102("01/19/2024"); "description"; "The system or software is not compatible with the latest OS update."; "incidentType"; "software"); \
		New object:C1471("name"; "Corrupt System Files"; "incidentDate"; Date:C102("01/20/2024"); "description"; "System files are corrupt and need to be repaired."; "incidentType"; "software"); \
		New object:C1471("name"; "Installation Failure"; "incidentDate"; Date:C102("01/21/2024"); "description"; "The installation of software or drivers failed."; "incidentType"; "software"); \
		New object:C1471("name"; "Unresponsive UI"; "incidentDate"; Date:C102("01/22/2024"); "description"; "The user interface is unresponsive and not interacting properly."; "incidentType"; "software"); \
		New object:C1471("name"; "Data Synchronization Issue"; "incidentDate"; Date:C102("01/23/2024"); "description"; "There is an issue with data synchronization between devices."; "incidentType"; "software"); \
		New object:C1471("name"; "Configuration Error"; "incidentDate"; Date:C102("01/24/2024"); "description"; "Incorrect configuration causing the system to malfunction."; "incidentType"; "software"); \
		New object:C1471("name"; "Missing or Corrupt DLL Files"; "incidentDate"; Date:C102("01/25/2024"); "description"; "The necessary DLL files are missing or corrupted."; "incidentType"; "software"); \
		New object:C1471("name"; "Driver Compatibility Issue"; "incidentDate"; Date:C102("01/26/2024"); "description"; "Driver incompatibility causing system instability."; "incidentType"; "software"); \
		New object:C1471("name"; "Authentication Failure"; "incidentDate"; Date:C102("01/27/2024"); "description"; "User authentication failed, unable to log in."; "incidentType"; "software"); \
		New object:C1471("name"; "License Expired"; "incidentDate"; Date:C102("01/28/2024"); "description"; "The software license has expired and needs to be renewed."; "incidentType"; "software"); \
		New object:C1471("name"; "License Not Recognized"; "incidentDate"; Date:C102("01/29/2024"); "description"; "The license is not recognized, possibly invalid or corrupted."; "incidentType"; "software"); \
		New object:C1471("name"; "Activation Key Invalid"; "incidentDate"; Date:C102("01/30/2024"); "description"; "The activation key provided is invalid or expired."; "incidentType"; "software"); \
		New object:C1471("name"; "License Transfer Failure"; "incidentDate"; Date:C102("01/31/2024"); "description"; "License transfer failed due to technical issues."; "incidentType"; "software"); \
		New object:C1471("name"; "Exceeded Allowed Activations"; "incidentDate"; Date:C102("02/01/2024"); "description"; "The maximum integer of allowed activations has been exceeded."; "incidentType"; "software"); \
		New object:C1471("name"; "Subscription Not Renewed"; "incidentDate"; Date:C102("02/02/2024"); "description"; "The subscription has not been renewed on time."; "incidentType"; "software"); \
		New object:C1471("name"; "License Downgrade Error"; "incidentDate"; Date:C102("02/03/2024"); "description"; "There was an error when attempting to downgrade the license."; "incidentType"; "software"); \
		New object:C1471("name"; "Unauthorized License Usage"; "incidentDate"; Date:C102("02/04/2024"); "description"; "The license is being used without authorization."; "incidentType"; "software")\
		)
	
	var $status : Collection
	$status:=["Reported"; "In progress"; "Closed"]
	
	var $importanceLevel : Collection
	$importanceLevel:=["Moderate"; "Minor"; "Critical"]
	
	var $equipments : cs:C1710.EquipmentSelection
	$equipments:=ds:C1482.Equipment.all()
	
	var $softwares : cs:C1710.SoftwareSelection
	$softwares:=ds:C1482.Software.all()
	
	var $users : cs:C1710.UserSelection
	$users:=ds:C1482.User.all()
	
	For each ($item; $incidents)
		$incident:=ds:C1482.IncidentHistory.new()
		$incident.name:=$item.name
		$incident.incidentDate:=$item.incidentDate
		$incident.description:=$item.description
		$incident.resolutionStatus:=$status.at(Random:C100%($status.length))
		$incident.incidentType:=$item.incidentType
		If ($item.incidentType="software")
			$incident.software:=$softwares.at(Random:C100%($softwares.length))
		Else 
			$incident.equipment:=$equipments.at(Random:C100%($equipments.length))
		End if 
		$incident.importanceLevel:=$importanceLevel.at(Random:C100%($importanceLevel.length))
		$incident.reporter:=$users.at(Random:C100%($users.length))
		$info:=$incident.save()
	End for each 
	
	//Notifs
Function generateNotification()
	var $item : Object
	var $notifications : Collection
	var $notification : cs:C1710.NotificationEntity
	$notifications:=[]
	$notifications.push(\
		New object:C1471("type"; "incident inProgress"; "content"; "Incident investigation is currently in progress."; "isRead"; False:C215; "createdAt"; Date:C102("03/05/2024"); "creationTime"; Time:C179("08:30:00")); \
		New object:C1471("type"; "incident closed"; "content"; "Incident has been resolved and closed."; "isRead"; True:C214; "createdAt"; Date:C102("04/12/2024"); "creationTime"; Time:C179("15:45:00")); \
		New object:C1471("type"; "incident reported"; "content"; "New incident reported in the system."; "isRead"; False:C215; "createdAt"; Date:C102("05/20/2024"); "creationTime"; Time:C179("09:00:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Incident under investigation. Updates will follow."; "isRead"; False:C215; "createdAt"; Date:C102("06/15/2024"); "creationTime"; Time:C179("10:15:00")); \
		New object:C1471("type"; "incident closed"; "content"; "The issue reported earlier has been successfully resolved."; "isRead"; True:C214; "createdAt"; Date:C102("07/05/2024"); "creationTime"; Time:C179("16:30:00")); \
		New object:C1471("type"; "incident reported"; "content"; "A new incident has been logged into the system."; "isRead"; False:C215; "createdAt"; Date:C102("08/10/2024"); "creationTime"; Time:C179("12:00:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Investigation in progress. Estimated resolution time is 2 hours."; "isRead"; False:C215; "createdAt"; Date:C102("09/20/2024"); "creationTime"; Time:C179("14:45:00")); \
		New object:C1471("type"; "incident closed"; "content"; "Incident closed. The issue has been successfully resolved."; "isRead"; True:C214; "createdAt"; Date:C102("10/25/2024"); "creationTime"; Time:C179("11:30:00")); \
		New object:C1471("type"; "incident reported"; "content"; "An incident has been reported regarding a system issue."; "isRead"; False:C215; "createdAt"; Date:C102("11/10/2024"); "creationTime"; Time:C179("17:15:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Investigation of the reported incident is underway."; "isRead"; False:C215; "createdAt"; Date:C102("12/05/2024"); "creationTime"; Time:C179("08:00:00")); \
		New object:C1471("type"; "incident closed"; "content"; "Incident resolved. All issues are cleared."; "isRead"; True:C214; "createdAt"; Date:C102("01/10/2025"); "creationTime"; Time:C179("13:30:00")); \
		New object:C1471("type"; "incident reported"; "content"; "New incident reported. Awaiting review."; "isRead"; False:C215; "createdAt"; Date:C102("02/25/2025"); "creationTime"; Time:C179("10:00:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Investigation ongoing. No updates yet."; "isRead"; False:C215; "createdAt"; Date:C102("03/15/2025"); "creationTime"; Time:C179("11:45:00")); \
		New object:C1471("type"; "incident closed"; "content"; "Incident closed after thorough investigation."; "isRead"; True:C214; "createdAt"; Date:C102("04/05/2024"); "creationTime"; Time:C179("12:30:00")); \
		New object:C1471("type"; "incident reported"; "content"; "A new incident has been reported."; "isRead"; False:C215; "createdAt"; Date:C102("05/20/2024"); "creationTime"; Time:C179("14:00:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Incident being addressed by the technical team."; "isRead"; False:C215; "createdAt"; Date:C102("06/15/2024"); "creationTime"; Time:C179("15:00:00")); \
		New object:C1471("type"; "incident closed"; "content"; "Incident resolved. Issue has been fixed."; "isRead"; True:C214; "createdAt"; Date:C102("07/10/2024"); "creationTime"; Time:C179("10:15:00")); \
		New object:C1471("type"; "incident reported"; "content"; "Incident reported regarding unexpected downtime."; "isRead"; False:C215; "createdAt"; Date:C102("08/25/2024"); "creationTime"; Time:C179("16:45:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Issue under investigation by IT team."; "isRead"; False:C215; "createdAt"; Date:C102("09/01/2024"); "creationTime"; Time:C179("09:30:00")); \
		New object:C1471("type"; "incident closed"; "content"; "The issue was resolved and incident closed."; "isRead"; True:C214; "createdAt"; Date:C102("10/20/2024"); "creationTime"; Time:C179("12:45:00")); \
		New object:C1471("type"; "incident reported"; "content"; "Incident related to hardware failure reported."; "isRead"; False:C215; "createdAt"; Date:C102("11/15/2024"); "creationTime"; Time:C179("13:30:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Investigation ongoing. No resolution yet."; "isRead"; False:C215; "createdAt"; Date:C102("12/10/2024"); "creationTime"; Time:C179("08:45:00")); \
		New object:C1471("type"; "incident closed"; "content"; "Incident closed with successful resolution."; "isRead"; True:C214; "createdAt"; Date:C102("01/05/2035"); "creationTime"; Time:C179("11:00:00")); \
		New object:C1471("type"; "incident reported"; "content"; "Incident reported regarding network outage."; "isRead"; False:C215; "createdAt"; Date:C102("02/10/2035"); "creationTime"; Time:C179("09:15:00")); \
		New object:C1471("type"; "incident inProgress"; "content"; "Investigation underway. Network team handling."; "isRead"; False:C215; "createdAt"; Date:C102("03/15/2035"); "creationTime"; Time:C179("10:30:00"))\
		)
	
	var $users : cs:C1710.UserSelection
	$users:=ds:C1482.User.all()
	
	
	For each ($item; $notifications)
		$notification:=ds:C1482.Notification.new()
		$notification.type:=$item.type
		$notification.content:=$item.content
		$notification.isRead:=$item.isRead
		$notification.createdAt:=$item.createdAt
		$notification.creationTime:=$item.creationTime
		$notification.user:=$users.at(Random:C100%($users.length))
		$notification.save()
	End for each 
	
	
	//$licenses
Function generateLicense()
	var $info : Object
	var $item : Object
	
	var $licenses : Collection
	var $license : cs:C1710.LicenseEntity
	
	$licenses:=[]
	$licenses.push(\
		New object:C1471("name"; "Windows 10 Pro"; "purchaseDate"; Date:C102("01/15/2024"); "category"; "OEM"; "expiryDate"; Date:C102("01/15/2025"); "licenseKey"; "W10P-1234-5678-ABCD"; "serialNumber"; "SN-W10P-12345678"); \
		New object:C1471("name"; "Office 365"; "purchaseDate"; Date:C102("02/20/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("02/20/2025"); "licenseKey"; "O365-2345-6789-BCDE"; "serialNumber"; "SN-O365-23456789"); \
		New object:C1471("name"; "Adobe Photoshop"; "purchaseDate"; Date:C102("03/10/2024"); "category"; "Perpetual"; "expiryDate"; Date:C102("03/10/2026"); "licenseKey"; "ADPS-3456-7890-CDEF"; "serialNumber"; "SN-ADPS-34567890"); \
		New object:C1471("name"; "Autodesk AutoCAD"; "purchaseDate"; Date:C102("04/25/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("04/25/2025"); "licenseKey"; "AUTCAD-4567-8901-DEFG"; "serialNumber"; "SN-AUTCAD-45678901"); \
		New object:C1471("name"; "VMware Workstation Pro"; "purchaseDate"; Date:C102("05/05/2024"); "category"; "Perpetual"; "expiryDate"; Date:C102("05/05/2026"); "licenseKey"; "VMWP-5678-9012-EFGH"; "serialNumber"; "SN-VMWP-56789012"); \
		New object:C1471("name"; "Norton Antivirus"; "purchaseDate"; Date:C102("06/12/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("06/12/2025"); "licenseKey"; "NORTON-6789-0123-FGHI"; "serialNumber"; "SN-NORTON-67890123"); \
		New object:C1471("name"; "Slack"; "purchaseDate"; Date:C102("07/01/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("07/01/2025"); "licenseKey"; "SLACK-7890-1234-GHIJ"; "serialNumber"; "SN-SLACK-78901234"); \
		New object:C1471("name"; "QuickBooks"; "purchaseDate"; Date:C102("08/15/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("08/15/2025"); "licenseKey"; "QB-8901-2345-HIJK"; "serialNumber"; "SN-QB-89012345"); \
		New object:C1471("name"; "Microsoft Project"; "purchaseDate"; Date:C102("09/10/2024"); "category"; "Perpetual"; "expiryDate"; Date:C102("09/10/2026"); "licenseKey"; "MSP-9012-3456-IJKL"; "serialNumber"; "SN-MSP-90123456"); \
		New object:C1471("name"; "Zoom"; "purchaseDate"; Date:C102("10/05/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("10/05/2025"); "licenseKey"; "ZOOM-0123-4567-JKLM"; "serialNumber"; "SN-ZOOM-01234567"); \
		New object:C1471("name"; "GitHub Enterprise"; "purchaseDate"; Date:C102("11/20/2024"); "category"; "Subscription"; "expiryDate"; Date:C102("11/20/2025"); "licenseKey"; "GHE-1234-5678-KLMN"; "serialNumber"; "SN-GHE-12345678"); \
		New object:C1471("name"; "Adobe Illustrator"; "purchaseDate"; Date:C102("12/15/2024"); "category"; "Perpetual"; "expiryDate"; Date:C102("12/15/2026"); "licenseKey"; "ADIL-2345-6789-LMNO"; "serialNumber"; "SN-ADIL-23456789")\
		)
	
	var $status : Collection
	$status:=["Suspended"; "Unused"; "Expired"; "Revoked"; "Active"]
	
	var $categories : cs:C1710.CategorySelection
	var $category : cs:C1710.CategoryEntity
	$categories:=ds:C1482.Category.all()
	
	var $users : cs:C1710.UserSelection
	var $user : cs:C1710.UserEntity
	$users:=ds:C1482.User.all()
	
	var $softwares : cs:C1710.SoftwareSelection
	$softwares:=ds:C1482.Software.all()
	
	For each ($item; $licenses)
		$license:=ds:C1482.License.new()
		$license.name:=$item.name
		$license.licenseKey:=$item.licenseKey
		$license.status:=$status.at(Random:C100%($status.length))
		$license.serialNumber:=$item.serialNumber
		$license.software:=$softwares.at(Random:C100%($softwares.length))
		$license.user:=$users.at(Random:C100%($users.length))
		$license.category:=$categories.at(Random:C100%($categories.length))
		$license.purchaseDate:=$item.purchaseDate
		$license.expiryDate:=$item.expiryDate
		$info:=$license.save()
	End for each 
	
	
	//$software
Function generateSoftware()
	var $info : Object
	var $item : Object
	
	
	var $brands : cs:C1710.BrandSelection
	var $brand : cs:C1710.BrandEntity
	$brands:=ds:C1482.Brand.all()
	
	var $softwares : Collection
	var $software : cs:C1710.SoftwareEntity
	$softwares:=[]
	$softwares.push(\
		New object:C1471("name"; "Windows 10 Pro"; "category"; "Operating System"); \
		New object:C1471("name"; "Office 365"; "category"; "Productivity Suite"); \
		New object:C1471("name"; "Adobe Photoshop"; "category"; "Graphics Design"); \
		New object:C1471("name"; "Autodesk AutoCAD"; "category"; "CAD Software"); \
		New object:C1471("name"; "VMware Workstation Pro"; "category"; "Virtualization"); \
		New object:C1471("name"; "Norton Antivirus"; "category"; "Security"); \
		New object:C1471("name"; "Slack"; "category"; "Communication"); \
		New object:C1471("name"; "QuickBooks"; "category"; "Accounting"); \
		New object:C1471("name"; "Microsoft Project"; "category"; "Project Management"); \
		New object:C1471("name"; "Zoom"; "category"; "Communication"); \
		New object:C1471("name"; "GitHub Enterprise"; "category"; "Version Control"); \
		New object:C1471("name"; "Adobe Illustrator"; "category"; "Graphics Design"); \
		New object:C1471("name"; "Visual Studio"; "category"; "Development"); \
		New object:C1471("name"; "MySQL Workbench"; "category"; "Database Management"); \
		New object:C1471("name"; "Docker"; "category"; "Containerization"); \
		New object:C1471("name"; "Node.js"; "category"; "Development"); \
		New object:C1471("name"; "Spotify"; "category"; "Entertainment"); \
		New object:C1471("name"; "Trello"; "category"; "Project Management"); \
		New object:C1471("name"; "Skype"; "category"; "Communication"); \
		New object:C1471("name"; "Sublime Text"; "category"; "Development"); \
		New object:C1471("name"; "Adobe Premiere Pro"; "category"; "Video Editing"); \
		New object:C1471("name"; "IntelliJ IDEA"; "category"; "Development"); \
		New object:C1471("name"; "Sketch"; "category"; "Graphics Design"); \
		New object:C1471("name"; "Notepad++"; "category"; "Development"); \
		New object:C1471("name"; "Microsoft Edge"; "category"; "Web Browser")\
		)
	
	For each ($item; $softwares)
		$software:=ds:C1482.Software.new()
		$software.name:=$item.name
		$software.category:=$item.category
		$software.brand:=$brands.at(Random:C100%($brands.length))
		$info:=$software.save()
	End for each 
	
	
	//$equipment
Function generateEquipments()
	var $info : Object
	var $item : Object
	
	var $Brands : cs:C1710.BrandSelection
	$Brands:=ds:C1482.Brand.all()
	
	var $Statuses : cs:C1710.StatusSelection
	$Statuses:=ds:C1482.Status.all()
	
	var $Types : cs:C1710.TypeSelection
	$Types:=ds:C1482.Type.all()
	
	var $equipments : Collection
	var $equipment : cs:C1710.EquipmentEntity
	$equipments:=[]
	$equipments.push(\
		New object:C1471("serialNumber"; "SN12407"; "purchaseDate"; Date:C102("03/05/2028"); "comment"; "Projector for training sessions."; "finalWarrantyDate"; Date:C102("03/05/2029"); "inventoryNumber"; "INV185"; "model"; "EPX-2000"); \
		New object:C1471("serialNumber"; "SN12408"; "purchaseDate"; Date:C102("04/12/2028"); "comment"; "Tablet for note-taking."; "finalWarrantyDate"; Date:C102("04/12/2029"); "inventoryNumber"; "INV186"; "model"; "T10-Tab"); \
		New object:C1471("serialNumber"; "SN12409"; "purchaseDate"; Date:C102("05/20/2028"); "comment"; "Laser pointer for presentations."; "finalWarrantyDate"; Date:C102("05/20/2029"); "inventoryNumber"; "INV187"; "model"; "LP-500"); \
		New object:C1471("serialNumber"; "SN12410"; "purchaseDate"; Date:C102("06/15/2028"); "comment"; "KVM switch for multiple server management."; "finalWarrantyDate"; Date:C102("06/15/2029"); "inventoryNumber"; "INV188"; "model"; "KVM-4X"); \
		New object:C1471("serialNumber"; "SN12411"; "purchaseDate"; Date:C102("07/05/2028"); "comment"; "External SSD for data backup."; "finalWarrantyDate"; Date:C102("07/05/2029"); "inventoryNumber"; "INV189"; "model"; "SSD-5000"); \
		New object:C1471("serialNumber"; "SN12412"; "purchaseDate"; Date:C102("08/10/2028"); "comment"; "Desktop monitor for workstation."; "finalWarrantyDate"; Date:C102("08/10/2029"); "inventoryNumber"; "INV190"; "model"; "DS-2456"); \
		New object:C1471("serialNumber"; "SN12413"; "purchaseDate"; Date:C102("09/20/2028"); "comment"; "Portable power bank for mobile devices."; "finalWarrantyDate"; Date:C102("09/20/2029"); "inventoryNumber"; "INV191"; "model"; "PB-200"); \
		New object:C1471("serialNumber"; "SN12414"; "purchaseDate"; Date:C102("10/25/2028"); "comment"; "USB-C adapter for compatibility."; "finalWarrantyDate"; Date:C102("10/25/2029"); "inventoryNumber"; "INV192"; "model"; "USB-C-ADP"); \
		New object:C1471("serialNumber"; "SN12415"; "purchaseDate"; Date:C102("11/10/2028"); "comment"; "3D printer for prototyping."; "finalWarrantyDate"; Date:C102("11/10/2029"); "inventoryNumber"; "INV193"; "model"; "3D-PRO-100"); \
		New object:C1471("serialNumber"; "SN12416"; "purchaseDate"; Date:C102("12/05/2028"); "comment"; "Network switch for server room."; "finalWarrantyDate"; Date:C102("12/05/2029"); "inventoryNumber"; "INV194"; "model"; "NS-800"); \
		New object:C1471("serialNumber"; "SN12417"; "purchaseDate"; Date:C102("01/10/2029"); "comment"; "Bluetooth keyboard for ergonomic use."; "finalWarrantyDate"; Date:C102("01/10/2030"); "inventoryNumber"; "INV195"; "model"; "BT-KB200"); \
		New object:C1471("serialNumber"; "SN12418"; "purchaseDate"; Date:C102("02/25/2029"); "comment"; "Backup generator for uninterrupted power supply."; "finalWarrantyDate"; Date:C102("02/25/2030"); "inventoryNumber"; "INV196"; "model"; "GEN-PRO200"); \
		New object:C1471("serialNumber"; "SN12419"; "purchaseDate"; Date:C102("03/15/2029"); "comment"; "Smartphone for field agents."; "finalWarrantyDate"; Date:C102("03/15/2030"); "inventoryNumber"; "INV197"; "model"; "SP-400X"); \
		New object:C1471("serialNumber"; "SN12420"; "purchaseDate"; Date:C102("04/05/2029"); "comment"; "Wireless headset for call center."; "finalWarrantyDate"; Date:C102("04/05/2030"); "inventoryNumber"; "INV198"; "model"; "WH-360"); \
		New object:C1471("serialNumber"; "SN12421"; "purchaseDate"; Date:C102("05/20/2029"); "comment"; "Document scanner for paperless office."; "finalWarrantyDate"; Date:C102("05/20/2030"); "inventoryNumber"; "INV199"; "model"; "DS-2400"); \
		New object:C1471("serialNumber"; "SN12422"; "purchaseDate"; Date:C102("06/15/2029"); "comment"; "Webcam for video conferencing."; "finalWarrantyDate"; Date:C102("06/15/2030"); "inventoryNumber"; "INV200"; "model"; "WEB-CAM-1080"); \
		New object:C1471("serialNumber"; "SN12423"; "purchaseDate"; Date:C102("07/10/2029"); "comment"; "Thermal printer for barcode labels."; "finalWarrantyDate"; Date:C102("07/10/2030"); "inventoryNumber"; "INV201"; "model"; "TPR-500"); \
		New object:C1471("serialNumber"; "SN12424"; "purchaseDate"; Date:C102("08/25/2029"); "comment"; "Barcode scanner for inventory management."; "finalWarrantyDate"; Date:C102("08/25/2030"); "inventoryNumber"; "INV202"; "model"; "BCS-1000"); \
		New object:C1471("serialNumber"; "SN12425"; "purchaseDate"; Date:C102("09/01/2029"); "comment"; "Docking station for seamless connection."; "finalWarrantyDate"; Date:C102("09/01/2030"); "inventoryNumber"; "INV203"; "model"; "DS-100"); \
		New object:C1471("serialNumber"; "SN12426"; "purchaseDate"; Date:C102("10/20/2029"); "comment"; "Surge protector for equipment safety."; "finalWarrantyDate"; Date:C102("10/20/2030"); "inventoryNumber"; "INV204"; "model"; "SP-3000"); \
		New object:C1471("serialNumber"; "SN12427"; "purchaseDate"; Date:C102("11/15/2029"); "comment"; "UPS system for data protection."; "finalWarrantyDate"; Date:C102("11/15/2030"); "inventoryNumber"; "INV205"; "model"; "UPS-PRO500"); \
		New object:C1471("serialNumber"; "SN12428"; "purchaseDate"; Date:C102("12/10/2029"); "comment"; "Laptop cooling pad for better performance."; "finalWarrantyDate"; Date:C102("12/10/2030"); "inventoryNumber"; "INV206"; "model"; "LC-PAD100"); \
		New object:C1471("serialNumber"; "SN12429"; "purchaseDate"; Date:C102("01/05/2030"); "comment"; "External hard drive for backup purposes."; "finalWarrantyDate"; Date:C102("01/05/2031"); "inventoryNumber"; "INV207"; "model"; "EHD-2000"); \
		New object:C1471("serialNumber"; "SN12430"; "purchaseDate"; Date:C102("02/10/2030"); "comment"; "Router for extended Wi-Fi coverage."; "finalWarrantyDate"; Date:C102("02/10/2031"); "inventoryNumber"; "INV208"; "model"; "R-EX3000"); \
		New object:C1471("serialNumber"; "SN12431"; "purchaseDate"; Date:C102("03/15/2030"); "comment"; "Smart TV for conference room."; "finalWarrantyDate"; Date:C102("03/15/2031"); "inventoryNumber"; "INV209"; "model"; "STV-1500"); \
		New object:C1471("serialNumber"; "SN12432"; "purchaseDate"; Date:C102("04/10/2030"); "comment"; "Laptop charger for mobile workforce."; "finalWarrantyDate"; Date:C102("04/10/2031"); "inventoryNumber"; "INV210"; "model"; "LC-400"); \
		New object:C1471("serialNumber"; "SN12433"; "purchaseDate"; Date:C102("05/20/2030"); "comment"; "Projector screen for presentations."; "finalWarrantyDate"; Date:C102("05/20/2031"); "inventoryNumber"; "INV211"; "model"; "PS-1200"); \
		New object:C1471("serialNumber"; "SN12434"; "purchaseDate"; Date:C102("06/15/2030"); "comment"; "TV mount for office display."; "finalWarrantyDate"; Date:C102("06/15/2031"); "inventoryNumber"; "INV212"; "model"; "TV-MNT-400"); \
		New object:C1471("serialNumber"; "SN12435"; "purchaseDate"; Date:C102("07/10/2030"); "comment"; "Wireless mouse for ergonomic workspaces."; "finalWarrantyDate"; Date:C102("07/10/2031"); "inventoryNumber"; "INV213"; "model"; "WM-500"); \
		New object:C1471("serialNumber"; "SN12436"; "purchaseDate"; Date:C102("08/05/2030"); "comment"; "Electric stapler for office use."; "finalWarrantyDate"; Date:C102("08/05/2031"); "inventoryNumber"; "INV214"; "model"; "ES-1000")\
		)
	
	
	For each ($item; $equipments)
		$equipment:=ds:C1482.Equipment.new()
		$equipment.type:=$Types.at(Random:C100%$Types.length)
		$equipment.brand:=$Brands.at(Random:C100%($Brands.length))
		$equipment.serialNumber:=$item.serialNumber
		$equipment.purchaseDate:=$item.purchaseDate
		$equipment.status:=$Statuses.at(Random:C100%($Statuses.length))
		$equipment.comment:=$item.comment
		$equipment.model:=$item.model
		$equipment.finalWarrantyDate:=$item.finalWarrantyDate
		$equipment.inventoryNumber:=$item.inventoryNumber
		$info:=$equipment.save()
	End for each 
	
	
Function generateUserEquipment()
	var $info : Object
	var $userequipment : cs:C1710.UserEquipmentEntity
	var $users : cs:C1710.UserEquipmentSelection
	var $user : cs:C1710.UserEquipmentEntity
	var $equipments : cs:C1710.EquipmentSelection
	var $equipment : cs:C1710.EquipmentEntity
	
	$users:=ds:C1482.User.all()
	$equipments:=ds:C1482.Equipment.all()
	
	For each ($user; $users)
		For each ($equipment; $equipments)
			If (Random:C100%4=0)
				$userequipment:=ds:C1482.UserEquipment.new()
				$userequipment.user:=$user
				$userequipment.equipment:=$equipment
				$userequipment.attributionDate:=Date:C102("12/15/2024")
				$info:=$userequipment.save()
			End if 
		End for each 
	End for each 
	
	
	
Function generateEquipmentSoftware()
	var $info : Object
	var $equipmentsoftware : cs:C1710.EquipmentSoftwareEntity
	var $softwares : cs:C1710.SoftwareSelection
	var $software : cs:C1710.SoftwareEntity
	var $equipments : cs:C1710.EquipmentSelection
	var $equipment : cs:C1710.EquipmentEntity
	
	$softwares:=ds:C1482.Software.all()
	$equipments:=ds:C1482.Equipment.all()
	
	For each ($software; $softwares)
		For each ($equipment; $equipments)
			$equipmentsoftware:=ds:C1482.EquipmentSoftware.new()
			$equipmentsoftware.software:=$software
			$equipmentsoftware.equipment:=$equipment
			$equipmentsoftware.installationDate:=Date:C102("12/15/2024")
			$info:=$equipmentsoftware.save()
		End for each 
	End for each 
	
	
	