Class extends DataClass

exposed function getCurrentUser() : cs.UserEntity
	var $users: cs.UserSelection
	var $foundUser: cs.UserEntity
	
	var $user: object
	var $usersInterface: cs.Qodly.Users
	
	$usersInterface := cs.Qodly.Users.new()
	$user := $usersInterface.getCurrentUser()
	
	$users := this.query("email = :1"; $user.email)
	
	if ($users.length = 0)
		$foundUser := ds.User.new()
		$foundUser.email := $user.email
		$foundUser.picture := "/SOURCES/Shared/assets/images/placeholder.jpeg"
		
		$foundUser.save()
	else 
		$foundUser := $users.first()
	end if 
	
	$foundUser.firstName := $user.firstname
	$foundUser.lastName := $user.lastname
	$foundUser.role := $user.role
	$foundUser.lastLoginDate := current Date()
	$foundUser.save()
	
	return $foundUser
	
exposed function getAllManagers() : cs.UserSelection
	return this.query("role = :1"; "manager")

