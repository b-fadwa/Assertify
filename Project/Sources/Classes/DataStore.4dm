Class extends DataStoreImplementation

exposed Function authentify($login : Text; $psw : Text) : Boolean
	var $users : cs:C1710.UserSelection
	var $user : cs:C1710.UserEntity
	If (($login="") && ($psw=""))
		return Session:C1714.setPrivileges(["guest"; "guestPromoted"])
	End if 
	$users:=ds:C1482.User.query("firstName = :1"; $login)
	If ($users.length=1)
		$user:=$users.first()
		
		If (Verify password hash:C1534($psw; String:C10($user.password)))
			Session:C1714.setPrivileges(String:C10($user.role))
			Use (Session:C1714.storage)
				Session:C1714.storage.clientInfo:=New shared object:C1526("UUID"; $user.ID)
			End use 
			Web Form:C1735.setMessage("Login successfull")
		Else 
			Web Form:C1735.setMessage("Unknown User")
			throw:C1805({message: "Unknown User"})
		End if 
	Else 
		Web Form:C1735.setMessage("Unknown User")
		throw:C1805({message: "Unknown User"})
	End if 
	
exposed Function getManifestObject() : Object  //used in HomePage
	var $manifestFile : 4D:C1709.File
	var $manifestObject : Object
	$manifestFile:=File:C1566("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject:=JSON Parse:C1218($manifestFile.getText())
	return $manifestObject
	
exposed Function generateData()  //used in HomePage
	var $initData : cs:C1710.InitData
	$initData:=cs:C1710.InitData.new()
	$initData.dropData()
	$initData.createData()
	Web Form:C1735.setMessage("Data Generated Successfully!")
	
exposed Function hide($serverRef : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.hide()
	
exposed Function show($serverRef : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.show()
	
exposed Function setCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.addCSSClass($cssClass)
	
exposed Function switchDisplay($toHideRef : Text; $cssClass : Text; $selectionLength : Variant; $toShowRef : Text)  //used to manage the visibilities 
	// Ayoub: can we replace it with states ??
	var $component : 4D:C1709.WebFormItem
	var $component2 : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$toShowRef]
	$component2:=Web Form:C1735[$toHideRef]
	If ($selectionLength=0)
		$component.removeCSSClass($cssClass)
		$component2.addCSSClass($cssClass)
	Else 
		$component2.removeCSSClass($cssClass)
		$component.addCSSClass($cssClass)
	End if 
	
exposed Function removeCss($serverRef : Text; $cssClass : Text)
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	$component.removeCSSClass($cssClass)
	
	
exposed Function extractMonth($incidentDate : Date) : Integer
	var $Month : Integer
	$Month:=Month of:C24($incidentDate)
	return $Month
	
	
exposed Function requiredField($input : Variant; $serverRef : Text) : Boolean  //used to make an empty field required
	var $component : 4D:C1709.WebFormItem
	$component:=Web Form:C1735[$serverRef]
	
	Case of 
		: ((Value type:C1509($input)=1) && ($input=Null:C1517))  //integer
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=3) && ($input=Null:C1517))  //picture
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=30) && ($input=Null:C1517))  //blob
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=2) && ($input=""))  //string
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=4) && ($input=Date:C102(!00-00-00!)))  //date
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=5) && (Undefined:C82($input)))  //undefined
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=12) && ($input=Null:C1517))  //variant
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=6) && ($input=Null:C1517))  //boolean
			$component.addCSSClass("requiredField")
			return True:C214
		: ((Value type:C1509($input)=255) && ($input=Null:C1517))  //null
			$component.addCSSClass("requiredField")
			return True:C214
		Else 
			$component.removeCSSClass("requiredField")
			return False:C215
	End case 
	
	
exposed Function haveInformations($IncType : Text)
	If ($IncType="Hardware")
		ds:C1482.setCss("webformRenderer1"; "visibility")
		ds:C1482.removeCss("webformRenderer2"; "visibility")
	Else 
		ds:C1482.setCss("webformRenderer2"; "visibility")
		ds:C1482.removeCss("webformRenderer1"; "visibility")
	End if 
	
exposed Function inputSelectBox($name1 : Text; $name2 : Text)
	ds:C1482.setCss($name1; "visibility")
	ds:C1482.removeCss($name2; "visibility")
	
	
exposed Function getCurrentUser()->$user : cs:C1710.UserEntity
	var $success : Boolean
	If (Session:C1714.storage.clientInfo#Null:C1517) && (Session:C1714.storage.clientInfo.UUID#Null:C1517)
		$user:=ds:C1482.User.get(Session:C1714.storage.clientInfo.UUID)
	End if 
	
exposed Function returnCurrentDate() : Date
	return Date:C102(Current date:C33())
	
	
exposed Function displayImage($option : Text)
	If ($option="Non")
		ds:C1482.setCss("DisplayImage"; "visibility")
	Else 
		ds:C1482.removeCss("DisplayImage"; "visibility")
	End if 
	
	
exposed Function getDataFromDropBox()->$myObject : Object
	
	var $event : Object
	var $data : Collection
	
	$myObject:=New object:C1471
	
	$event:=Web Event:C1734
	$data:=$event.data
	
	$myObject["data"]:=$data
	
	
exposed Function displayTreeArray()->$treeArrayData : Collection
	var $types : cs:C1710.TypeSelection
	var $equType : cs:C1710.TypeEntity
	var $materialNode : Object
	var $childNode : Object
	
	$types:=ds:C1482.Type.all()
	
	$treeArrayData:=[\
		{key: "1"; \
		label: "Dashboard"; \
		icon: "fa-solid fa-chart-column"; \
		page: "79v19wrp5r"; \
		target: "dashboard"\
		}; \
		{key: "2"; \
		label: "IT assets"; \
		icon: "fa-solid fa-box"; \
		page: "79v19wrp5r"; \
		children: [\
		{key: "2-1"; \
		label: "Equipments"; \
		icon: "fa-solid fa-desktop"; \
		page: "79v19wrp5r"; \
		target: "equipmentInventory"\
		}; \
		{key: "2-2"; \
		label: "Softwares"; \
		icon: "fa-solid fa-brands fa-windows"; \
		page: "79v19wrp5r"; \
		target: "softwareInventory"\
		}; \
		{key: "2-3"; \
		label: "Licenses"; \
		icon: "fa-solid fa-key"; \
		page: "79v19wrp5r"; \
		target: "licenseInventory"\
		}\
		]\
		}; \
		{key: "3"; \
		label: "Incidents"; \
		icon: "fa-solid fa-triangle-exclamation"; \
		page: "79v19wrp5r"; \
		target: "incidentHistory"\
		}; \
		{key: "4"; \
		label: "Calendar"; \
		icon: "fa-solid fa-calendar-days"; \
		page: "79v19wrp5r"; \
		target: "calendar"\
		}; \
		{key: "5"; \
		label: "Users"; \
		icon: "fa-solid fa-users"; \
		page: "79v19wrp5r"; \
		target: "userManagement"\
		}; \
		{key: "6"; \
		label: "Settings"; \
		icon: "fa-solid fa-gear"; \
		page: "79v19wrp5r"; \
		target: "settings"\
		}]
	
	$materialNode:=$treeArrayData[1].children[0]
	$materialNode.children:=New collection:C1472()
	
	
	For each ($equType; $types)
		$childNode:=New object:C1471("key"; "2-1-"+String:C10($equType.ID); "label"; $equType.label; "icon"; "fa-solid fa-tag"; "variables"; [{target: "Shared:Page1"; value: $equType.label}; {target: "filter"; value: $equType.label}])
		$childNode.target:="equipmentByTypeInventory"
		$childNode.page:="79v19wrp5r"
		$materialNode.children.push($childNode)
	End for each 