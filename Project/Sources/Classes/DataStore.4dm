Class extends DataStoreImplementation

exposed function getManifestObject() : object  //used in HomePage
	var $manifestFile: 4D.File
	var $manifestObject: object
	$manifestFile := file("/PACKAGE/Project/Sources/Shared/manifest.json")
	$manifestObject := JSON Parse($manifestFile.getText())
	return $manifestObject
	
exposed function generateData()  //used in HomePage
	var $initData: cs.InitData
	$initData := cs.InitData.new()
	$initData.dropData()
	$initData.createData()
	web Form.setMessage("Data Generated Successfully!")

exposed function hide($serverRef : text)
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	$component.hide()
	
exposed function show($serverRef : text)
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	$component.show()
	
exposed function setCss($serverRef : text; $cssClass : text)
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	$component.addCSSClass($cssClass)
	
exposed function switchDisplay($toHideRef : text; $cssClass : text; $selectionLength : variant; $toShowRef : text)  //used to manage the visibilities 
	// Ayoub: can we replace it with states ??
	var $component: 4D.WebFormItem
	var $component2: 4D.WebFormItem
	$component := web Form[$toShowRef]
	$component2 := web Form[$toHideRef]
	if ($selectionLength = 0)
		$component.removeCSSClass($cssClass)
		$component2.addCSSClass($cssClass)
	else 
		$component2.removeCSSClass($cssClass)
		$component.addCSSClass($cssClass)
	end if 
	
exposed function removeCss($serverRef : text; $cssClass : text)
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	$component.removeCSSClass($cssClass)
	
	
exposed function extractMonth($incidentDate : date) : integer
	var $Month: integer
	$Month := Month of($incidentDate)
	return $Month
	
	
exposed function requiredField($input : variant; $serverRef : text) : boolean  //used to make an empty field required
	var $component: 4D.WebFormItem
	$component := web Form[$serverRef]
	
	case of 
		: ((Value type($input) = 1) && ($input = null))  //integer
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 3) && ($input = null))  //picture
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 30) && ($input = null))  //blob
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 2) && ($input = ""))  //string
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 4) && ($input = date(!00-00-00!)))  //date
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 5) && (undefined($input)))  //undefined
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 12) && ($input = null))  //variant
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 6) && ($input = null))  //boolean
			$component.addCSSClass("requiredField")
			return true
		: ((Value type($input) = 255) && ($input = null))  //null
			$component.addCSSClass("requiredField")
			return true
		else 
			$component.removeCSSClass("requiredField")
			return false
	end case 
	
	
exposed function haveInformations($IncType : text)
	if ($IncType = "Hardware")
		ds.setCss("webformRenderer1"; "visibility")
		ds.removeCss("webformRenderer2"; "visibility")
	else 
		ds.setCss("webformRenderer2"; "visibility")
		ds.removeCss("webformRenderer1"; "visibility")
	end if 
	
exposed function inputSelectBox($name1 : text; $name2 : text)
	ds.setCss($name1; "visibility")
	ds.removeCss($name2; "visibility")
	
	
exposed function getCurrentUser() : cs.UserEntity
	
	var $user: object
	var $usersInterface: cs.Qodly.Users
	
	$usersInterface := cs.Qodly.Users.new()
	$user := $usersInterface.getCurrentUser()
	
	return ds.User.getCurrentUser()
	
exposed function returnCurrentDate() : date
	return date(current Date())
	
	
exposed function displayImage($option : text)
	if ($option = "Non")
		ds.setCss("DisplayImage"; "visibility")
	else 
		ds.removeCss("DisplayImage"; "visibility")
	end if 
	
	
exposed function getDataFromDropBox()->$myObject : object
	
	var $event: object
	var $data: collection
	
	$myObject := new Object
	
	$event := Web Event
	$data := $event.data
	
	$myObject["data"] = $data
	

exposed function displayTreeArray()->$treeArrayData : collection
	var $types: cs.TypeSelection
	var $equType: cs.TypeEntity
	var $materialNode: object
	var $childNode: object
	
	$types := ds.Type.all()
	
	$treeArrayData := [\
		{key: "1"; \
		label: "Dashboard"; \
		icon: "fa-solid fa-chart-column"; \
		page: "79v19wrp5r"; \
		target: "dashboard" \
		}; \
	{key: "2", \
		label: "IT assets", \
		icon: "fa-solid fa-box", \
		page: "79v19wrp5r", \
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
		target: "calendar" \
		}; \
	{key: "5"; \
		label: "Users"; \
		icon: "fa-solid fa-users"; \
		page: "79v19wrp5r"; \
		target: "userManagement" \
		}; \
	{key: "6"; \
		label: "Settings"; \
		icon: "fa-solid fa-gear"; \
		page: "79v19wrp5r"; \
		target: "settings" \
		}]
	
	
	$materialNode := $treeArrayData[1].children[0]
	$materialNode.children := new Collection()
	
	
	ForEach ($equType; $types)
		$childNode := new Object("key"; "2-1-"+string($equType.ID); "label"; $equType.label; "icon"; "fa-solid fa-tag"; "variables"; [{target: "Shared:Page1"; value: $equType.label}; {target: "filter"; value: $equType.label}])
		$childNode.target := "equipmentByTypeInventory"
		$childNode.page := "79v19wrp5r"
		$materialNode.children.push($childNode)
	End